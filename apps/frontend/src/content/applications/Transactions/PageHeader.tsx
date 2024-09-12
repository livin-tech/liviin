import { Typography, Button, Grid, Dialog, Box, DialogTitle, Divider, FormControl, TextField } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';

function PageHeader() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();


  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  const handleClickOpen = () => {
    console.log('handleClickOpenhandleClickOpen')
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };

    const validateInputs = () => {
      const email = document.getElementById('email') as HTMLInputElement;
      const name = document.getElementById('name') as HTMLInputElement;
  
      let isValid = true;
  
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        setEmailError(true);
        setEmailErrorMessage('Please enter a valid email address.');
        isValid = false;
      } else {
        setEmailError(false);
        setEmailErrorMessage('');
      }

      if (!name.value.trim()) {
        setNameError(true);
        setNameErrorMessage('Name is required.');
        isValid = false;
      } else {
        setNameError(false);
        setNameErrorMessage('');
      }
  
      return isValid;
    };
  
    return (

      <Dialog onClose={handleClose} open={open}>
  <Box sx={{ padding: 3 }}>
    <DialogTitle>
      <Typography variant="h3" component="div" fontWeight="bold">
        Create User
      </Typography>
    </DialogTitle>
  </Box>
  <Divider></Divider>

  <Box sx={{ paddingBottom: 3, paddingRight: 3, paddingLeft: 3 }}>
    <Grid container spacing={2} mt={0}>
      {/* Name Field with Validation */}
      <Grid item xs={6}>
        <FormControl fullWidth variant="outlined" required>
          <TextField
            label="Name"
            id="name"
            name="name"
            variant="outlined"
            required
            error={nameError}
            helperText={nameErrorMessage}

            // helperText={!name && "Name is required"}
            // onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
      </Grid>

      {/* Email Field with Validation */}
      <Grid item xs={6}>
        <FormControl fullWidth variant="outlined" required>
          <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                // autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
              />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField fullWidth label="City" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Phone" variant="outlined" />
      </Grid>
    </Grid>

    <Box sx={{ display: "flex", width: '100%', justifyContent: "end", marginTop: 2 }}>
      <Button variant="outlined" color="inherit" onClick={handleClose}>
        Cancel
      </Button>
      <Button
        sx={{ marginLeft: 2 }}
        variant="contained"
        color="primary"
        onClick={validateInputs}
      >
        Done
      </Button>
    </Box>
  </Box>
</Dialog>
    );
  }
  return (
    <>
          <SimpleDialog
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
