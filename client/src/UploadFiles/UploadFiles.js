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
import { FileLists } from './FileLists'

import { RejectedFilesWarning } from './RejectedFilesWarning'

const _l = console.log

const groupFiles = (files) => {
  const g = R.groupBy((f) => (f.accept ? 'accepted' : 'rejected'))(files)
  // const { accepted, rejected } = g
  // console.group('groupFiles')
  // // _l('g', g)
  // _l(`accepted (${R.type(accepted)})`, accepted)
  // _l(`accepted[0] (${R.type(accepted)})`, accepted[0])
  // _l(`accepted[0].length (${R.type(accepted)})`, accepted[0].length)
  // _l(`accepted[1] (${R.type(accepted)})`, accepted[1])
  // _l(`rejected (${R.type(rejected)})`, rejected)

  // console.groupEnd()

  return {
    accepted: R.has('accepted')(g) ? g.accepted : [],
    rejected: R.has('rejected')(g) ? g.rejected : []
  }
}

export const UploadFiles = () => {
  const [_files, _setFiles] = useState({ accepted: [], rejected: [] })
  const [_results, _setResults] = useState([])
  const [_showPleaseSelectFiles, _setShowPleaseSelectFiles] = useState(false)

  const _dropRef = useRef()
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

  /**
   *
   * @param {*} acceptedFiles
   */
  const _onDrop = (acceptedFiles) => {
    // one -->
    // _setFiles(groupFiles(acceptedFiles))
    // <--

    const { accepted, rejected } = groupFiles(acceptedFiles)
    // console.log('accepted', accepted)
    // console.log('_files.accepted', _files.accepted)
    _setFiles({
      accepted: R.flatten([accepted, _files.accepted]),
      rejected: R.flatten([rejected, _files.rejected])
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: _onDrop,
    getFilesFromEvent: (event) => customFileGetter(event)
  })

  // console.log('_files', _files)

  return (
    <UploadFilesDiv id="UploadFilesDiv">
      <DropDiv id="DropDiv" {...getRootProps()} ref={_dropRef}>
        <input {...getInputProps()} />
        <DropMsgDiv>
          <div>Drag 'n' drop some files here, or click to select files.</div>
          <OnlyCSVMsgDiv>
            <i>Only CSV files are accepted.</i>
          </OnlyCSVMsgDiv>
        </DropMsgDiv>
      </DropDiv>

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
