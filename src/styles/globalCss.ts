import { globalCss } from '.'

export const globalStyles = globalCss({
  body: {
    backgroundColor: '#fcfcfc',
    fontFamily: 'Nunito, sans-serif',
    margin: 0,
    padding: 0,
  },

  'h1, h2, h3, h4, h5, h6, p, span': {
    fontFamily: 'Nunito, sans-serif',
    color: '#c2c2c2',
  },
})
