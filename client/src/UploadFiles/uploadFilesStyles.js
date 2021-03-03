import styled from 'styled-components'

export const UploadFilesDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-width: 500px;
`
export const DropDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: var(--primary);
  border-color: #c7d1db;
`

export const DropMsgDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`

export const FileListDiv = styled.div`
  display: flex;
  width: 100%;
`

export const OnlyCSVMsgDiv = styled.div`
  padding-top: 4px;
`

export const PleaseSelectFilesDiv = styled.div`
  background-color: var(--warning);
  margin-top: 20px;
`
