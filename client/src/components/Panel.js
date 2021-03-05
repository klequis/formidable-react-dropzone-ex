import styled from 'styled-components'
import { theme } from 'style/theme'
import { ListGroupItem } from 'components'

const PanelDiv = styled.div`
  box-shadow: 0 1spx 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  border: none;
`
// border: 1px solid ${theme.colors.red};
// border-radius: 6px;

const PanelHeadingDiv = styled.div`
  text-align: center;
  padding: 4px;
  background-color: ${theme.colors.red};
  background-image: linear-gradient(to bottom, #337ab7 0, #2e6da4 100%);
  border-radius: 4px 4px 0 0;
`
// background-image: linear-gradient(to bottom, #337ab7 0, #2e6da4 100%);
// backgrousnd-repeat: repeat-x;

const PanelTitleDiv = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
`

const NewLGI = styled(ListGroupItem)`
  &:first-child: {
    color: blue !important;
  }
`
// &list-group-item:first-child: {
//     color: blue !important;
//   }

const PanelBodyDiv = styled.div``
// padding: 15px;
export const Panel = ({ headingText, bodyText }) => {
  return (
    <PanelDiv>
      <PanelHeadingDiv>
        <PanelTitleDiv>Panel Title</PanelTitleDiv>
      </PanelHeadingDiv>
      <PanelBodyDiv>
        <ul className="list-group">
          <NewLGI className="list-group-item">Item one</NewLGI>
          <NewLGI className="list-group-item">Item two</NewLGI>
          <NewLGI className="list-group-item">Item three</NewLGI>
        </ul>
      </PanelBodyDiv>
    </PanelDiv>
  )
}

/*

.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}














*/

/*

const PanelDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px;
  border-color: rgb(116, 46, 56);
  background-color: rgb(31, 34, 35);
  border 1px solid transparent;
  border-radius: 4px;
`

const PanelHeadingDiv = styled.div`
  background-color: rgb(73, 29, 29);
  background-image: linear-gradient(rgb(73, 29, 29) 0px, rgb(87, 34, 34) 100%);
  border-bottom: 1px solid transparent;
  border-color: rgb(116, 46, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 133, 130);
  padding: 10px 15px;
`

const PanelTitleDiv = styled.div`
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
`

*/
