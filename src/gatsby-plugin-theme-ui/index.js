import 'what-input'
import 'typeface-lato'

const breakpoints = ['600px', '900px', '1200px']

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp})`)

export default {
  colors: {
    text: '#1B1616',
    darkRed: '#8A391C',
    darkOrange: '#BD5113',
    b: '#1B1616',
    w: '#fff',
    teal: '#95D0B8',
    disabled: '#BCBCBC',

    // Old
    lightBlack: '#484848',
    midnight: '#000',
    background: '#ffffff',
    greenPastel: '#16C79E',
    redPastel: '#E45261',
    beige: '#ffe4c4',
    orange: '#F68D2D',
  },
  breakpoints,
  fontWeights: {
    body: 400,
    heading: 700,
    semibold: 600,
    bold: 700,
  },
  fontSizes: [12, 14, 18, 20, 24, 36, 48, 64],
  fonts: {
    body: 'Lato',
    heading: 'Lato',
    button: 'Lato',
    monospace: 'Menlo, monospace',
  },
  filter: {
    dropShadow1: `drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2))`,
  },
  shadows: {
    newTextShadow: '-4px 2px 3px #e0e0e0',
    newContentBox: '0 4px 20px 0px rgba(0,0, 0, .25)',
    shadow1: '0 4px 8px 2px rgba(0,0,0,.25)',
    shadowHover: '-1px 7px 16px 2px rgba(0,0,0,0.1)',
    shadow2:
      'inset 0 4px 4px 0 #ffffff, inset 0 7px 4px 0 #d4d4d4, 0 4px 4px 0px #ffffff, 0 7px 4px 0px #d4d4d4',
  },
  borders: {
    borderBlack1px: '1px solid #1B1616',
    leatherPinStripe: '2px dashed #F8E9D6',
    buttonBorder: '3px solid #F68D2D',
    buttonBorderHover: '3px solid #BD5113',
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
        fontSize: 2,
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

      body: {},
    },
    h1: {
      color: '#403D39',
      fontFamily: 'heading',
      fontSize: [4, 5, 5],
      letterSpacing: 3,
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
      fontFamily: 'body',

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
      fontSize: 2,
      lineHeight: 1.5,
      margin: 0,
    },
  },
}
