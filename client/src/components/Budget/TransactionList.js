import React, {Fragment} from 'react';
import TransactionListEntry from './TransactionListEntry';

function TransactionList(props) {

  const renderTran = () => {
    const {transactions} = props;

    if(transactions.length === 0) {
       return(
        <div>
          <h2>No transactions yet</h2>
        </div>
      )

  } else {
    return transactions.map((transaction, inx) => (
      <TransactionListEntry transaction={transaction} key={inx} />
  ))
  }
};

  return (
    <Fragment>
        <div className="container mt-5">
        <h1>Transactions</h1>
            {renderTran()}
        </div>
    </Fragment>
  )
}

export default TransactionList