import React from 'react';

import { Page, Content, InfoCard, LinkButton } from '@backstage/core-components';
import {
  SearchContextProvider,
} from '@backstage/plugin-search-react';
import {
  HomePageCompanyLogo,
  HomePageToolkit
} from '@backstage/plugin-home';
import { HomePageSearchBar, } from '@backstage/plugin-search';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { CardContent, CardActions } from '@mui/material';
import { Typography } from '@mui/material';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0)
  }
}));

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
  cardContent: {
    height: '80%'
  },
  cardActions: {
    height: '20%'
  },
  cardIcon: {
    padding: '10px',
    float: 'right',
    height: 'auto',
    width: '80px',
  }
}));

export const HomePage = () => {
  const { container } = useLogoStyles();
  const classes = useStyles();

  return (
    <SearchContextProvider>
      <Page themeId="myTheme">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo className={container} />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar InputProps={{
                classes: {
                  root: classes.searchBarInput,
                  notchedOutline: classes.searchBarOutline
                }
              }} placeholder="Search" />
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Grid item xs={12} md={2}>
                <InfoCard noPadding variant='fullHeight'>
                  <CardContent className={classes.cardContent} aria-label="Total Products">
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                      Total Products
                    </Typography>
                    <Typography variant="h2" component="div">
                      97
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <LinkButton target="blank" to=''>View</LinkButton>
                  </CardActions>
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <InfoCard noPadding variant='fullHeight'>
                  <CardContent className={classes.cardContent} aria-label="Total Services">
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                      Total Services
                    </Typography>
                    <Typography variant="h2" component="div">
                      123
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <LinkButton target="blank" to=''>View</LinkButton>
                  </CardActions>
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <InfoCard noPadding variant='fullHeight'>
                  <CardContent className={classes.cardContent} aria-label="Total Components">
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                      Total Components
                    </Typography>
                    <Typography variant="h2" component="div">
                      236
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <LinkButton target="blank" to=''>View</LinkButton>
                  </CardActions>
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <InfoCard noPadding variant='fullHeight'>
                  <CardContent className={classes.cardContent} aria-label="Total APIs">
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                      Total APIs
                    </Typography>
                    <Typography variant="h2" component="div">
                      307
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <LinkButton target="blank" to=''>View</LinkButton>
                  </CardActions>
                </InfoCard>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <HomePageToolkit 
                title="Getting started" 
                tools={Array(9).fill({
                  url: '#',
                  label: 'Link',
                  icon: <LibraryBooks />
              })} />
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
}