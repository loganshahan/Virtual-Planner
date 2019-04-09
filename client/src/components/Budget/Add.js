import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

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
        },
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };

      switch (name) {
        case 'description':
          formErrors.description = 
            value === '' ? 'Please add a value'
            : (!isNaN(value)) ? 'Please add a description'
            : ''
          break;
        case 'amount':
          formErrors.amount = 
            value === '' ? 'Please add a value'
            : (isNaN(value)) ? 'Please add only numbers'
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

  render() {
    const { classes } = this.props;
    const { formErrors } = this.state;

    return (
      
<Fragment>
<div className={classes.container}>
      <h3>$+ or $- from your budget !</h3>
      <form className="form-inline mb-2 budget_form">

        <FormControl className={classes.formControl}>
          <Input 
          id="desc" 
          name='description'
          value={this.state.description} 
          onChange={this.handleChange}
          placeholder='Description'
          autoComplete='off'
           />
           { formErrors.description.length > 0 && (
          <span className="errorMessage">{formErrors.description}</span> )}

        </FormControl>
        <FormControl className={classes.formControl}>
          <Input 
          id="amt" 
          name='amount'
          value={this.state.amount} 
          onChange={this.handleChange}
          placeholder='Amount'
          autoComplete='off'
           />
           { formErrors.amount.length > 0 && (
          <span className="errorMessage">{formErrors.amount}</span> )}
        </FormControl>

        <button 
        type="submit" 
        className="btn btn-secondary mb-1 mt-1"
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
