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
  Switch,
  FormControlLabel,
} from '@mui/material';
// import { useAppDispatch } from '../../../../hooks/hooks';
// import { createUser, updateUser } from '../../../../lib/redux/auth/userSlice';
import { t } from 'i18next';

interface Property {
  id: string;
  name: string;
  type: string;
  rooms: number;
  bathrooms: number;
  livingRoom: boolean;
  diningRoom: boolean;
  hallRoom: boolean;
  familyRoom: boolean;
  kitchen: boolean;
  serviceRoom: boolean;
  laundaryRoom: boolean;
  balcony: boolean;
}

interface CreatePropertyModalProps {
  onClose: (value?: any) => void;
  open: boolean;
  selectedProperty?: Property;
}

interface FormData {
  name: string;
  type: string;
  rooms: number;
  bathrooms: number;
  livingRoom: boolean;
  diningRoom: boolean;
  hallRoom: boolean;
  familyRoom: boolean;
  kitchen: boolean;
  serviceRoom: boolean;
  laundaryRoom: boolean;
  balcony: boolean;
}

const CreatePropertyModal: React.FC<CreatePropertyModalProps> = (props) => {
  const { onClose, open, selectedProperty } = props;
  // const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: selectedProperty?.name || '',
      type: selectedProperty?.type || '',
      rooms: selectedProperty?.rooms || 0,
      bathrooms: selectedProperty?.bathrooms || 0,
      livingRoom: selectedProperty?.livingRoom || false,
      diningRoom: selectedProperty?.diningRoom || false,
      hallRoom: selectedProperty?.hallRoom || false,
      familyRoom: selectedProperty?.familyRoom || false,
      kitchen: selectedProperty?.kitchen || false,
      serviceRoom: selectedProperty?.serviceRoom || false,
      laundaryRoom: selectedProperty?.laundaryRoom || false,
      balcony: selectedProperty?.balcony || false,
    },
  });

  const rooms: { label: string; name: keyof FormData }[] = [
    { label: t('livingRoom'), name: 'livingRoom' },
    { label: t('diningRoom'), name: 'diningRoom' },
    { label: t('hallRoom'), name: 'hallRoom' },
    { label: t('familyRoom'), name: 'familyRoom' },
    { label: t('kitchen'), name: 'kitchen' },
    { label: t('serviceRoom'), name: 'serviceRoom' },
    { label: t('laundaryRoom'), name: 'laundaryRoom' },
    { label: t('balcony'), name: 'balcony' },
  ];

  useEffect(() => {
    if (selectedProperty) {
      reset({
        name: selectedProperty.name,
        type: selectedProperty.type,
        rooms: selectedProperty.rooms,
        bathrooms: selectedProperty.bathrooms,
        livingRoom: selectedProperty.livingRoom,
        diningRoom: selectedProperty.diningRoom,
        hallRoom: selectedProperty.hallRoom,
        familyRoom: selectedProperty.familyRoom,
        kitchen: selectedProperty.kitchen,
        serviceRoom: selectedProperty.serviceRoom,
        laundaryRoom: selectedProperty.laundaryRoom,
        balcony: selectedProperty.balcony,
      });
    }
  }, [selectedProperty, reset]);

  const handleClose = () => {
    onClose();
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      if (selectedProperty) {
        // await dispatch(
        //   updateUser({ id: selectedProperty.id, updatedData: data })
        // ).unwrap();
      } else {
        // await dispatch(createUser(data)).unwrap();
      }
      onClose();
    } catch (error) {
      console.error('Failed to save property:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ padding: 3 }}>
        <DialogTitle>
          <Typography variant="h3" component="div" fontWeight="bold">
            {selectedProperty ? t('editProperty') : t('createProperty')}
          </Typography>
        </DialogTitle>
      </Box>
      <Divider />

      <Box sx={{ paddingBottom: 3, paddingRight: 3, paddingLeft: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2} mt={0}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('name')}
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name ? t('nameReq') : ''}
                  {...register('name', { required: t('nameReq') })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('type')}
                  variant="outlined"
                  error={!!errors.type}
                  helperText={errors.type ? t('typeReq') : ''}
                  {...register('type', { required: t('typeReq') })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('rooms')}
                  type="number"
                  variant="outlined"
                  error={!!errors.rooms}
                  helperText={errors.rooms ? t('roomsReq') : ''}
                  {...register('rooms', { required: t('roomsReq') })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('bathrooms')}
                  type="number"
                  variant="outlined"
                  error={!!errors.bathrooms}
                  helperText={errors.bathrooms ? t('bathroomsReq') : ''}
                  {...register('bathrooms', { required: t('bathroomsReq') })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            {rooms.map((room, index) => (
              <Grid item xs={6} key={index}>
                <FormControlLabel
                  control={
                    <Switch
                      {...register(room.name)}
                      // defaultChecked={!!selectedProperty?.[room.name]}
                      defaultChecked={false}
                    />
                  }
                  label={room.label}
                />
              </Grid>
            ))}
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

export default CreatePropertyModal;
