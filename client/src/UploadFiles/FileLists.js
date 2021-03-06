import styled from 'styled-components'
import { PanelList, PanelListItem } from 'components'
import { wdSuccess, wdWarning } from 'appWords'

export const FileListDiv = styled.div`
  display: flex;
  width: 100%;
`

export const FileLists = ({ files }) => {
  if (!files) return null
  const { accepted, rejected } = files

  return (
    <FileListDiv>
      {accepted ? (
        <PanelList context={wdSuccess} heading="Accepted">
          {files.accepted.map((f) => (
            <PanelListItem key={f.name}>{f.name}</PanelListItem>
          ))}
        </PanelList>
      ) : null}
      {rejected ? (
        <PanelList context={wdWarning} heading="Rejected">
          {files.rejected.map((f) => (
            <PanelListItem key={f.name}>{f.name}</PanelListItem>
          ))}
        </PanelList>
      ) : null}
    </FileListDiv>
  )
}
