import { Entity } from '@backstage/catalog-model';
import { CatalogProcessor, CatalogProcessorEmit } from '@backstage/plugin-catalog-node';
import { LocationSpec } from '@backstage/plugin-catalog-common';
/**
 * Adds support for PPInfo specific entity kinds to the catalog.
 *
 * @public
 */
export declare class PPInfoProductEntityProcessor implements CatalogProcessor {
    getProcessorName(): string;
    private readonly validators;
    validateEntityKind(entity: Entity): Promise<boolean>;
    postProcessEntity(entity: Entity, _location: LocationSpec, emit: CatalogProcessorEmit): Promise<Entity>;
}
