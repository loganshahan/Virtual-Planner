import React from 'react'

function Balance(props) {
    const style = {
        color: props.total > 0 ? 'green' : 'red'
    }
  return (
    <div>
        
        <h1>Balance</h1>
        <p style={style}> $ {props.total.toFixed(2)} </p>
      
    </div>
  )
}

export default Balance
