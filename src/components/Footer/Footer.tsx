import { Box, Container, Typography } from '@mui/material';
import dayjs from 'dayjs';

const Footer = () => {
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
          &copy; {dayjs().year()} All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
