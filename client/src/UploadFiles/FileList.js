import styled from 'styled-components'

const FileListDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;

  flex-basis: 50%;
  // flex-shrink: 0;
  // flex-grow: 0;
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
      <ul className="list-group">
        {files.map((f) => {
          return (
            <li className="list-group-item" key={f.name}>
              {f.name}
            </li>
          )
        })}
      </ul>
    </FileListDiv>
  )
}
