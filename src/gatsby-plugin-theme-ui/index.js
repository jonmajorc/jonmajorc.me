import 'what-input'

export default {
  colors: {
    text: '#1B1616',
    lightBlack: '#484848',
    midnight: '#000',
    b: '#1B1616',
    background: '#ffffff',
    greenPastel: '#16C79E',
    redPastel: '#E45261',
    w: '#fff',
    beige: '#ffe4c4',
    orange: '#F68D2D',
    darkOrange: '#BD5113',
    teal: '#95D0B8',
  },
  breakpoints: [
    '30em', //480px
    '48em', //768px
    '62em', //992px
    '75em', //1200px
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    semibold: 600,
    bold: 700,
  },
  fontSizes: [12, 14, 18, 20, 24, 36, 48, 64],
  fonts: {
    body: 'Lato',
    heading: 'Menlo, monospace',
    button: 'Menlo, monospace',
    monospace: 'Menlo, monospace',
  },
  shadows: {
    newTextShadow: '-4px 2px 3px #e0e0e0',
    newContentBox: '0 4px 20px 0px rgba(0,0, 0, .25)',
    shadow1: '0 4px 8px 2px rgba(0,0,0,.25)',
    shadowHover: '-1px 7px 16px 2px rgba(0,0,0,0.1)',
  },
  borders: {
    leatherPinStripe: '2px dashed #F8E9D6',
    buttonBorder: '3px solid #F68D2D',
    inputBottom: '1px solid #F8E9D6',
    inputBottomFocus: '1px solid #F68D2D',
  },
  transition: {
    zoom: 'all 150ms cubic-bezier(0.53, 1.51, 0.69, 1.15)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      margin: '0 auto',
      background: '#fdfdfd',

      '*': {
        boxSizing: 'border-box',

        '&::selection': {
          backgroundColor: '#c369c3',
          color: 'white',
        },

        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none !important',
          transition: 'none !important',
        },
      },
    },
    h1: {
      color: '#403D39',
      fontFamily: 'heading',
      fontSize: [4, 5, 6, 6, 7],
      letterSpacing: -1,
      margin: 0,
      whiteSpace: 'nowrap',
    },
    h3: {
      color: '#403D39',
      fontFamily: 'heading',
      fontSize: [3, 3, 4, 5],
      fontWeight: 'body',
      margin: 0,

      '&.bold': {
        fontWeight: 'bold',
      },
    },
    h4: {
      color: '#403D39',
      fontFamily: 'heading',
      fontSize: [2, 2, 3, 4],
      fontWeight: 'body',
      margin: 0,

      '&.bold': {
        fontWeight: 'bold',
      },
    },
    h5: {
      color: '#403D39',
      fontFamily: 'heading',
      fontSize: [2, 2, 3, 3],
      fontWeight: 'body',
      margin: 0,

      '&.bold': {
        fontWeight: 'bold',
      },
    },
    link: {
      color: 'beige',
      textDecoration: 'none',

      '&:hover': {
        color: 'darkOrange',
        textDecoration: 'underline',
        fontWeight: 'bold',
      },

      '&.active': {
        color: 'darkOrange',
        fontWeight: 'bold',
        textDecoration: 'underline',
      },
    },
    p: {
      lineHeight: 1.5,
    },
  },
}
