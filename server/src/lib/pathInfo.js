import path from 'path'
import { mergeRight } from 'ramda'

export const pathInfo = (fullPath) => {
  const a = {
    fullPath,
    baseName: path.basename(fullPath),
    dirName: path.dirname(fullPath),
    extName: path.extname(fullPath),
    parse: path.parse(fullPath)
  }
  return mergeRight(path.parse(fullPath), { fullPath })
}
