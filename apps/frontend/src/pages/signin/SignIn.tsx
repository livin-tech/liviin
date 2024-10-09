import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Import React Hook Form
import { useTranslation } from 'react-i18next';
import { ReactComponent as LogoLiviin } from '../../assets/icons/livin-icon.svg';
import { setUser } from '../../redux/auth/authSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { OVERVIEW } from '../../routes/routesConstants';

interface FormData {
  email: string;
  password: string;
}

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

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential?.user?.getIdToken();
      if (userCredential.user) {
        localStorage.setItem('token', idToken);
        dispatch(
          setUser({
            uid: userCredential?.user?.uid,
            accessToken: idToken,
            displayName: userCredential?.user?.displayName,
            email: userCredential?.user?.email,
          })
        );
        navigate(`${OVERVIEW}`);
      }
    } catch (error) {
      const errorCode = (error as any).code;
      const errorMessage = (error as any).message;
      console.error('Error:', errorCode, errorMessage);
    }
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
            {t('signIn')}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from useForm
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
                {...register('email', {
                  required: `${t('emailReq')}`,
                  pattern: /\S+@\S+\.\S+/,
                })}
                error={Boolean(errors.email)}
                helperText={errors.email ? `${t('emailValid')}` : ''}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.email ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">{t('password')}</FormLabel>
              </Box>
              <TextField
                {...register('password', {
                  required: `${t('emailValid')}`,
                  minLength: {
                    value: 6,
                    message: `${t('passwordDesc')}`,
                  },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password ? errors.password.message : ''}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={errors.password ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('rememberMe')}
            />
            <Button type="submit" fullWidth variant="contained">
              Sign in
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              {t('signInDesc')}{' '}
              <span>
                <Link
                  href="/signup"
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  {t('signUp')}
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
