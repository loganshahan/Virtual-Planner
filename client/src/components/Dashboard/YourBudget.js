import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


export class YourBudget extends Component {
	
  render() {
		const {positive, negative} = this.props;
    return (
      <div>
			<h3>Your Budget</h3>

      <Doughnut
        data={
							{
						labels: [
							'expenses',
							'income'
						],
						datasets: [{
							data: [negative, positive],
							backgroundColor: [
							'red',
							'green'
							],
							hoverBackgroundColor: [
							'red',
							'green'
							]
							
					}],

		maintainAspectRatio : false,
  text: '23%'
}
					}
          />
      </div>
    )
  }
}

export default YourBudget
