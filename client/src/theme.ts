import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', 
    },
    secondary: {
      main: '#f50057', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1rem',
      marginBottom: '0.75rem',
    },
    body2: {
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
    },
  },
});

export default theme;
