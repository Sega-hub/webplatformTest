'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var backendPluginApi = require('@backstage/backend-plugin-api');
var alpha = require('@backstage/plugin-catalog-node/alpha');
var PPInfoProductProcessor = require('./processor/PPInfoProductProcessor.cjs.js');

const catalogModuleProductEntitiesProcessor = backendPluginApi.createBackendModule({
  pluginId: "catalog",
  moduleId: "ppinfo",
  register(env) {
    env.registerInit({
      deps: {
        catalog: alpha.catalogProcessingExtensionPoint
      },
      async init({ catalog }) {
        catalog.addProcessor(new PPInfoProductProcessor.PPInfoProductEntityProcessor());
      }
    });
  }
});

exports.catalogModuleProductEntitiesProcessor = catalogModuleProductEntitiesProcessor;
exports.default = catalogModuleProductEntitiesProcessor;
//# sourceMappingURL=module.cjs.js.map
