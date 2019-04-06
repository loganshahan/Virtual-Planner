import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import moment from 'moment'
import axios from 'axios';
// import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  button: {
    margin: theme.spacing.unit,
    color: 'white !important'
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  componentWillReceiveProps(nextProps) {
      this.setState({
          open: nextProps.open
      })
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleDelete = async () => {
    await axios.delete(`/api/events/single/${this.props.info.calenId}`);
    window.location.reload();
  }

  render() {
    const {classes} = this.props;
    console.log(this.props.info.start)
    const {title, desc, start} = this.props.info;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {title}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {desc}
            </Typography>  
            <Typography variant="subtitle1" id="">
             From: { moment(this.props.info.start).format('LLLL')}
            </Typography>  
            <Typography variant="subtitle1" id="">
             To: { moment(this.props.info.end).format('LLLL')}
            </Typography>  
            <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}
            onClick={this.handleDelete}
            >
              Delete Event
            </Button>
          </div>
        </Modal>
      </div>
    );
  };
};

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;