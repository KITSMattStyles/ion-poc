
import {find} from 'lodash/fp'
import styled from 'styled-components'

import {Banner} from './banner2'

const findById = id => find(({document}) => document.id === id)
const BANNER_TYPE = 'Banner'

const Warn = styled.div`
  background: rgb(244, 244, 0);
  color: rgb(44, 44, 44);
  padding: 4px 12px;
  margin: 20px 0;
  border-radius: 3px;
`

const Generic = ({data}) => {
  console.log(data)
  if (data.type === BANNER_TYPE) {
    return <Banner {...data} />
  }

  return (
    <Warn>{`Can not render component type: ${data.type}`}</Warn>
  )
}

const Container = ({
  components
}) => components.map(component => (
  <Generic key={component.id} data={component} />
))

export const Layout = ({
  containers,
  documents
}) => containers.map(container => (
  <Container
    key={container.id}
    components={container.components.map(component => {
      return {
        ...component,
        ...findById(component.attributes.document)(documents)
      }
    })}
  />
))
