import {
    CatalogKindExploreContent,
    ExploreLayout,
  } from '@backstage-community/plugin-explore';
import React from 'react';
  
export const ExplorePage = () => {
    return (
      <ExploreLayout
        title="Explore MTS Ecosystem"
        subtitle="Browse our ecosystem"
      >
        <ExploreLayout.Route path="domains" title="Domains">
          <CatalogKindExploreContent kind="domain" />
        </ExploreLayout.Route>
        <ExploreLayout.Route path="systems" title="Systems">
          <CatalogKindExploreContent kind="system" />
        </ExploreLayout.Route>
      </ExploreLayout>
    );
  };
  
  export const explorePage = <ExplorePage />;