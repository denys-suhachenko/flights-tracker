import {
  Card,
  Stack,
  FormControl,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        width: '100%',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem, ' +
          'rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem',
      }}
      elevation={0}
    >
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth>
          <TextField
            hiddenLabel
            placeholder={t('hero.search_bar.placeholder')}
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '14px',
              },
            }}
          />
        </FormControl>

        <Button
          variant="contained"
          sx={{
            px: 6,
          }}
        >
          {t('hero.search_bar.actions.search')}
        </Button>
      </Stack>
    </Paper>
  );
};

export default SearchBar;
