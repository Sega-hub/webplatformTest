import {
    Entity,
    getCompoundEntityRef,
    parseEntityRef,
    RELATION_OWNED_BY,
    RELATION_OWNER_OF,
  } from '@backstage/catalog-model';
  import {
    CatalogProcessor,
    CatalogProcessorEmit,
    processingResult,
  } from '@backstage/plugin-catalog-node';
  import { LocationSpec } from '@backstage/plugin-catalog-common';
  import {
    ProductEntityV1alpha1,
    productEntityV1alpha1Validator,
    isProductEntityV1alpha1
  } from '@internal/backstage-plugin-ppinfo-common';
  
  /**
   * Adds support for PPInfo specific entity kinds to the catalog.
   *
   * @public
   */
  export class PPInfoProductEntityProcessor implements CatalogProcessor {
    getProcessorName(): string {
      return 'PPInfoProductEntityProcessor';
    }
  
    private readonly validators = [productEntityV1alpha1Validator];
  
    async validateEntityKind(entity: Entity): Promise<boolean> {
      for (const validator of this.validators) {
        if (await validator.check(entity)) {
          return true;
        }
      }
  
      return false;
    }
  
    async postProcessEntity(
      entity: Entity,
      _location: LocationSpec,
      emit: CatalogProcessorEmit,
    ): Promise<Entity> {
      const selfRef = getCompoundEntityRef(entity);
  
      if (isProductEntityV1alpha1(entity))
       { 
        const template = entity as ProductEntityV1alpha1;
        const target = template.spec.owner;
        if (target) {
          const targetRef = parseEntityRef(target, {
            defaultKind: 'Group',
            defaultNamespace: selfRef.namespace,
          });
          emit(
            processingResult.relation({
              source: selfRef,
              type: RELATION_OWNED_BY,
              target: {
                kind: targetRef.kind,
                namespace: targetRef.namespace,
                name: targetRef.name,
              },
            }),
          );
          emit(
            processingResult.relation({
              source: {
                kind: targetRef.kind,
                namespace: targetRef.namespace,
                name: targetRef.name,
              },
              type: RELATION_OWNER_OF,
              target: selfRef,
            }),
          );
        }
     }
  
      return entity;
    }
  }