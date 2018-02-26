
import {storiesOf} from '@storybook/react'
// import {action} from '@storybook/addon-actions'
// import oc from 'open-color'

import {Banner} from '../src'

storiesOf('banner', module)
  .add('buttons', () => (
    <Banner
      title='Hello World'
      imageUrl='http://fillmurray.com/600/300'
      link='http://npmjs.org'
    />
  ))
