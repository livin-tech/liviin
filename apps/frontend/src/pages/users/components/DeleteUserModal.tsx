import { useState } from 'react';
import {
  Divider,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  Button,
} from '@mui/material';
import { useAppDispatch } from '../../../hooks/hooks';
import { deleteUser } from '../../../redux/user/userSlice';
import { useTranslation } from 'react-i18next';

interface DeleteUserModalProps {
  onClose: (value?: string) => void;
  selectedValue: string; // ID of the user to delete
  open: boolean;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = (props) => {
  const { onClose, selectedValue, open } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();


  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await dispatch(deleteUser(selectedValue)).unwrap();
      onClose(selectedValue);
    } catch (error) {
      console.error('Failed to delete user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box>
        <DialogTitle>
          <Typography variant="h3" component="div" fontWeight="bold">
          {t('deleteUser')}
          </Typography>
        </DialogTitle>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingBottom: 3,
          paddingRight: 23,
          paddingLeft: 3,
          paddingTop: 1,
        }}
      >
        <Typography variant="h6" component="div">
        {t('deleteUserDesc')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'end',
          marginTop: 2,
          paddingBottom: 1,
          paddingRight: 2,
        }}
      >
        <Button variant="outlined" color="inherit" onClick={handleClose}>
        {t('cancel')}
        </Button>
        <Button
          sx={{ marginLeft: 2 }}
          variant="contained"
          color="error"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? t('deleting') : t('confirm')}
        </Button>
      </Box>
    </Dialog>
  );
};

export default DeleteUserModal;
