import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'normal',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'normal',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 'normal',
    },
  },
});
