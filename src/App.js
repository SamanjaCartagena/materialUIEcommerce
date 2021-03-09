import React,{useState} from 'react'
import {Switch, Grid, Paper, Typography, Button} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
function App() {
  const [darkMode, setDarkMode]= useState(false);
  
  const darkTheme = createMuiTheme({
    palette:{
      type:'dark',
    },
  });
 const lightTheme = createMuiTheme({
   palette:{
     primary:green,
     secondary:green,
   }
 })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Paper style={{height:'100vh'}}>
    <Grid container direction="column">
      <Typography variant="h1">This is my App!</Typography>
        <Button variant="contained" color="primary">
         This is a button
        </Button>
        <Button variant="contained" color="secondary">
             This is another button
        </Button>
        <Switch checked={darkMode} onChange={() =>setDarkMode(!darkMode)}/>
    </Grid>
    </Paper>
    </ThemeProvider>
  )
}

export default App;
