import React from 'react'

function TransactionListEntry(props) {
    const {transaction} = props
    const style = {
        color: props.transaction.amount > 0 ? 'green' : 'red'
    }
  return (
    <div className="row custom_table">
        <div className="col-md-6 custom_border">
            <span>{props.transaction.description}:</span></div>
        <div className="col-md-6"><span style={style}> {transaction.amount}</span></div>
    </div>
  )
}

export default TransactionListEntry
