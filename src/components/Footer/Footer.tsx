import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        padding: 4,
        textAlign: 'center',
        boxShadow: 2,
      }}
    >
      <Container>
        <Typography variant="body2" component="small">
          &copy; {dayjs().year()} {t('footer.copyright')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
