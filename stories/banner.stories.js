
import {storiesOf} from '@storybook/react'
// import {action} from '@storybook/addon-actions'
// import oc from 'open-color'
import styled from 'styled-components'

import {Banner, BannerLoader} from '../src'

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
  .add('banner autoload', () => (
    <Page>
      <BannerLoader
        url='https://www.kingfisher.test.onehippo.com/api/documents/5694d070-030e-45e2-9688-6af42e31ced6'
      />
    </Page>
  ))
