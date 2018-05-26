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
    /* '.typography-span--after, .typography-span--after:after, .section, .section:after, .object__var': {
      fontSize: rhythm(1.5),
    }, */
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
