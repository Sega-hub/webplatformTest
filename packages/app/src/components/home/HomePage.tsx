import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CustomHomepageGrid } from '@backstage/plugin-home';

const defaultConfig = [
    {
      //component: <HomePageSearchBar />, // Or 'HomePageSearchBar' as a string if you know the component name
      x: 0,
      y: 0,
      width: 12,
      height: 1,
      movable: true,
      resizable: false,
      deletable: false,
    },
  ];

export const HomePage = (
  <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
        <CustomHomepageGrid config={defaultConfig}/>
    </Grid>
  </Grid>
);