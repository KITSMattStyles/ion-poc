
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {H2, Text} from './type'

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

const Above = styled.div`
  position: relative;
  z-index: 10;
`

export const Banner = ({
  title,
  imageUrl,
  link
}) => (
  <Wrapper>
    <Above>
      <H2>{title}</H2>
      <a href={link}><Text>{link}</Text></a>
    </Above>
    <Image src={imageUrl} />
  </Wrapper>
)

Banner.defaultProps = {
  title: '',
  imageUrl: null,
  link: ''
}
Banner.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string
}
