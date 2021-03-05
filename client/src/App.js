import { UploadFiles } from './UploadFiles'
import styled from 'styled-components'
import { Panel, PanelList, PanelListItem } from 'components'

const AppDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 20px;
`

const Tmp = styled.div`
  display: flex;
`

export const App = () => {
  return (
    <AppDiv>
      {/* <PanelList>
        <PanelListItem>Item One</PanelListItem>
        <PanelListItem>Item Two</PanelListItem>
        <PanelListItem>Item Three</PanelListItem>
      </PanelList> */}
      {/* <Panel /> */}

      <UploadFiles />
    </AppDiv>
  )
}
