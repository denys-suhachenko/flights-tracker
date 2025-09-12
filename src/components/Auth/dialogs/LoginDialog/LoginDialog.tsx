import { useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import {
  Alert,
  Box,
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import GoogleLogo from '@app/assets/images/social/google-short-logo.svg';
import { useAuthentication } from '@app/providers/AuthProvider';

const LoginDialog = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { signIn } = useAuthentication();

  const validationSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .trim()
          .email(t('auth.login.dialog.form.email.errors.format'))
          .required(t('auth.login.dialog.form.email.errors.required')),
        password: yup
          .string()
          .min(8, t('auth.login.dialog.form.password.errors.min_length'))
          .required(t('auth.login.dialog.form.password.errors.required')),
      }),
    [t]
  );

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema, {
      abortEarly: false,
    }),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    reset({
      email: '',
      password: '',
    });
  };

  const onSubmit = async ({
    email,
    password,
  }: yup.InferType<typeof validationSchema>) => {
    try {
      await signIn(email, password);
    } catch (err) {
      setError('root', {
        type: 'server',
        message: t('errors.invalid_credentials'),
      });
    }
  };

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        {t('auth.actions.login')}
      </Button>

      <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={handleClose}>
        <DialogTitle component="div">
          <Typography variant="h6">{t('auth.login.dialog.title')}</Typography>

          <IconButton
            sx={{ position: 'absolute', right: 8, top: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              {errors.root?.message && (
                <Alert severity="error" role="alert">
                  {errors.root.message}
                </Alert>
              )}

              <FormControl fullWidth size="small" error={!!errors.email}>
                <FormLabel htmlFor="email" sx={{ fontSize: 14, mb: 0.5 }}>
                  {t('auth.login.dialog.form.email.label')}
                </FormLabel>

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <OutlinedInput
                        {...field}
                        id="email"
                        type="email"
                        placeholder={t(
                          'auth.login.dialog.form.email.placeholder'
                        )}
                        notched={false}
                        sx={{ fontSize: 14 }}
                      />

                      <FormHelperText sx={{ mx: 0 }}>
                        {fieldState.error?.message}
                      </FormHelperText>
                    </>
                  )}
                />
              </FormControl>

              <FormControl fullWidth size="small" error={!!errors.password}>
                <FormLabel htmlFor="password" sx={{ fontSize: 14, mb: 0.5 }}>
                  {t('auth.login.dialog.form.password.label')}
                </FormLabel>

                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <OutlinedInput
                        {...field}
                        id="password"
                        type="password"
                        placeholder={t(
                          'auth.login.dialog.form.password.placeholder'
                        )}
                        notched={false}
                        sx={{ fontSize: 14 }}
                      />

                      <FormHelperText sx={{ mx: 0 }}>
                        {fieldState.error?.message}
                      </FormHelperText>
                    </>
                  )}
                />
              </FormControl>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={isSubmitting}
                sx={{ textTransform: 'none' }}
              >
                {t('auth.login.dialog.form.submit')}
              </Button>
            </Stack>
          </Box>

          <Stack spacing={2} sx={{ mt: 2 }}>
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
