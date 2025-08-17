import { Card, Stack, FormControl, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
    const { t } = useTranslation();

    return (
        <Card
            sx={{
                p: 2,
                mt: 8,
                width: {
                    xs: '100%',
                    md: '800px',
                },
            }}
        >
            <Stack direction="row" spacing={2}>
                <FormControl fullWidth size="small">
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
        </Card>
    );
};

export default SearchBar;
