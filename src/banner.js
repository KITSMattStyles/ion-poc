
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {getTheme} from './theme/helpers'
import {H2, Text} from './type'

const Error = styled.span`
  color: red;
`

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  overflow: hidden;
`

const RawImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: opacity ${getTheme('transition.main')}ms ease-out;
  opacity: ${props => props.isVisible ? 1 : 0};
`

class Image extends Component {
  state = {
    isVisible: false
  }

  onLoad = event => this.setState(state => ({
    isVisible: true
  }))

  render () {
    return (
      <RawImage
        {...this.props}
        isVisible={this.state.isVisible}
        onLoad={this.onLoad}
      />
    )
  }
}

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
    <Image
      src={imageUrl}
    />
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

/*
 * Automatically loads the banner on mount
 */
export class BannerLoader extends Component {
  state = {
    data: null
  }

  componentDidMount () {
    const {url} = this.props

    if (!url) {
      console.warn('No load url supplied to loader')
      return
    }

    window.fetch(url)
      .then(res => res.json())
      .then(this.onContentLoad)
  }

  onContentLoad = ({items}) => {
    this.setState(state => ({
      data: {
        title: items['cms:banner_name'],
        imageUrl: items['cms:image_url'],
        link: items['cms:link']
      }
    }))
  }

  render () {
    const {url} = this.props

    if (!url) {
      return (
        <Wrapper>
          <H2><Error>No url supplied to banner loader</Error></H2>
        </Wrapper>
      )
    }

    const {data} = this.state

    if (!data) {
      return (
        <Wrapper>
          <H2>Loading...</H2>
        </Wrapper>
      )
    }

    return <Banner {...data} />
  }
}

BannerLoader.defaultProps = {
  url: null
}
