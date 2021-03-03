Code is based on [formidable/examples/with-express.js](https://github.com/node-formidable/formidable/blob/master/examples/with-express.js).

Full example at: https://github.com/klequis/formidable-express-react-ex

I am finding that when using the below code to upload 2 .csv files

- both files are uploaded (good)
- files are uploaded to `/tmp` (not good)

```js
const uploadDir = path.join(__dirname, '../uploads')
const form = formidable({
  multiples: true,
  uploadDir: uploadDir
})
```

If instead I use this code to upload 2 .csv files

- only one file is uploaded (not good)
- files are uploaded to the specified directory (good)

```js
const uploadDir = path.join(__dirname, '../uploads')
const form = formidable()
form.multiples = true
form.uploadDir = uploadDir
```

## Case 1

### Code

```js
const uploadDir = path.join(__dirname, '../uploads')
const form = formidable({
  multiples: true,
  uploadDir: uploadDir
})
```

### Result/JSON set to client

> Both files (correct), but wrong location

```json
{
  "fields": {},
  "files": {
    "uploadedFiles": [
      {
        "size": 26,
        "path": "/tmp/upload_d3f43bb08d13ca18bcf01851dad9619d",
        "name": "test1.csv",
        "type": "text/csv",
        "mtime": "2021-02-24T01:51:38.286Z"
      },
      {
        "size": 26,
        "path": "/tmp/upload_df8032b4e1e0e2afb79f9d6d5ca905c7",
        "name": "test2.csv",
        "type": "text/csv",
        "mtime": "2021-02-24T01:51:38.286Z"
      }
    ]
  },
  "uploadDir": "/home/klequis/dev/upload-formidable/formidable-express-react-ex/server/uploads"
}
```

## Case 2

### Code

```js
const uploadDir = path.join(__dirname, '../uploads')
const form = formidable()
form.multiples = true
form.uploadDir = uploadDir
```

### Result/JSON sent to client

> Correct location but only one file

```json
{
  "fields": {},
  "files": {
    "uploadedFiles": {
      "size": 26,
      "path": "/home/klequis/dev/upload-formidable/formidable-express-react-ex/server/uploads/upload_1777568c3ac2f1720c37217210ce4364",
      "name": "test2.csv",
      "type": "text/csv",
      "mtime": "2021-02-24T01:53:58.121Z"
    }
  },
  "uploadDir": "/home/klequis/dev/upload-formidable/formidable-express-react-ex/server/uploads"
}
```
