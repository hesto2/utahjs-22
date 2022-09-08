import { createMuiTheme } from '@material-ui/core';
import { CustomTheme } from './types';

export const INPUT_HEIGHT = 60;
export const INPUT_WIDTH = 200;

export const primary = {
  50: '#FFFCFA',
  100: '#FFFCFA',
  200: '#FFFCFA',
  300: '#FDE2D4',
  400: '#FFFCFA',
  500: '#FD742D',
  600: '#FFFCFA',
  700: '#B1511F',
  800: '#FFFCFA',
  900: '#FFFCFA',
};

const textPrimary = '#4b4b4d';

const theme = createMuiTheme();
const customTheme = createMuiTheme({
  typography: {
    fontFamily: '"Muli", "Roboto"',
    h6: { fontWeight: 'bold' },
    allVariants: {
      color: '#4B4B4D',
    },
    subtitle1: {
      color: '#9B9B9B',
      fontSize: 12,
      fontStyle: 'italic',
    },
    subtitle2: {
      color: textPrimary,
      fontSize: 12,
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: theme.spacing(2, 0),
    },
    body1: { fontSize: 14 },
    body2: { fontSize: 14, fontWeight: 'bold' },
  },
  palette: {
    primary,
    text: { primary: textPrimary, secondary: '#4B4B4D', hint: '#939598' },
    background: {
      light: '#f5f5f5',
    } as any,
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
      },
      sizeLarge: {
        minWidth: 150,
        minHeight: 55,
      },
      label: {
        textTransform: 'none',
      },
      containedPrimary: {
        color: theme.palette.common.white,
        boxShadow: 'none',
      },
    },
    MuiTableHead: {
      root: {
        background: textPrimary,
        '& th': {
          color: theme.palette.common.white,
          padding: theme.spacing(1.5),
        },
      },
    },
  },
});

export default customTheme;
