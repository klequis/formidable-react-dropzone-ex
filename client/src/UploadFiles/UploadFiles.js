import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as R from 'ramda'
import { Button } from 'components'
import { upload } from './upload'
import { ResultTable } from './ResultTable'
import {
  UploadFilesDiv,
  DropDiv,
  DropMsgDiv,
  ButtonDiv,
  OnlyCSVMsgDiv
} from './uploadFilesStyles'
// import { PleaseSelectFiles } from './PleaseSelectFiles'
import { FileLists } from './FileLists'

import { RejectedFilesWarning } from './RejectedFilesWarning'

const groupFiles = (files) => {
  const g = R.groupBy((f) => (f.accept ? 'accepted' : 'rejected'))(files)
  return {
    accepted: R.has('accepted')(g) ? g.accepted : [],
    rejected: R.has('rejected')(g) ? g.rejected : []
  }
}

export const UploadFiles = () => {
  const [_files, _setFiles] = useState({ accepted: [], rejected: [] })
  const [_results, _setResults] = useState([])
  const [_showPleaseSelectFiles, _setShowPleaseSelectFiles] = useState(false)

  const dropRef = useRef()
  const _acceptedLength = _files.accepted.length
  const _rejectedLength = _files.rejected.length
  const _totalSelected = _acceptedLength + _rejectedLength
  const _resultsLength = _results.length

  const _uploadClick = async () => {
    if (_acceptedLength > 0) {
      const r = await upload(_files.accepted)
      _setResults(r)
    }
    _setShowPleaseSelectFiles(_totalSelected === 0)
  }

  const onDrop = (acceptedFiles) => {
    _setFiles(groupFiles(acceptedFiles))
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    getFilesFromEvent: (event) => customFileGetter(event)
  })

  return (
    <UploadFilesDiv id="UploadFilesDiv">
      <DropDiv id="DropDiv" {...getRootProps()} ref={dropRef}>
        <input {...getInputProps()} />
        <DropMsgDiv>
          <div>Drag 'n' drop some files here, or click to select files.</div>
          <OnlyCSVMsgDiv>
            <i>Only CSV files are accepted.</i>
          </OnlyCSVMsgDiv>
        </DropMsgDiv>
      </DropDiv>
      {/* {_showPleaseSelectFiles ? <PleaseSelectFiles /> : null} */}
      {_resultsLength > 0 ? <ResultTable files={_results} /> : null}

      {_resultsLength === 0 && _rejectedLength > 0 ? (
        <RejectedFilesWarning
          acceptCount={_acceptedLength}
          rejectCount={_rejectedLength}
        />
      ) : null}
      {_resultsLength === 0 && (_acceptedLength > 0 || _rejectedLength > 0) ? (
        <>
          <FileLists files={_files} />
          <ButtonDiv>
            <Button onClick={_uploadClick} disabled={_showPleaseSelectFiles}>
              Upload
            </Button>
          </ButtonDiv>
        </>
      ) : null}
    </UploadFilesDiv>
  )
}

/**
 *
 * @param {object} file a File object
 * @returns {object} a File object
 */
const updateAcceptProp = (file) => {
  const filename = file.name
  const ext = filename.substr(filename.lastIndexOf('.') + 1)

  Object.defineProperty(file, 'accept', {
    value: ext === 'csv' ? true : false
  })
  return file
}

/**
 *
 * @param {event} event fileDrop event
 * @returns {Array} array of accepted files
 */
async function customFileGetter(event) {
  // console.log('event', event)
  const fileList = event.dataTransfer
    ? event.dataTransfer.files
    : event.target.files
  console.log('fileList', fileList)
  return R.map(updateAcceptProp, fileList)
}

/*

<ul className="list-group">
              {_files.rejected.map((f) => (
                <li
                  className="list-group-item"
                  style={{ width: 176 }}
                  key={f.name}
                >
                  {f.name}
                </li>
              ))}
            </ul>


*/
