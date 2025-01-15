import {
    Entity,
    entityKindSchemaValidator,
    KindValidator,
  } from '@backstage/catalog-model';
  import schema from './Product.v1alpha1.schema.json';
  
  /**
   * MTS Product schema is used to register Products on the Platform.
   *
   * @public
   */
  export interface ProductEntityV1alpha1 extends Entity {
    /**
     * The apiVersion string of the ProductEntity.
     */
    apiVersion: 'mts.ru/v1alpha1';
    /**
     * The kind of the entity
     */
    kind: 'Product';
    /**
     * The specification of the Product Entity
     */
    spec: {
      /**
       * The type that the Product will create. For example 'internal'.
       */
      type?: string;

      /**
       * The owner entityRef of the Product Entity
       */
      owner: string;

       /**
       * The code entityRef of the Product Entity
       */
       code: string;

    };
  }
  
  
  const validator = entityKindSchemaValidator(schema);
  
  /**
   * Entity data validator for {@link ProductEntityV1alpha1}.
   *
   * @public
   */
  export const productEntityV1alpha1Validator: KindValidator = {
    // TODO(freben): Emulate the old KindValidator until we fix that type
    async check(data: Entity) {
      return validator(data) === data;
    },
  };
  
  /**
   * Typeguard for filtering entities and ensuring v1alpha1 entities
   * @public
   */
  export const isProductEntityV1alpha1 = (
    entity: Entity,
  ): entity is ProductEntityV1alpha1 =>
    entity.apiVersion === 'mts.ru/v1alpha1' &&
    entity.kind === 'Product';