import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import UserContext from '../../contex/user-context';
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

  class DateAndTimePickers extends Component {

    static contextType = UserContext;

    state = {
        title: '',
        start: moment().format('ddd MMM DD YYYY HH:mm'),
        end: moment().add(1, 'hours').format('ddd MMM DD YYYY HH:mm'),
        startDate: new Date(),
        UserId: this.context.login.id,
        desc: '',
    };

     handleTimeStartChange = (e) => {
        const value = e.target.value;
        console.log(value)
        const FormatStartDate = moment(value).format('ddd MMM DD YYYY HH:mm');
        this.setState({
            start: FormatStartDate,
            startDate: new Date(moment(value).format('YYYY-MMM-DD HH:mm:ss')),
        })
    };

     handleTimeEndChange = (e) => {
        const value = e.target.value;
        const FormatEndDate = moment(value).format('ddd MMM DD YYYY HH:mm');
        this.setState({
            end: FormatEndDate
        })
    };

     handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

     handleSubmit = (e) => {
        e.preventDefault();
        this.context.postEvents(this.state)
        this.setState({
            title: '',
            desc: '',
            start: '',
            end: '',
            UserId: this.context.login.id
        })
        window.location.reload()
    };

  render() {
    return (
      <form className={this.props.classes.container} noValidate
      onSubmit={this.handleSubmit}>
        <TextField
          id="datetime-local"
          label='From'
          type="datetime-local"
          defaultValue={moment().format('YYYY-MM-DDTHH:mm')}
          className={this.props.classes.textField}
          InputLabelthis={{
            shrink: true,
          }}
          onChange={this.handleTimeStartChange}
        />
        <TextField
          id="datetime-local"
          label="To"
          type="datetime-local"
          defaultValue={moment().add(1, 'hours').format('YYYY-MM-DDTHH:mm')}
          className={this.props.classes.textField}
          InputLabelthis={{
            shrink: true,
          }}
          onChange={this.handleTimeEndChange}
        />
        <TextField
            id="standard-title"
            label="Title"
            name='title'
            type='text'
            className={this.props.classes.textField}
            value={this.state.title}
            onChange={this.handleChange}
            autoComplete='off'
          />
          <TextField
            id="standard-desc"
            label="Description"
            name='desc'
            type='text'
            className={this.props.classes.textField}
            value={this.state.desc}
            onChange={this.handleChange}
            autoComplete='off'
          />
          <button 
          className='custom_btn'
          type="submit" 
          label="submit"
          primary={true} >Submit</button>
  
      </form>
    );
  }
};

DateAndTimePickers.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(DateAndTimePickers);
