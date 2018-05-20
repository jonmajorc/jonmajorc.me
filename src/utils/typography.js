import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Menlo'],
  bodyFontFamily: ['Raleway'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '.nav-menu': {
      fontWeight: 500,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
