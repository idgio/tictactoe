import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  noTextDeco: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  icon: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    paddingRight: 10,
    marginBottom: '-5px'
  },
  toolbarStyle: {
    textAlign: 'center',
  }
});



function ButtonAppBar(props) {
  const { classes } = props;
  return (
    
        
            <div className={classes.root}>
              <AppBar position="static" color="primary">
                <Toolbar className={classes.toolbarStyle}>
                  
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    <Icon className={classes.icon} >
                      gamepad
                    </Icon>
                    Tic Tac Toe
                  </Typography>
                    
                </Toolbar>
              </AppBar>
            </div>

    
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);