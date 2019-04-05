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

const handleTimeStartChange = (e) => {
    const value = e.target.value;
    const FormatDate = moment(value).format('YYYY, MM, DD, HH, mm');
    console.log(FormatDate)
}
const handleTimeEndChange = (e) => {
    const value = e.target.value;
    const FormatDate = moment(value).format('YYYY, MM, DD, HH, mm');
    console.log(FormatDate)
}
const handleChange = (e) => {
    console.log(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test')
}

function DateAndTimePickers(props) {
  const { title, desc, start, end } = props.calendar;
  console.log(props)
  return (
    <form className={props.classes.container} noValidate
    onSubmit={handleSubmit}>
      <TextField
        id="datetime-local"
        label='From'
        type="datetime-local"
        defaultValue={moment().format('YYYY-MM-DDTHH:mm')}
        className={props.classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTimeStartChange}
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
        onChange={handleTimeEndChange}
      />
      <TextField
          id="standard-title"
          label="Title"
          className={props.classes.textField}
          value={title}
          onChange={handleChange}
        />
        <TextField
          id="standard-desc"
          label="Desc"
          className={props.classes.textField}
          value={desc}
          onChange={handleChange}
        />
        <button 
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