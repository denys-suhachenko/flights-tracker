import { CssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppRoutes from './routes';
import { AuthProvider } from './providers/AuthProvider';
import { theme } from './styles/theme';
import ReactQueryProvider from './providers/ReactQueryProvider';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactQueryProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ReactQueryProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
