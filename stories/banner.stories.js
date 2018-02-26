
import {storiesOf} from '@storybook/react'
// import {action} from '@storybook/addon-actions'
// import oc from 'open-color'
import styled from 'styled-components'

import {Banner} from '../src'

const Page = styled.div`
  position: relative;
  margin: 0 auto;
  width: 540px;
`

storiesOf('banner', module)
  .add('basic banner', () => (
    <Page>
      <Banner
        title='Hello World'
        imageUrl='http://fillmurray.com/600/300'
        link='http://npmjs.org'
      />
    </Page>
  ))
