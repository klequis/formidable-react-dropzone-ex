import styled from 'styled-components'

// const PleaseSelectDiv = styled.div.attrs((props) => ({
//   className: props.ClassName
// }))`
//   width: 100%;
// `

const PleaseSelectDiv = styled.div`
  width: 100%;
`

export const PleaseSelectFiles = ({ acceptCount, rejectCount }) => {
  return (
    <PleaseSelectDiv className="alert alert-warning">
      Please select some files to upload.
    </PleaseSelectDiv>
  )
}
