import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes
  
  } from '@backstage/theme';
  
  export const myTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: {
        ...palettes.light,
        primary: {
          main: '#343b58',
        },
        secondary: {
          main: '#565a6e',
        },
        error: {
          main: '#8c4351',
        },
        warning: {
          main: '#8f5e15',
        },
        info: {
          main: '#34548a',
        },
        success: {
          main: '#485e30',
        },
        background: {
          default: '#fff',
          paper: '#fff',
        },
        banner: {
          info: '#34548a',
          error: '#8c4351',
          text: '#343b58',
          link: '#565a6e',
        },
        errorBackground: '#8c4351',
        warningBackground: '#8f5e15',
        infoBackground: '#343b58',
        navigation: {
          background: '#343b58',
          indicator: '#555555',
          color: '#fff',
          selectedColor: '#ffffff',
        },
      },
    }),
    fontFamily: 'MTS Compact',
    // components: {
    //   MuiButton: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: 3,
    //         textTransform: 'none',
    //       },
    //       contained: {
    //         boxShadow: 'none',
    //         backgroundColor: '#ff0032'
    //       },
    //     },
    //   },
    // },
     /* below drives the header colors */
    pageTheme: {
      home: genPageTheme({ colors: ['#343b58'], shape: shapes.wave }),
      documentation: genPageTheme({
        colors: ['#8c4351', '#343b58'],
        shape: shapes.wave2,
      }),
      tool: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.round }),
      service: genPageTheme({
        colors: ['#8c4351', '#343b58'],
        shape: shapes.wave,
      }),
      website: genPageTheme({
        colors: ['#343b58', '#fff'],
        shape: shapes.wave2,
      }),
      library: genPageTheme({
        colors: ['#8c4351', '#343b58'],
        shape: shapes.wave,
      }),
      other: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
      app: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
      apis: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
    },
    defaultPageTheme: 'home',
  });