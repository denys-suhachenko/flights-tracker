import { createTheme } from '@mui/material';

const btnShadow =
  'rgba(52, 71, 103, 0.15) 0rem 0.1875rem 0.1875rem 0rem, ' +
  'rgba(52, 71, 103, 0.2)  0rem 0.1875rem 0.0625rem -0.125rem, ' +
  'rgba(52, 71, 103, 0.15) 0rem 0.0625rem 0.3125rem 0rem';

const btnShadowHover =
  'rgba(52, 71, 103, 0.20) 0rem 0.3125rem 0.4375rem 0rem, ' +
  'rgba(52, 71, 103, 0.28) 0rem 0.3125rem 0.1875rem -0.125rem, ' +
  'rgba(52, 71, 103, 0.16) 0rem 0.1875rem 0.5625rem 0rem';

const paperSoftShadow =
  'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, ' +
  'rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f0f2f5',
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiPaper: {
      variants: [
        {
          props: {
            variant: 'soft',
          },
          style: {
            boxShadow: paperSoftShadow,
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            boxShadow: btnShadow,
            '&:hover': {
              boxShadow: btnShadowHover,
            },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
          },
        },
      },
    },
  },
});
