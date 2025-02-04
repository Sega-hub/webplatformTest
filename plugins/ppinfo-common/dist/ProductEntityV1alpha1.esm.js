import { entityKindSchemaValidator } from '@backstage/catalog-model';
import schema from './Product.v1alpha1.schema.json.esm.js';

const validator = entityKindSchemaValidator(schema);
const productEntityV1alpha1Validator = {
  // TODO(freben): Emulate the old KindValidator until we fix that type
  async check(data) {
    return validator(data) === data;
  }
};
const isProductEntityV1alpha1 = (entity) => entity.apiVersion === "mts.ru/v1alpha1" && entity.kind === "Product";

export { isProductEntityV1alpha1, productEntityV1alpha1Validator };
//# sourceMappingURL=ProductEntityV1alpha1.esm.js.map
