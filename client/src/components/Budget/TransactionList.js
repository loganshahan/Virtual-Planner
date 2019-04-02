import React, {Fragment} from 'react';
import TransactionListEntry from './TransactionListEntry';

function TransactionList(props) {
    const txList = props.transactions.map((transaction, inx) => (
        <TransactionListEntry transaction={transaction} key={inx} />
    ))
  return (
    <Fragment>
        <h1>Transactions</h1>
        <div className="container">
            {txList}
        </div>
    </Fragment>
  )
}

export default TransactionList
