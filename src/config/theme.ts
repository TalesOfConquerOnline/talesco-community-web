import { grey, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Mirrors the palette of the main TalesCO website so both sites feel like one brand.
const theme = createTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[800]
    },
    secondary: {
      light: purple[100],
      main: purple[300],
      dark: purple[800]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
      `
    }
  }
});

export default theme;
