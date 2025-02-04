'use strict';

var catalogModel = require('@backstage/catalog-model');
var pluginCatalogNode = require('@backstage/plugin-catalog-node');
var backstagePluginPpinfoCommon = require('@internal/backstage-plugin-ppinfo-common');

class PPInfoProductEntityProcessor {
  getProcessorName() {
    return "PPInfoProductEntityProcessor";
  }
  validators = [backstagePluginPpinfoCommon.productEntityV1alpha1Validator];
  async validateEntityKind(entity) {
    for (const validator of this.validators) {
      if (await validator.check(entity)) {
        return true;
      }
    }
    return false;
  }
  async postProcessEntity(entity, _location, emit) {
    const selfRef = catalogModel.getCompoundEntityRef(entity);
    if (backstagePluginPpinfoCommon.isProductEntityV1alpha1(entity)) {
      const template = entity;
      const target = template.spec.owner;
      if (target) {
        const targetRef = catalogModel.parseEntityRef(target, {
          defaultKind: "Group",
          defaultNamespace: selfRef.namespace
        });
        emit(
          pluginCatalogNode.processingResult.relation({
            source: selfRef,
            type: catalogModel.RELATION_OWNED_BY,
            target: {
              kind: targetRef.kind,
              namespace: targetRef.namespace,
              name: targetRef.name
            }
          })
        );
        emit(
          pluginCatalogNode.processingResult.relation({
            source: {
              kind: targetRef.kind,
              namespace: targetRef.namespace,
              name: targetRef.name
            },
            type: catalogModel.RELATION_OWNER_OF,
            target: selfRef
          })
        );
      }
    }
    return entity;
  }
}

exports.PPInfoProductEntityProcessor = PPInfoProductEntityProcessor;
//# sourceMappingURL=PPInfoProductProcessor.cjs.js.map
