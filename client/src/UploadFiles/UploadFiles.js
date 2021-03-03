import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as R from 'ramda'
import { FileList } from './FileList'
import { Button } from '../components/Button'
import { upload } from './upload'
import { ResultTable } from './ResultTable'
import {
  UploadFilesDiv,
  DropDiv,
  DropMsgDiv,
  ButtonDiv,
  FileListDiv,
  OnlyCSVMsgDiv,
  PleaseSelectFilesDiv
} from './uploadFilesStyles'

const groupFiles = R.groupBy((f) => (f.accept ? 'accepted' : 'rejected'))

export const UploadFiles = () => {
  const [_files, _setFiles] = useState({ accepted: [], rejected: [] })
  const [_results, _setResults] = useState([])
  const [_showPleaseSelectFiles, _setShowPleaseSelectFiles] = useState(false)

  const dropRef = useRef()

  const _upload = async () => {
    if (_files.accepted.length > 0) {
      _setShowPleaseSelectFiles(true)
      const r = await upload(_files.accepted)
      console.log('r', r)

      _setResults(r)
    } else {
      _setShowPleaseSelectFiles(true)
    }
  }

  const onDrop = (acceptedFiles) => {
    console.log('onDrop')
    _setFiles(groupFiles(acceptedFiles))
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    getFilesFromEvent: (event) => customFileGetter(event)
  })

  console.log('_files', _files)

  return (
    <UploadFilesDiv id="UploadFilesDiv">
      <DropDiv {...getRootProps()} ref={dropRef}>
        <input {...getInputProps()} />
        <DropMsgDiv>
          <div>Drag 'n' drop some files here, or click to select files.</div>
          <OnlyCSVMsgDiv>
            <i>Only CSV files are accepted.</i>
          </OnlyCSVMsgDiv>
          {_showPleaseSelectFiles ? (
            <PleaseSelectFilesDiv>
              Please select files to upload.
            </PleaseSelectFilesDiv>
          ) : null}
        </DropMsgDiv>
      </DropDiv>
      {_results.length > 0
        ? _results.map((f) => <ResultTable file={f} />)
        : null}

      {_results.length === 0 &&
      (_files.accepted.length > 0 || _files.rejected.length > 0) ? (
        <>
          <FileListDiv id="fld-outer">
            <FileList title="Accepted" files={_files.accepted} />
            <FileList title="Rejected" files={_files.rejected} />
          </FileListDiv>
          <ButtonDiv>
            <Button onClick={_upload} disabled={_showPleaseSelectFiles}>
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

import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as R from 'ramda'
import { FileList } from './FileList'
import { Button } from '../components/Button'
import { upload } from './upload'
import { ResultTable } from './ResultTable'
import {
  UploadFilesDiv,
  DropDiv,
  DropMsgDiv,
  ButtonDiv,
  FileListDiv,
  OnlyCSVMsgDiv,
  PleaseSelectFilesDiv
} from './uploadFilesStyles'

const groupFiles = R.groupBy((f) => (f.accept ? 'accepted' : 'rejected'))

export const UploadFiles = () => {
  const [_files, _setFiles] = useState({ accepted: [], rejected: [] })
  const [_results, _setResults] = useState([])
  const [_showPleaseSelectFiles, _setShowPleaseSelectFiles] = useState(false)
  const [_showFileListDiv, _setShowFileListDiv] = useState(false)

  const dropRef = useRef()

  const _upload = async () => {
    if (_files.accepted.length > 0) {
      _setShowPleaseSelectFiles(true)
      const r = await upload(_files.accepted)
      console.log('r', r)

      _setResults(r)
    } else {
      _setShowPleaseSelectFiles(true)
    }
  }

  const onDrop = (acceptedFiles) => {
    _setFiles(groupFiles(acceptedFiles))
    _setShowFileListDiv(true)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    getFilesFromEvent: (event) => customFileGetter(event)
  })

  return (
    <UploadFilesDiv id="UploadFilesDiv">
      <DropDiv {...getRootProps()} ref={dropRef}>
        <input {...getInputProps()} />
        <DropMsgDiv>
          <div>Drag 'n' drop some files here, or click to select files.</div>
          <OnlyCSVMsgDiv>
            <i>Only CSV files are accepted.</i>
          </OnlyCSVMsgDiv>
          {_showPleaseSelectFiles ? (
            <PleaseSelectFilesDiv>
              Please select files to upload.
            </PleaseSelectFilesDiv>
          ) : null}
        </DropMsgDiv>
      </DropDiv>

      {_results.length > 0 ? (
        _results.map((f) => <ResultTable file={f} />)
      ) : _showFileListDiv ? (
        <>
          <FileListDiv id="fld-outer">
            <FileList title="Accepted" files={_files.accepted} />
            <FileList title="Rejected" files={_files.rejected} />
          </FileListDiv>
          <ButtonDiv>
            <Button onClick={_upload} disabled={_showPleaseSelectFiles}>
              Upload
            </Button>
          </ButtonDiv>
        </>
      ) : null}
    </UploadFilesDiv>
  )
}



*/
