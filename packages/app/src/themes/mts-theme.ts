import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
    defaultTypography
  } from '@backstage/theme';

import MTSTextFont from '../assets/fonts/MTSText-Regular.woff2';
import MTSWideFont from '../assets/fonts/MTSWide-Medium.woff2';
  

  const mtsTextFont = {
    fontFamily: 'MTS Text',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
      local('MTS Text'),
      url(${MTSTextFont}) format('woff2'),
    `,
  };

  const mtsWideFont = {
    fontFamily: 'MTS Wide',
    src: `
      local('MTS Wide'),
      url(${MTSWideFont}) format('woff2'),
    `,
  };

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
          default: '#F2F3F7',
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
    typography: {
      ...defaultTypography,
      htmlFontSize: 18,
      fontFamily: 'MTS Text',
      h1: {
        fontFamily: 'MTS Wide',
        fontSize: 36,
        fontWeight: 500,
        marginBottom: 0,
      },
      h2: {
        fontFamily: 'MTS Text',
        fontSize: 32,
        fontWeight: 500,
        marginBottom: 0,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@font-face': [mtsTextFont, mtsWideFont],
        },
      },
      BackstageSidebarItem: {
        styleOverrides: {
          root: {
            height: 48,
            textDecorationLine: 'none'
          }
        }
      },
      MuiButton: {  
        styleOverrides: { 
          root: {  
            textTransform: 'none', // Remove uppercase text  
          }, 
          containedPrimary: {  
            '&:hover': {  
              backgroundColor: '#ff0032', // light blue on hover
            },  
            color: '#FFFFFF',  
          },
          colorSecondary: '#ff0032'
        },  
      },  
    },
     /* below drives the header colors */
    pageTheme: {
      home: genPageTheme(
        { 
          colors: ['#343b58'], 
          shape: shapes.wave,
          options: {
            fontColor: "#fff"
        }
        }),
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