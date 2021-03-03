/**
 *
 * @param {Array} files of File objects
 * @returns {object} { accepted: [], rejected: [] }
 * @description Takes a single array of File objects and divides them into groups based on File.accept = true || false.
 */
export const upload = async (files) => {
  const formData = new FormData()

  files.forEach((f) => {
    formData.append('uploadedFiles', f)
  })

  const r = await fetch('http://localhost:3030/api/upload', {
    method: 'POST',
    body: formData
  })

  const j = await r.json()
  return j.files.uploadedFiles
}
