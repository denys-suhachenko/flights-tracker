import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

import GoogleLogo from '@app/assets/images/social/google-short-logo.svg';

const LoginDialog = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        color="inherit"
        sx={{
          display: {
            xs: 'none',
            md: 'inline-flex',
          },
        }}
        onClick={handleOpen}
      >
        {t('auth.login')}
      </Button>

      <IconButton
        sx={{
          display: {
            xs: 'inline-flex',
            md: 'none',
          },
          color: 'inherit',
        }}
        onClick={handleOpen}
      >
        <PersonIcon />
      </IconButton>

      <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h6">Login</Typography>

          <IconButton
            sx={{ position: 'absolute', right: 8, top: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2}>
            <FormControl fullWidth size="small">
              <FormLabel htmlFor="email" sx={{ fontSize: 14, mb: 0.5 }}>
                Email
              </FormLabel>
              <OutlinedInput
                id="email"
                type="email"
                placeholder="Enter your email"
                notched={false}
                sx={{ fontSize: 14 }}
              />
            </FormControl>

            <FormControl fullWidth size="small">
              <FormLabel htmlFor="password" sx={{ fontSize: 14, mb: 0.5 }}>
                Password
              </FormLabel>
              <OutlinedInput
                id="password"
                type="password"
                placeholder="Enter your password"
                notched={false}
                sx={{ fontSize: 14 }}
              />
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              sx={{ textTransform: 'none' }}
            >
              Sign in
            </Button>

            <Box textAlign="center">
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Box>

            <Divider>or</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<img src={GoogleLogo} width={20} height={20} />}
              sx={{
                textTransform: 'none',
                borderColor: 'grey.300',
                bgcolor: 'background.paper',
                color: 'text.primary',
                fontSize: 14,
                fontWeight: 500,
                '&:hover': {
                  borderColor: 'grey.400',
                  bgcolor: 'grey.50',
                },
              }}
            >
              Sign in with Google
            </Button>

            <Typography variant="body2" align="center">
              Don’t have an account? <Link href="#">Sign up</Link>
            </Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;
