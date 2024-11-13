import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node/alpha';
import { PPInfoProductEntityProcessor } from './processor';

export const catalogModuleProductEntitiesProcessor = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'ppinfo',
  register(env) {
    env.registerInit({
      deps: {
        catalog: catalogProcessingExtensionPoint,
      },
      async init({ catalog }) {
        catalog.addProcessor(new PPInfoProductEntityProcessor());
      },
    });
  },
});

export default catalogModuleProductEntitiesProcessor;