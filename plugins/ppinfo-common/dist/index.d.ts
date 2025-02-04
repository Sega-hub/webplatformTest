import { Entity, KindValidator } from '@backstage/catalog-model';

/**
 * MTS Product schema is used to register Products on the Platform.
 *
 * @public
 */
interface ProductEntityV1alpha1 extends Entity {
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
/**
 * Entity data validator for {@link ProductEntityV1alpha1}.
 *
 * @public
 */
declare const productEntityV1alpha1Validator: KindValidator;
/**
 * Typeguard for filtering entities and ensuring v1alpha1 entities
 * @public
 */
declare const isProductEntityV1alpha1: (entity: Entity) => entity is ProductEntityV1alpha1;

export { type ProductEntityV1alpha1, isProductEntityV1alpha1, productEntityV1alpha1Validator };
