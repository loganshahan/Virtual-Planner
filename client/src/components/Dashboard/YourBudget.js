import React, { PureComponent, Fragment } from 'react';
import {Doughnut} from 'react-chartjs-2';


export class YourBudget extends PureComponent {
	
  render() {
		const {positive, negative} = this.props;
		if(positive === 0 && negative === 0) {
			return(
				<Fragment>
				<h3>Your Budget</h3>
				<div className='custom_no'
				>
					<h5>You haven't added any information in your budget</h5>
				</div>
				</Fragment>
			)
		} else {

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
								'rgba(255, 242, 234, 1)',
								'rgba(255, 242, 234, 1)'
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
}

export default YourBudget
