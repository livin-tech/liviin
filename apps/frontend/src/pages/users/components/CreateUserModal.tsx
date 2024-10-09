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
import { createUser, updateUser } from '../../../redux/user/userSlice';
import { t } from 'i18next';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
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
  phoneNumber?: string;
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
      phoneNumber: selectedUser?.phoneNumber || '',
    },
  });

  useEffect(() => {
    if (selectedUser) {
      reset({
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        email: selectedUser.email,
        phoneNumber: selectedUser.phoneNumber || '',
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
        await dispatch(
          createUser({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber || '',
            password: 'defaultPassword123',
          })
        ).unwrap();
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
            {selectedUser ? t('editUser') : t('createUser')}
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
                  label={t('firstName')}
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? t('firstNameReq') : ''}
                  {...register('firstName', {
                    required: t('firstNameReq'),
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('lastName')}
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? t('lastNameReq') : ''}
                  {...register('lastName', {
                    required: t('lastNameReq'),
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('email')}
                  type="email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? t('emailValid') : ''}
                  {...register('email', {
                    required: t('emailReq'),
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: t('emailValid'),
                    },
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  label={'Phone Number'}
                  variant="outlined"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber ? t('phoneNumberReq') : ''}
                  {...register('phoneNumber', {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: t('invalidPhoneNumber'),
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
              {t('cancel')}
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {t('done')}
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default CreateUserModal;
