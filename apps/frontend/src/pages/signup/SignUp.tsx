import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks/hooks';
import { signupUser } from '../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LogoLiviin } from '../../assets/icons/livin-icon.svg';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: '10vh',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const dispatch = useAppDispatch();
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();

  const onSubmit = (data: any) => {
    const { email, password } = data;
    dispatch(signupUser({ email, password }));
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Box sx={{ textAlign: 'center' }}>
            <LogoLiviin />
          </Box>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            {t('signUp')}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">{t('email')}</FormLabel>
              <TextField
                error={!!errors.email}
                helperText={errors.email ? `${t('emailValid')}` : ''}
                id="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                {...register('email', {
                  required: `${t('emailReq')}`,
                  pattern: /\S+@\S+\.\S+/,
                })}
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">{t('password')}</FormLabel>
              <TextField
                error={!!errors.password}
                inputRef={passwordRef}
                helperText={errors.password ? `${t('passwordDesc')}` : ''}
                id="password"
                type="password"
                placeholder="••••••"
                autoComplete="new-password"
                {...register('password', {
                  required: `${t('emailValid')}`,
                  minLength: 6,
                })}
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirm-password">
                {t('confirmPassword')}
              </FormLabel>
              <TextField
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword ? `${t('passwordNotMatch')}` : ''
                }
                id="confirm-password"
                type="password"
                placeholder="••••••"
                autoComplete="new-password"
                {...register('confirmPassword', {
                  required: `${t('confirmPasswordReq')}`,
                  validate: (value) =>
                    value === passwordRef.current?.value ||
                    `${t('passwordNotMatch')}`,
                })}
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained">
              {t('signUp')}
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              {t('signupDesc')}{' '}
              <Link href="/signin" variant="body2">
                {t('signIn')}
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
