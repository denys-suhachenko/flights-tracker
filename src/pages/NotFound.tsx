import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import notFoundImage from '../assets/images/parachute.svg';

const NotFound = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Typography variant="h4">{t('pages.not_found.title')}</Typography>
            <Box
                component="img"
                src={notFoundImage}
                alt="Not Found"
                sx={{ width: 'auto', height: '200px', py: 4 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
            >
                {t('pages.not_found.actions.back')}
            </Button>
        </Box>
    );
};

export default NotFound;
