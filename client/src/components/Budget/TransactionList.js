import React, {Fragment} from 'react';
import TransactionListEntry from './TransactionListEntry';
import BudTitle from './BudTitle';

function TransactionList(props) {

  const renderTran = () => {
    const {transactions} = props;

    if(transactions.length === 0) {
       return(
        <div className='custom_no'>
          <h5>No transactions yet</h5>
        </div>
      )

  } else {
    return transactions.map((transaction, inx) => (
      <TransactionListEntry transaction={transaction} key={inx}/>
  ))
  }
};

  return (
    <Fragment>
        <div className="container mt-5 mb-5" style={{padding: 0}}>
        <BudTitle />
            {renderTran()}
        </div>
    </Fragment>
  )
}

export default TransactionList
