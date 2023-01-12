import React from 'react';

import { ThemeProvider } from '@mui/system';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>App</div>
    </ThemeProvider>
  );
}

export default App;
