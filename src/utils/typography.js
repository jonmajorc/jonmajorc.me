import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

const typography = new Typography({
  ...noriegaTheme,
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Roboto Mono'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

const { rhythm, scale } = typography
export { rhythm, scale, typography as default }
