import styled from 'styled-components'
import { ListGroup, ListGroupItem } from 'components'

const FileListDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
`

const TitleDiv = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.3em;
`

export const FileList = ({ title, files }) => {
  if (!files) return null
  return (
    <FileListDiv id="fld-inner">
      <TitleDiv id="title-div">{title}</TitleDiv>
      <ListGroup>
        {files.map((f) => {
          return <ListGroupItem key={f.name}>{f.name}</ListGroupItem>
        })}
      </ListGroup>
    </FileListDiv>
  )
}
