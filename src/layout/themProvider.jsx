
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import React from 'react';


export const  ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// eslint-disable-next-line react/prop-types
const ThemProvider = ({children}) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode
          },
        }),
      [mode],
    );
    
    return ( 
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
             
    </ThemeProvider>
    </ColorModeContext.Provider>
     );
}
 
export default ThemProvider;