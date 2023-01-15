import React from 'react';

import { ThemeProvider } from '@mui/system';
import { theme } from './theme';

import { CssBaseline } from '@mui/material';

import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
