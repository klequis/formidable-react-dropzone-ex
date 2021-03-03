import cors from 'cors'
import formidable from '../formidable/src'
import path from 'path'
import { wrapAsync } from './wrapAsync'

const port = 3030

const app = require('express')()
app.use(cors())

app.post(
  '/api/upload',
  wrapAsync(async function (req, res) {
    const uploadDir = path.join(__dirname, '../uploads')
    const form = formidable({
      multiples: true,
      uploadDir: uploadDir // - doesn't work :(
    })

    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err)
        return
      }
      res.json({ fields, files, uploadDir })
    })
    form.on('error', function (error) {
      console.log('err', err)
    })
  })
)

app.get('/api/test', async (req, res, next) => {
  res.json({ result: 'success' })
})

app.use(function (error, req, res, next) {
  res.json({ message: error.message })
})

app.listen(port, () => {
  console.log(`Events API is listening on port ${port}`)
})
