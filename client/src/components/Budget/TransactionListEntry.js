import React from 'react'

function TransactionListEntry(props) {
    const {transaction} = props
    const style = {
        color: transaction.amount > 0 ? 'green' : 'red'
    }
  return (
    <div className="row custom_table">
        <div className="col-md-6 custom_border">
            <h5>{transaction.description}:</h5>
        </div>
        <div className="col-md-6">
          <h5 style={style}> {transaction.amount}</h5>
        </div>
    </div>
  )
}

export default TransactionListEntry
