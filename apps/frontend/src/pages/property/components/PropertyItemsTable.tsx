import React, { ChangeEvent, useState, useEffect } from 'react';
import {
  Divider,
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
  CardHeader,
  TextField,
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { useTranslation } from 'react-i18next';
import CreatepropertiesModal from './CreatePropertyModal';
import DeletepropertiesModal from './DeletePropertyModal';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { PropertyItem } from '../../../models/property_item';
import { fetchProperties } from '../../../redux/property/propertySlice';


const PropertiesItemsTable = () => {
  const [selectedpropertiesItems, setSelectedpropertiesItems] = useState<
    string[]
  >([]);

  const { t } = useTranslation();

  const selectedBulkActions = selectedpropertiesItems.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  // const [filters, setFilters] = useState<Filters>({
  //   status: null,
  // });
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState<PropertyItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { properties } = useAppSelector((state) => state.property);

  console.log('propertiesproperties', properties)


const applyFilters = (
  properties: PropertyItem[],
  searchQuery: string
): PropertyItem[] => {
  return properties.filter(
    (propertiesItem) =>
      propertiesItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      propertiesItem.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const applyPagination = (
  properties: PropertyItem[],
  page: number,
  limit: number
): PropertyItem[] => {
  return properties.slice(page * limit, page * limit + limit);
};

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  // const handleClickOpen = (properties: propertiesItem) => {
  //   setOpen(true);
  //   setSelectedValue(properties);
  // };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue(null);
  };

  const handlePropertyDeleteDialog = (value: any) => {
    console.log('handlePropertyDeleteDialog', value)
    setOpenDeleteDialog(!openDeleteDialog);
    setSelectedValue(value);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSelectAllpropertiesItems = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedpropertiesItems(
      event.target.checked
        ? (properties
            .map((propertiesItem) => propertiesItem._id)
            .filter(Boolean) as string[])
        : []
    );
  };

  const handleSelectOnepropertiesItem = (
    event: ChangeEvent<HTMLInputElement>,
    propertiesItemId: string
  ): void => {
    if (!selectedpropertiesItems.includes(propertiesItemId)) {
      setSelectedpropertiesItems((prevSelected) => [
        ...prevSelected,
        propertiesItemId,
      ]);
    } else {
      setSelectedpropertiesItems((prevSelected) =>
        prevSelected.filter((id) => id !== propertiesItemId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const handleEditClick = (property: PropertyItem) => {
    // console.log('handleEditClick->', property)
    setSelectedValue(property); // Set the selected property
    setOpen(true); // Open the modal
  };

  const filteredpropertiesItems = applyFilters(properties, searchQuery);
  const paginatedpropertiesItems = applyPagination(filteredpropertiesItems, page, limit);
  const selectedSomepropertiesItems =
    selectedpropertiesItems.length > 0 &&
    selectedpropertiesItems.length < properties.length;
  const selectedAllpropertiesItems =
    selectedpropertiesItems.length === properties.length;
  const theme = useTheme();

  return (
    <Card>
      <CreatepropertiesModal
        selectedProperty={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <DeletepropertiesModal
        selectedValue={selectedValue?._id}
        open={openDeleteDialog}
        onClose={handlePropertyDeleteDialog}
      />
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search properties..."
                // placeholder={t('searchUsers')}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Box>
          }
          title="Properties"
          // title={t('usersTitleSidebar')}
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllpropertiesItems}
                  indeterminate={selectedSomepropertiesItems}
                  onChange={
                    // if (propertiesItem._id) {
                    handleSelectAllpropertiesItems // Only call if _id is defined
                    // }
                  }
                />
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Rooms</TableCell>
              <TableCell>Bathrooms</TableCell>
              <TableCell>Living Room</TableCell>
              <TableCell>Dining Room</TableCell>
              <TableCell>Hall Room</TableCell>
              <TableCell>Family Room</TableCell>
              <TableCell>Kitchen</TableCell>
              <TableCell>Service Room</TableCell>
              <TableCell>Laundry Room</TableCell>
              <TableCell>Balcony</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedpropertiesItems.map((propertiesItem) => {
              const ispropertiesItemSelected = selectedpropertiesItems.includes(
                propertiesItem._id // Changed to _id from id
              );
              return (
                <TableRow
                  hover
                  key={propertiesItem._id} // Changed to _id from id
                  selected={ispropertiesItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={ispropertiesItemSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOnepropertiesItem(event, propertiesItem._id)
                      }
                    />
                  </TableCell>
                  <TableCell>{propertiesItem.title}</TableCell>{' '}
                  {/* Changed to title */}
                  <TableCell>{propertiesItem.type}</TableCell>
                  <TableCell>{propertiesItem.rooms}</TableCell>
                  <TableCell>{propertiesItem.bathrooms}</TableCell>
                  <TableCell>
                    {propertiesItem.hasLivingRoom ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasDiningRoom ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasHallRoom ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasFamilyRoom ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasKitchen ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasServiceRoom ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasLaundryRoom ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell>
                    {propertiesItem.hasBalcony ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      sx={{
                        '&:hover': {
                          background: theme.colors.primary.lighter,
                        },
                        color: theme.palette.primary.main,
                      }}
                      onClick={() => handleEditClick(propertiesItem)} 
                      color="inherit"
                      size="small"
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                    onClick={() => handlePropertyDeleteDialog(propertiesItem)}
                      sx={{
                        '&:hover': { background: theme.colors.error.lighter },
                        color: theme.palette.error.main,
                      }}
                      color="inherit"
                      size="small"
                    >
                      <DeleteTwoToneIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          labelRowsPerPage={t('rowsPerPage')}
          count={properties.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

export default PropertiesItemsTable;
