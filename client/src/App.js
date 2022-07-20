import * as React from 'react';
import AccountMenu from './components/AccountMenu'
import {createTheme, ThemeProvider} from '@mui/material'
function App() {
  const theme = createTheme({
    spacing: 10, 
    palette: {
      mode: 'dark'
    },
    typography: {
      myVariant: {
        fontSize: "2rem"
      }
    }
  });
  return (
    <ThemeProvider theme = {theme}>
   <AccountMenu variant="contained">This is working</AccountMenu>;
   </ThemeProvider>
  )
}
export default App;