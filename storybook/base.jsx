
import {ThemeProvider} from 'styled-components'

import {theme} from '../src'

const Base = ({children}) => (
  <ThemeProvider theme={theme}>
    <div>
      {children}
    </div>
  </ThemeProvider>
)

export default Base
