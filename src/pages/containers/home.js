import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import AppBar from '../components/appBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e6ffff',
      main: '#b3e5fc',
      dark: '#82b3c9',
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

/*This function receives the previus state board and the new one, and compares them*/
function checkBoardChanges(oldBoard, newBoard){
  return oldBoard.every((value, index) => value === newBoard[index]);
}
/*This function receives the current PlayerPicks, then it evaluates each element of winningStates array in order to find a match beetween teh element and the PlayerPicks*/
function checkWinCondition(playerList) {
  let win = false;
  if(playerList.length >= 3)
  {
    winningStates.forEach(function(element){
      if(element.every(o => playerList.includes(o)))
      {win = true;}
    });
  }
  return win;
}
class Home extends Component {
  
  
    state = {
      playerOnePicks: [],
      playerTwoPicks: [],
      currentPlayer: true,
      board: [false,false,false,false,false,false,false,false,false],
      winner: null,
    };
    handleClickBtn = (i) => {
      this.setState(state => {
      const list = state.board.map((item, j) => {
          if (j === i && item === false && state.winner === null) {
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
      const playerList = state.currentPlayer ? playerOneList : playerTwoList;
      const winStatus = boardChange ? false : checkWinCondition(playerList);
        return {
          board: list,
          currentPlayer:  boardChange ? state.currentPlayer : !state.currentPlayer,
          playerOnePicks: boardChange ? state.playerOnePicks : playerOneList.sort(function(a, b) { return a - b }),
          playerTwoPicks: boardChange ? state.playerTwoPicks : playerTwoList.sort(function(a, b) { return a - b }),
          winner: winStatus ? (state.currentPlayer ? 'WINNER X!' : 'WINNER O!') : (state.playerTwoPicks.length >= 4 && state.playerOnePicks.length >= 4 && state.winner == null ? 'DRAW' : (state.winner != null ? state.winner : null)), /* winner checks if the current player picks are part of one of the 8 possible combinations to win, and prints the winner based on the currentPlayer variable, if not it checks that if each player has pick at least 4 spaces then it prints a Draw message and the last condition it's just for kepping the winner state the same after a Winner or a Draw so It doesn't override the variable, preventing unwanted values in the grid after a result is given*/
        };
      });
    };
    handleResetBtn = () => {
      this.setState({
          playerOnePicks: [],
          playerTwoPicks: [],
          currentPlayer: true,
          board: [false,false,false,false,false,false,false,false,false],
          winner: null,
        });
    }
    render(){
      
        return(
        <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar />
                    <main >
                        <HomeLayout {...this.state} handleClickBtn={(i) => this.handleClickBtn(i)} handleResetBtn={this.handleResetBtn}/>
                    </main>
                </div>
        </MuiThemeProvider>
        )
    }
}

export default Home