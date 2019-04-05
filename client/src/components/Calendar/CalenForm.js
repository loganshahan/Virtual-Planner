import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
});

function DateAndTimePickers(props) {
  console.log(props)
  return (
    <form className={props.classes.container} noValidate
    onSubmit={props.handleSubmit}>
      <TextField
        id="datetime-local"
        label='From'
        type="datetime-local"
        defaultValue={moment().format('YYYY-MM-DDTHH:mm')}
        className={props.classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.handleTimeStartChange}
      />
      <TextField
        id="datetime-local"
        label="To"
        type="datetime-local"
        defaultValue={moment().format('YYYY-MM-DDTHH:mm')}
        className={props.classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.handleTimeEndChange}
      />
      <TextField
          id="standard-title"
          label="Title"
          className={props.classes.textField}
          value=''
          onChange={props.handleChange}
        />
        <TextField
          id="standard-desc"
          label="Desc"
          className={props.classes.textField}
          value=''
          onChange={props.handleChange}
        />
        <button 
        className='custom_btn'
        type="submit" 
        label="submit"
        primary={true} >Submit</button>

    </form>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);