
import {ThemeProvider} from 'styled-components'

import {theme} from '../src'

const Base = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Base
