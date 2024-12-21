import {
    PageWithHeader,
    Content,
    ContentHeader,
    CreateButton,
    SupportButton,
  } from '@backstage/core-components';
  import { useApi, configApiRef } from '@backstage/core-plugin-api';
  import { CatalogTable } from '@backstage/plugin-catalog';
  import {
    EntityListProvider,
    CatalogFilterLayout,
    EntityKindPicker,
    EntityLifecyclePicker,
    EntityNamespacePicker,
    EntityOwnerPicker,
    EntityProcessingStatusPicker,
    EntityTagPicker,
    EntityTypePicker,
    UserListPicker,
  } from '@backstage/plugin-catalog-react';
  // import { createExternalRouteRef, useRouteRef } from '@backstage/core-plugin-api';
  import React from 'react';
  
  // export const createComponentRouteRef = createExternalRouteRef({
  //   id: 'create-component',
  //   optional: true,
  //   defaultTarget: 'scaffolder.createComponent',
  // });

  export const CustomCatalogPage = () => {
    const orgName =
      useApi(configApiRef).getOptionalString('organization.name') ?? 'MTS'; 
    
    // const createComponentLink = useRouteRef(createComponentRouteRef);

    const addProductLink = () => '/create/templates/default/add-product';
    return (
      <PageWithHeader title={orgName} themeId="myTheme">
        <Content>
          <ContentHeader title="">
            <CreateButton
              title="ADD PRODUCT" // TODO: add localization
              to={addProductLink?.()}
            />
            <SupportButton>All your software catalog entities</SupportButton>
          </ContentHeader>
          <EntityListProvider pagination>
            <CatalogFilterLayout>
              <CatalogFilterLayout.Filters>
                <EntityKindPicker />
                <EntityTypePicker />
                <UserListPicker />
                <EntityOwnerPicker />
                <EntityLifecyclePicker />
                <EntityTagPicker />
                <EntityProcessingStatusPicker />
                <EntityNamespacePicker />
              </CatalogFilterLayout.Filters>
              <CatalogFilterLayout.Content>
                <CatalogTable />
              </CatalogFilterLayout.Content>
            </CatalogFilterLayout>
          </EntityListProvider>
        </Content>
      </PageWithHeader>
    );
  };