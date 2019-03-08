import React  from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    margin: 15,
  },
  button:
  {
    width: '100%',
    height: '100%',
    borderRadius: '0px',
    fontSize: 50,
  },
  buttonReset:
  {
    marginTop: 15,
  },
  turn:
  {
    marginBottom: 15,
  }
});

function HomeLayout(props){
    const { classes } = props;
    const spaces = [];
    for(let i = 0; i < 9; i++)
    {
      spaces.push(<GridListTile  cols={1}>
                <Button variant="outlined" className={classes.button}>
                   
                </Button>
              </GridListTile>);
    }
  return (
    <div className={classes.root}>
      <Grid container justify="center" >
        <Grid item  xs={6 }>
          <Paper className={classes.paper}>
            <Typography variant="title" color="inherit" className={classes.turn}>
                    Turn: 
            </Typography>
            <GridList cellHeight={100} className={classes.gridList} cols={3}>
            
              {spaces}
              
            </GridList>
            <Button variant="contained" color="secondary" className={classes.buttonReset}>
              Reset
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

HomeLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(HomeLayout)