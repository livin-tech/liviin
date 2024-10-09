import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
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
import { useAppDispatch } from '../../../hooks/hooks';
import { t } from 'i18next';
import { createProperty, editProperty } from '../../../redux/property/propertySlice';
import { PropertyItem } from '../../../models/property_item';

interface CreatePropertyModalProps {
  onClose: (value?: any) => void;
  open: boolean;
  selectedProperty?: PropertyItem | null;
}

interface FormData {
  // name: string;
  type: string;
  rooms: number;
  bathrooms: number;
  hasLivingRoom: boolean;
  hasDiningRoom: boolean;
  hasHallRoom: boolean;
  hasFamilyRoom: boolean;
  hasKitchen: boolean;
  hasServiceRoom: boolean;
  hasLaundryRoom: boolean;
  hasBalcony: boolean;
  hasGarden: boolean;
  title: string;
  description: string;
  price: number;
  location: string;
  ownerId: string; // New field
}

const CreatePropertyModal: React.FC<CreatePropertyModalProps> = (props) => {
  const { onClose, open, selectedProperty } = props;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  console.log('selectedPropertyselectedProperty', selectedProperty)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>({
    defaultValues: {
      // name: selectedProperty?.name || '',
      type: selectedProperty?.type || '',
      rooms: selectedProperty?.rooms || 0,
      bathrooms: selectedProperty?.bathrooms || 0,
      hasLivingRoom: selectedProperty?.hasLivingRoom || false,
      hasGarden: selectedProperty?.hasGarden || false,
      hasDiningRoom: selectedProperty?.hasDiningRoom || false,
      hasHallRoom: selectedProperty?.hasHallRoom || false,
      hasFamilyRoom: selectedProperty?.hasFamilyRoom || false,
      hasKitchen: selectedProperty?.hasKitchen || false,
      hasServiceRoom: selectedProperty?.hasServiceRoom || false,
      hasLaundryRoom: selectedProperty?.hasLaundryRoom || false,
      hasBalcony: selectedProperty?.hasBalcony || false,
      title: selectedProperty?.title,
      description: selectedProperty?.description || '',
      price: selectedProperty?.price || 0,
      location: selectedProperty?.location || '',
      ownerId: selectedProperty?.owner?._id || '', // New field
    },
  });

  const rooms: { label: string; name: keyof FormData }[] = [
    { label: 'Living Room', name: 'hasLivingRoom' },
    { label: 'Dining Room', name: 'hasDiningRoom' },
    { label: 'Hall Room', name: 'hasHallRoom' },
    { label: 'Family Room', name: 'hasFamilyRoom' },
    { label: 'Kitchen', name: 'hasKitchen' },
    { label: 'Service Room', name: 'hasServiceRoom' },
    { label: 'Laundry Room', name: 'hasLaundryRoom' },
    { label: 'Balcony', name: 'hasBalcony' },
    { label: 'Garden', name: 'hasGarden' },
  ];

  useEffect(() => {
    if (selectedProperty) {
      reset({
        // name: selectedProperty.name,
        type: selectedProperty.type,
        rooms: Number(selectedProperty.rooms),
        bathrooms: Number(selectedProperty.bathrooms),
        hasLivingRoom: selectedProperty?.hasLivingRoom,
        hasGarden: selectedProperty?.hasGarden,
        hasDiningRoom: selectedProperty?.hasDiningRoom,
        hasHallRoom: selectedProperty?.hasHallRoom,
        hasFamilyRoom: selectedProperty?.hasFamilyRoom,
        hasKitchen: selectedProperty?.hasKitchen,
        hasServiceRoom: selectedProperty?.hasServiceRoom,
        hasLaundryRoom: selectedProperty?.hasLaundryRoom,
        hasBalcony: selectedProperty?.hasBalcony,
        title: selectedProperty.title,
        description: selectedProperty.description,
        price: selectedProperty.price,
        location: selectedProperty.location,
        ownerId: selectedProperty.owner?._id,
      });
    }
  }, [selectedProperty, reset]);

  const handleClose = () => {
    onClose();
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      if(selectedProperty){
        console.log('IM EDITING THE PROPERTY', data);
        await dispatch(editProperty({ propertyData: data, propertyId: selectedProperty._id })).unwrap();
      } else {
        console.log('IM CREATING THE PROPERTY');

        await dispatch(createProperty(data)).unwrap();
      }
      onClose();
    } catch (error) {
      console.error('Failed to save property:', error);
    } finally {
      setLoading(false);
    }
  };

  const watchedFields = useWatch({
    control, // from useForm
    name: rooms.map((room) => room.name), // Watching specific room fields
  });

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ padding: 3 }}>
        <DialogTitle>
          <Typography variant="h3" component="div" fontWeight="bold">
            {selectedProperty ? 
            'Edit Property'
            // t('editProperty') 
            : 
            // t('createProperty')
            'Create Property'
            }
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
                  label={t('title')}
                  variant="outlined"
                  error={!!errors.title}
                  helperText={errors.title ? t('titleReq') : ''}
                  {...register('title', { required: t('titleReq') })}
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('location')}
                  variant="outlined"
                  error={!!errors.location}
                  helperText={errors.location ? t('locationReq') : ''}
                  {...register('location', { required: t('locationReq') })}
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

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('description')}
                  variant="outlined"
                  multiline
                  minRows={3}
                  error={!!errors.description}
                  helperText={errors.description ? t('descriptionReq') : ''}
                  {...register('description', {
                    required: t('descriptionReq'),
                  })}
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

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('price')}
                  type="number"
                  variant="outlined"
                  error={!!errors.price}
                  helperText={errors.price ? t('priceReq') : ''}
                  {...register('price', {
                    required: t('priceReq'),
                    validate: (value) => value > 0 || t('priceGreaterThanZero'),
                  })}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" required>
                <TextField
                  label={t('ownerId')}
                  variant="outlined"
                  error={!!errors.ownerId}
                  helperText={errors.ownerId ? t('ownerIdReq') : ''}
                  {...register('ownerId', { required: t('ownerIdReq') })}
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
      checked={!!watchedFields[index]}  // Bind the checked state to the form data
      // onChange={(e) => setValue(room.name, e.target.checked)} // Update value on change
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
