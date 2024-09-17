import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
import CreateUserModal from './CreateUserModal';

function PageHeader() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
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
      <CreateUserModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            Users
          </Typography>
          <Typography variant="subtitle2">
            {user.name}, total joined users are here
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            onClick={handleClickOpen}
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Create User
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeader;
