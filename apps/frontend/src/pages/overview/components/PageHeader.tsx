import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

function PageHeader() {
  const user = {
    name: 'Admin',
    avatar: '/static/images/avatars/user-avatar-2.jpg',
  };
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8),
          }}
          variant="rounded"
          alt={user?.name}
          src={user?.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('welcome', { userName: user?.name })}
        </Typography>
        <Typography variant="subtitle2">{t('dashbaordDescription')}</Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
