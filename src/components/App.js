import styled, { css } from 'react-emotion'
import { rhythm, scale } from '../utils/typography'

const App = styled('main')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default App
