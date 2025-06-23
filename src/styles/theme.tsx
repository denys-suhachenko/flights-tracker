import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#f5f5f5',
                },
            },
        },
        MuiStack: {
            defaultProps: {
                useFlexGap: true,
            },
        },
    },
});
