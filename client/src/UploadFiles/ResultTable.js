import { format } from 'date-fns'
import * as R from 'ramda'
/*
  format(new Date(d), 'MM/dd/yyyy')

*/

const formatDate = (dateStr) => {
  console.log(`dateStr (${R.type(dateStr)})`, dateStr)
  const a = format(new Date(dateStr), 'MM/dd/yyyy hh:mm')
  console.log('a', a)
  return a
}

const TR = ({ file }) => {
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

export const ResultTable = ({ files }) => {
  console.log('ResultTable: files', files)
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Size</th>
          <th scope="col">Last modifed</th>
        </tr>
      </thead>
      <tbody>
        {files.map((f) => (
          <TR file={f} />
        ))}
      </tbody>
    </table>
  )
}

/*

export const ResultTable = ({ file }) => {
  const { mtime, name, path, size, type } = file

  return (
    <div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>mtime</td>
            <td>{mtime}</td>
          </tr>
          <tr>
            <td>path</td>
            <td>{path}</td>
          </tr>
          <tr>
            <td>size</td>
            <td>{size}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>{type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


*/
