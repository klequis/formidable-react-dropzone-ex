import styled from 'styled-components'
import { theme } from 'style/theme'
import PropTypes from 'prop-types'
import { contextList } from 'appWords'

const PanelListDiv = styled.div`
  flex-grow: 1;
  flex-shring: 1;
  flex-basis: 1;
  width: 50%;
`
const PanelHeadingDiv = styled.div`
  text-align: center;
  padding: 4px;
  background-color: ${(props) => theme.colors[props.context]};
  border-radius: 4px 4px 0 0;
  /*border: 1px solid ${theme.colors.gray};*/
  border: 1px solid ${theme.colors.background};
`

const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  border-radius: 0.25rem;
  margin-top: 0;
`

export const PanelList = ({ context = 'primary', children, heading }) => {
  return (
    <PanelListDiv>
      <PanelHeadingDiv context={context}>{heading}</PanelHeadingDiv>
      <ListUl>{children}</ListUl>
    </PanelListDiv>
  )
}

PanelList.propTypes = {
  context: PropTypes.oneOf(contextList)
}

/*

<PanelListItem>Item One</PanelListItem>
<PanelListItem>Item Two</PanelListItem>
<PanelListItem>Item Three</PanelListItem>
*/
