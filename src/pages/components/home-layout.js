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
  },
  exElement:
  {
    color: theme.palette.secondary.dark,
  },
  zeroElement:
  {
    color: theme.palette.primary.dark,
  }
  
});

function HomeLayout(props){
    const { classes, currentPlayer, board, handleClickBtn, winner, handleResetBtn } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" >
        <Grid item  xs={12} md={6}>
          <Paper className={classes.paper} elevation={8}>
            
                   {winner != null ?
                    <Typography variant="title" color="primary" className={classes.turn}>{winner}</Typography>
                   :(currentPlayer === true ? (
                        <Typography variant="title" color="primary" className={classes.turn}> Choose a space: X </Typography>
                    ) : ( 
                        <Typography variant="title" color="primary" className={classes.turn}> Choose a space: O </Typography>
                    ))}
            
            <GridList cellHeight={100} className={classes.gridList} cols={3}>
            
            {(board || []).map((item,i) => (
              <GridListTile key={i}  cols={1}>
                <Button variant="outlined" className={classes.button} color="primary" onClick={() => {handleClickBtn(i)}}>
                   <span className={item == 'X' ? classes.exElement : classes.zeroElement} >{item}</span>
                </Button>
              </GridListTile>
            ))}
              
            </GridList>
            <Button variant="contained" color="primary" className={classes.buttonReset} onClick={handleResetBtn}>
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