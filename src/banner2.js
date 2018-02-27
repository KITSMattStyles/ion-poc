
// Special banner only for the dummy layout data, which takes a
// slightly different form than our custom defined banner

import {random} from 'lodash/fp'
import styled from 'styled-components'

import {H2} from './type'

const generateImageUrl = () => `http://fillmurray.com/${random(500, 700)}/${random(100, 200)}`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  padding: 3px 12px;
`

const Image = styled.img`
  width: 100%;
`

const UnsafeHTML = ({
  content
}) => (
  <div
    dangerouslySetInnerHTML={{__html: content}}
  />
)

export const Banner = ({
  document: {
    title,
    content: {value: copy}
  }
}) => (
  <Wrapper>
    <H2>{title}</H2>
    <Image src={generateImageUrl()} />
    <UnsafeHTML content={copy} />
  </Wrapper>
)
