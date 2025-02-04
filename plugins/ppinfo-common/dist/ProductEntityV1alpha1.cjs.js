'use strict';

var catalogModel = require('@backstage/catalog-model');
var Product_v1alpha1_schema = require('./Product.v1alpha1.schema.json.cjs.js');

const validator = catalogModel.entityKindSchemaValidator(Product_v1alpha1_schema.default);
const productEntityV1alpha1Validator = {
  // TODO(freben): Emulate the old KindValidator until we fix that type
  async check(data) {
    return validator(data) === data;
  }
};
const isProductEntityV1alpha1 = (entity) => entity.apiVersion === "mts.ru/v1alpha1" && entity.kind === "Product";

exports.isProductEntityV1alpha1 = isProductEntityV1alpha1;
exports.productEntityV1alpha1Validator = productEntityV1alpha1Validator;
//# sourceMappingURL=ProductEntityV1alpha1.cjs.js.map
