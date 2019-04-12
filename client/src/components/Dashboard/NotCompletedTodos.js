import React from 'react';
import moment from 'moment'

const NotCompletedTodos = (props) => {
    
    const render = () => {
        const {notcompleted} = props
        if(notcompleted.length === 0) {
            return(
              <div className='custom_no'
              >
                <h5>You don't have any pending todos.</h5>
              </div>
            )
          } else {
            return notcompleted.map((val, index) => {
                const {id, title, body, category, createdAt, isComplete} = val;
                
                return(
                        
                    <div 
                    className="list-group mt-2 col-md-12"
                    data-aos='fade-in'
                    data-aos-offset='0' 
                    key={id}>
            
                            <div href="#" 
                            className={!isComplete ? '"not-completed list-group-item list-group-item-action flex-column align-items-start" ' : 'mark-complete list-group-item list-group-item-action flex-column align-items-start'}
                            >
            
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1"> {title} </h5>
                                <h6>{moment(createdAt).format('MMM Do YYYY hh:mm a')}</h6>
                            </div>
                            <p className="mb-1"> {body} </p>        
                        </div>  
                    </div>
            
                )
            })
          }
    }
    
    return (
      <div className='mt-3'>
      <h3>Not Completed Yet</h3>
        {render()}
        
      </div>
    )
  
}

export default NotCompletedTodos
