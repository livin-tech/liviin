import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Typography,
  Button,
  Grid,
  Dialog,
  Box,
  DialogTitle,
  Divider,
  FormControl,
  TextField,
} from '@mui/material';
import { useAppDispatch } from '../../../hooks/hooks';
import { createUser, updateUser } from '../../../lib/redux/auth/userSlice';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface CreateUserModalProps {
  onClose: (value?: any) => void;
  open: boolean;
  selectedUser?: User;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const CreateUserModal: React.FC<CreateUserModalProps> = (props) => {
  const { onClose, open, selectedUser } = props;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: selectedUser?.firstName || '',
      lastName: selectedUser?.lastName || '',
      email: selectedUser?.email || '',
    },
  });

  useEffect(() => {
    if (selectedUser) {
      reset({
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        email: selectedUser.email,
      });
    }
  }, [selectedUser, reset]);

  const handleClose = () => {
    onClose();
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      if (selectedUser) {
        await dispatch(
          updateUser({ id: selectedUser.id, updatedData: data })
        ).unwrap();
      } else {
        await dispatch(createUser(data)).unwrap();
      }
      onClose();
    } catch (error) {
      console.error('Failed to save user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ padding: 3 }}>
        <DialogTitle>
          <Typography variant="h3" component="div" fontWeight="bold">
            {selectedUser ? 'Edit' : 'Create'} User
          </Typography>
        </DialogTitle>
      </Box>
      <Divider />

      <Box sx={{ paddingBottom: 3, paddingRight: 3, paddingLeft: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2} mt={0}>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label="First Name"
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? 'First name is required' : ''}
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? 'Last name is required' : ''}
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? 'Enter a valid email' : ''}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Enter a valid email',
                    },
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'end',
              marginTop: 2,
            }}
          >
            <Button variant="outlined" color="inherit" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Done
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default CreateUserModal;
