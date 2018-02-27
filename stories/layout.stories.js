
import {storiesOf} from '@storybook/react'
// import {action} from '@storybook/addon-actions'
// import oc from 'open-color'
import styled from 'styled-components'

import {Layout} from '../src'
import data from '../src/layout.json'

const Page = styled.div`
  position: relative;
  margin: 0 auto;
  width: 540px;
`

storiesOf('Layout', module)
  .add('layout', () => (
    <Page>
      <Layout
        containers={data.containers}
        documents={data.documents}
      />
    </Page>
  ))
