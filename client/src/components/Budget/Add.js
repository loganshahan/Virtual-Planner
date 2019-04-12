import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import {Budgetsucess} from '../Assets/Sucess';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class Add extends Component {

    state = {
        description: '',
        amount: '',

        formErrors: {
          description: "",
          amount: ""
        }
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };

      Budgetsucess(e.target.value);

      switch (name) {
        case 'description':
          formErrors.description = 
            value === '' ? 'Add a value'
            : (!isNaN(value)) ? 'No numbers'
            : ''
          break;
        case 'amount':
          formErrors.amount = 
            value === '' ? 'Add a value'
            : (isNaN(value)) ? 'Add numbers'
            : ''
          break;
  
        default:
          break;
      };
      this.setState({ [e.target.name]: e.target.value });
      this.setState({ formErrors, [name]: value });
    };

    add = () => {
        this.props.onAdd(this.state.description, this.state.amount);
    };

    componentDidMount() {
      document.querySelector('#disabled').setAttribute('disabled', true);
    };

  render() {
    const { classes } = this.props;
    const { formErrors } = this.state;

    return (
      
<Fragment>
    <div className={classes.container}>
      <h3>$+ or $- from your budget !</h3>
      <form className="form-inline mb-2 budget_form">

        <FormControl className={classes.formControl}>
           { formErrors.description.length > 0 && (
          <span className="errorMessage">{formErrors.description}</span> )}
          <Input 
          id="desc" 
          name='description'
          value={this.state.description} 
          onChange={this.handleChange}
          placeholder='Description'
          autoComplete='off'
           />

        </FormControl>
        <FormControl className={classes.formControl}>
           { formErrors.amount.length > 0 && (
          <span className="errorMessage">{formErrors.amount}</span> )}
          <Input 
          id="amt" 
          name='amount'
          value={this.state.amount} 
          onChange={this.handleChange}
          placeholder='Amount'
          autoComplete='off'
           />
        </FormControl>

        <button 
        type="submit" 
        id="disabled"
        className="mb-1 mt-1 budget_button"
        onClick={this.add}
        >Calculate</button>
      </form>
    </div>
</Fragment>

    )
  };
};

Add.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Add)
