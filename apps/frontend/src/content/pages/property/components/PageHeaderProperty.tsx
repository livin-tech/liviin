import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
// import CreateUserModal from './CreateUserModal';
import { useTranslation } from 'react-i18next';
import CreatePropertyModal from './CreatePropertyModal';

function PageHeaderProperty() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/user-avatar-2.jpg',
  };

  const handleClickOpen = () => {
    console.log('handleClickOpenhandleClickOpen');
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <CreatePropertyModal
        selectedProperty={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {/* {t('usersTitleSidebar')} */}
            Property
          </Typography>
          <Typography variant="subtitle2">
            {user.name}, total listed properties are here
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            onClick={handleClickOpen}
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {/* {t('createUser')} */}
            Create Property
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeaderProperty;