import { Box, Container, Stack, Typography } from '@mui/material';
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
        <Stack direction="row" spacing={2}>
          <Typography variant="body2" component="small">
            &copy; {dayjs().year()} All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
