import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Grid } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import CreatePropertyModal from './CreatePropertyModal';

function PageHeaderProperty() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const { t } = useTranslation();

  const handleClickOpen = () => {
    console.log('handleClickOpenhandleClickOpen');
    setOpen(true);
  };

  const handleClose = (value: any) => {
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
            {t('propertyTitleSidebar')}
          </Typography>
          <Typography variant="subtitle2">{t('propertyDesc')}</Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            onClick={handleClickOpen}
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('createProperty')}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeaderProperty;
