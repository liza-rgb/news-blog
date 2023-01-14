import React from 'react';

import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'></div>
    </ThemeProvider>
  );
}

export default App;
