const NoRecordFound = (props) => {
  return (
      <div className={ `alert ${props.alert}` }>
        No Record found
      </div>
  )
}

NoRecordFound.defaultProps = {
  alert: 'alert-warning'
}

export default NoRecordFound;