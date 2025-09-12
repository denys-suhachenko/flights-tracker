import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import {
  Box,
  Button,
  DialogActions,
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

import GoogleLogo from '@app/assets/images/social/google-short-logo.svg';

const LoginDialog = () => {
  const { t } = useTranslation();

  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        {t('auth.actions.login')}
      </Button>

      <Dialog fullWidth maxWidth="xs" open={isOpened} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h6">{t('auth.login.dialog.title')}</Typography>

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
                {t('auth.login.dialog.form.email.label')}
              </FormLabel>
              <OutlinedInput
                id="email"
                type="email"
                placeholder={t('auth.login.dialog.form.email.placeholder')}
                notched={false}
                sx={{ fontSize: 14 }}
              />
            </FormControl>

            <FormControl fullWidth size="small">
              <FormLabel htmlFor="password" sx={{ fontSize: 14, mb: 0.5 }}>
                {t('auth.login.dialog.form.password.label')}
              </FormLabel>
              <OutlinedInput
                id="password"
                type="password"
                placeholder={t('auth.login.dialog.form.password.placeholder')}
                notched={false}
                sx={{ fontSize: 14 }}
              />
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              sx={{ textTransform: 'none' }}
            >
              {t('auth.login.dialog.form.submit')}
            </Button>

            <Box textAlign="center">
              <Link href="#" variant="body2">
                {t('auth.login.dialog.forgot_password')}
              </Link>
            </Box>

            <Divider>{t('auth.login.dialog.divider')}</Divider>

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
              {t('auth.login.dialog.google_login')}
            </Button>

            <Typography variant="body2" align="center">
              <Trans
                i18nKey="auth.login.dialog.sign_up"
                components={[<Link href="#" />]}
              />
            </Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;
