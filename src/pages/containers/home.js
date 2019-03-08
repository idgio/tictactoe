import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import AppBar from '../components/appBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffce',
      main: '#e6ee9c',
      dark: '#b3bc6d',
      contrastText: '#000000',
    },
    secondary: {
      light: '#e6ceff',
      main: '#b39ddb',
      dark: '#836fa9',
      contrastText: '#000000',
    },
  },
});
const winningStates = [];
winningStates.push([1, 2, 3]);
winningStates.push([4, 5, 6]);
winningStates.push([7, 8, 9]);
winningStates.push([1, 4, 7]);
winningStates.push([2, 5, 8]);
winningStates.push([3, 6, 9]);
winningStates.push([1, 5, 9]);
winningStates.push([3, 5, 7]);

function checkboardChanges(oldBoard, newBoard, currentPlayerState)
{

  return oldBoard.every((value, index) => value === newBoard[index]) ? currentPlayerState : !currentPlayerState;
  
}

class Home extends Component {
  
  
    state = {
      gameActive: true,
      playerOnePicks: null,
      playerTwoPicks: null,
      currentPlayer: true,
      board: [false,false,false,false,false,false,false,false,false],
    };
    handleClickBtn = (i) => {
      this.setState(state => {
      const list = state.board.map((item, j) => {
          if (j === i && item === false) {
            if(state.currentPlayer)
            {
              return 'X';
            }
            else{
              return 'O';
            }
          } else {
            return item;
          }
        });
  
        return {
          board: list,
          currentPlayer: checkboardChanges(state.board, list, state.currentPlayer),
        };
      });
    };
   
    render(){
      
        return(
        <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar />
                    <main >
                        <HomeLayout {...this.state} handleClickBtn={(i) => this.handleClickBtn(i)}/>
                    </main>
                </div>
        </MuiThemeProvider>
        )
    }
}

export default Home