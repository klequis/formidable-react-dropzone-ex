import styled from 'styled-components'
import { theme } from 'style/theme'

export const UploadFilesDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 50%;
`

// min-width: 500px;
export const DropDiv = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.unit * 8}px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: ${theme.colors.primary};
  width: 100%;
  ${'' /* @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
  } */}
`
// margin-bottom: 1rem;

export const DropMsgDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`

export const OnlyCSVMsgDiv = styled.div`
  padding-top: 4px;
`

// export const PleaseSelectFilesDiv = styled.div`
//   background-color: var(--warning);
//   margin-top: 20px;
// `

/*

export const DropDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 30px;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: var(--primary);
  width: 50%;
`

*/
