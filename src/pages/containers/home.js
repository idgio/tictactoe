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

function checkBoardChanges(oldBoard, newBoard)
{

  return oldBoard.every((value, index) => value === newBoard[index]);
  
}

class Home extends Component {
  
  
    state = {
      gameActive: true,
      playerOnePicks: [],
      playerTwoPicks: [],
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
      const playerOneList = state.currentPlayer ? state.playerOnePicks.concat(i+1) : state.playerOnePicks;
      const playerTwoList = !state.currentPlayer ? state.playerTwoPicks.concat(i+1) : state.playerTwoPicks;
      const boardChange = checkBoardChanges(state.board, list);
        return {
          board: list,
          currentPlayer:  boardChange ? state.currentPlayer : !state.currentPlayer,
          playerOnePicks: boardChange ? state.playerOnePicks : playerOneList,
          playerTwoPicks: boardChange ? state.playerTwoPicks : playerTwoList,
          
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