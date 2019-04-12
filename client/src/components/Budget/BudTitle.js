import React, {Fragment} from 'react'

function BudTitle() {
  return (
      <Fragment>
    <div className="row custom_title">
          <div className='col-md-4'>
        <h4>Created at:</h4>
    </div>
    <div className='col-md-4'>
        <h4>Description:</h4>
    </div>
    <div className='col-md-4'>
        <h4>Amount:</h4>
    </div>
          </div>
      </Fragment>
  )
}

export default BudTitle
