// theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#E6DCDC",
        },
        secondary: {
            main: "#F0F0F0",
        },
        info: {
            main: "#FAFAFA",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    fontFamily: '"Montserrat", sans-serif',
                    margin: 0,
                    padding: 0,
                },
            },
        },
    },
});
