import { format } from 'date-fns'
import * as R from 'ramda'
import styled from 'styled-components'

const TableStyle = styled.table`
  border-color: gray;
  border-collapse: collapse;
  border-spacing: 2px;
  box-sizing: border-box;
  color: #fff;
  display: table;
  margin-bottom: 1rem;
  text-indent: initial;
  width: 100%;
`
// border-collapse: separate; This rule is before: border-collapse: collapse;
// display: table;  From thead>table

const THeadStyle = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`

const TRStyle = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`
const THStyle = styled.th`
  vertical-align: bottom;
  border-bottom: 2px solid #444;
  padding: 0.3rem;
  border-top: 1px solid #444;
  text-align: inherit;
  text-align: -webkit-match-parent;
  display: table-cell;
  font-weight: bold;
  text-align: -internal-center;
`

const TBodyStyle = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`

const TDStyle = styled.td`
  padding: 0.3rem;
  vertical-align: top;
  border-top: 1px solid #444;
  display: table-cell;
`

const formatDate = (dateStr) => {
  console.log(`dateStr (${R.type(dateStr)})`, dateStr)
  const a = format(new Date(dateStr), 'MM/dd/yyyy hh:mm')
  console.log('a', a)
  return a
}

const TRx = ({ file }) => {
  console.log('TR: file', file)
  const { mtime, name, size } = file

  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{size}</td>
      <td>{formatDate(mtime)}</td>
    </tr>
  )
}

const TR = ({ file }) => {
  // console.log('TR: file', file)
  const { mtime, name, size } = file

  return (
    <TRStyle key={name}>
      <TDStyle>{name}</TDStyle>
      <TDStyle>{size}</TDStyle>
      <TDStyle>{formatDate(mtime)}</TDStyle>
    </TRStyle>
  )
}

export const ResultTable = ({ files }) => {
  console.log('ResultTable: files', files)
  return (
    <TableStyle>
      <THeadStyle>
        <TRStyle>
          <THStyle scope="col">Name</THStyle>
          <THStyle scope="col">Size</THStyle>
          <THStyle scope="col">Last modified</THStyle>
        </TRStyle>
      </THeadStyle>
      <TBodyStyle>
        {files.map((f) => (
          <TR file={f} />
        ))}
      </TBodyStyle>
    </TableStyle>
  )
}
