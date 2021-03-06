export const RejectedFilesWarning = ({ acceptCount, rejectCount }) => {
  return (
    <div className="alert alert-warning">
      <p>Only CSV are accepted.</p>
      <p>
        If you continue {acceptCount} files will be upload and {rejectCount}{' '}
        files will be ignored.
      </p>
    </div>
  )
}
