import { UploadFiles } from './UploadFiles'
import styled from 'styled-components'

const AppDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 20px;
`
// background-color: red;
export const App = () => {
  return (
    <AppDiv>
      <UploadFiles />
    </AppDiv>
  )
}
