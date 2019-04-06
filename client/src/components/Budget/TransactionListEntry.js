import React from 'react';
import axios from 'axios';


function TransactionListEntry(props) {
    const {transaction} = props
    console.log(transaction.amtId)

    const style = {
        color: transaction.amount > 0 ? 'green' : 'red',
        margin: 0
    }
    
    const handleDestroy = async () => {
        await axios.delete(`/api/transactions/single/${transaction.amtId}`)
        window.location.reload()
     }
    

  return (
    <div className="row custom_table" style={{alignItems: 'center'}}>
        <div className="col-md-6 custom_border">
            <h5>{transaction.description}:</h5>
        </div>
        <div className="col-md-6">
          <h5 style={style}> {transaction.amount}

          <input 
          type='button' 
          id={transaction.amtId}
          className='custom_delete' 
          value='X' 
          onClick={handleDestroy}
          />

          </h5>
        </div>
    </div>
  )
}

export default TransactionListEntry
