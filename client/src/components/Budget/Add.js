import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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
        amount: ''
    }

    handleChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    handleChangeAmt = (e) => {
        this.setState({
            amount: e.target.value
        });
    };

    add = () => {
        this.props.onAdd(this.state.description, this.state.amount);
        window.location.reload(); 
    };

  render() {
    const { classes } = this.props;

    return (
      
<Fragment>
<div className={classes.container}>
      <h3>$+ or $- from your budget !</h3>
      <form className="form-inline mb-2 budget_form">

        <FormControl className={classes.formControl}>
          <Input 
          id="desc" 
          value={this.state.description} 
          onChange={this.handleChangeDesc}
          placeholder='Description'
           />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Input 
          id="amt" 
          value={this.state.amount} 
          onChange={this.handleChangeAmt}
          placeholder='Amount'
           />
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
  }
}

Add.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Add)
