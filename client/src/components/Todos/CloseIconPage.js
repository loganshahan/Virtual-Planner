import React from 'react';

const CloseIconPage = (props) => {
    return (
    <button onClick={props.close} type="button" className="close" aria-label="Close"
    >
      <span aria-hidden="true">X</span>
    </button>
    );
};

export default CloseIconPage;