import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
    allVariants: {
      color: '#363636',
      fontWeight: 400,
    },
  },
});
