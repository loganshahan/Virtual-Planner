import React, { Component } from 'react'
import axios from 'axios';

export class MainCategory extends Component {

    state =  {
        categories: []
    }

    getUser = async () => {
        const res = await axios.get('/api/categories');
        const data = res.data;
        this.setState({
            categories: data
        })

    };
    componentDidMount (){
         this.getUser()
        }
    


  render() {
      console.log(this.state)
    return (
      <div>
            
      </div>
    )
  }
}

export default MainCategory
