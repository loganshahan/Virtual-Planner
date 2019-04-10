import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import moment from 'moment'

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 15,
      fontSize: 2
    },
  });

function singleEvent(props) {
    const {event} = props
    
    return (
            <Fragment>

                <List
                data-aos="fade-in"
                data-aos-easing="ease-in-out"
                data-aos-delay="200"
                >
                <ListItem button 
                style={{cursor: 'default'}}
                className="Recent_Title"
                >
                    <ListItemText
                    style={{marginRight: 20 }}
                    >
                        - {event.title}
                    </ListItemText>
                </ListItem>
                <ListItem button 
                style={{cursor: 'default'}}
                >
                <ListItemText>
                        {event.desc}
                </ListItemText>
                </ListItem>
                <ListItem button 
                style={{cursor: 'default'}}
                >
                <ListItemText>
                        {
                         moment(event.start).format('LLLL')
                        }
                    </ListItemText>
                </ListItem>
                </List>
                <Divider />
            </Fragment>
    )
}

singleEvent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(singleEvent);
