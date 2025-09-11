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
        mt: 8,
        borderRadius: 2,
        width: {
          xs: '100%',
          md: '800px',
        },
      }}
      elevation={2}
    >
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth>
          <TextField
            hiddenLabel
            placeholder={t('header.search_bar.placeholder')}
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

        <Button variant="contained" sx={{ px: 6 }}>
          {t('header.search_bar.actions.search')}
        </Button>
      </Stack>
    </Paper>
  );
};

export default SearchBar;
