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


class Home extends Component {
    
    render(){
        return(
        <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar />
                    <main >
                        <HomeLayout />
                    </main>
                </div>
        </MuiThemeProvider>
        )
    }
}

export default Home