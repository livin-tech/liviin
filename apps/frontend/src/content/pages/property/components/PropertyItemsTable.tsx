import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
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
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  TextField,
} from '@mui/material';

// import { CryptoOrder, CryptoOrderStatus } from '../../../models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
// import { fetchUsers } from '../../../lib/redux/auth/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
// import { RootState } from '../../../store';
// import CreateUserModal from './CreateUserModal';
// import DeleteUserModal from './DeleteUserModal';
import { useTranslation } from 'react-i18next';
import { PropertyItem } from 'apps/frontend/src/models/property_item';
import { RootState } from 'apps/frontend/src/store';

interface PropertyItemsTableProps {
  className?: string;
  propertyItems: PropertyItem[];
}

const applyFilters = (
  properties: PropertyItem[],
  searchQuery: string
): PropertyItem[] => {
  return properties.filter((propertyItem) =>
    propertyItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    propertyItem.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    propertyItem.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const applyPagination = (
  properties: PropertyItem[],
  page: number,
  limit: number
): PropertyItem[] => {
  return properties.slice(page * limit, page * limit + limit);
};

const PropertyItemsTable: FC<PropertyItemsTableProps> = ({ propertyItems }) => {
  const [selectedPropertyItems, setSelectedPropertyItems] = useState<string[]>(
    []
  );
  // const { properties, loading, error } = useAppSelector(
  //   (state: RootState) => state.property
  // );
  const { t } = useTranslation();


  const dispatch = useAppDispatch();
  const selectedBulkActions = selectedPropertyItems.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  // const [filters, setFilters] = useState<Filters>({
  //   status: null,
  // });
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [searchQuery, setSearchQuery] = useState<string>('');

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const handleClickOpen = (property: PropertyItem) => {
    setOpen(true);
    setSelectedValue(property);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleUserDeleteDialog = (value) => {
    setOpenDeleteDialog(!openDeleteDialog);
    setSelectedValue(value);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSelectAllPropertyItems = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedPropertyItems(
      event.target.checked
        ? propertyItems.map((propertyItem) => propertyItem.id)
        : []
    );
  };

  const handleSelectOnePropertyItem = (
    event: ChangeEvent<HTMLInputElement>,
    propertyItemId: string
  ): void => {
    if (!selectedPropertyItems.includes(propertyItemId)) {
      setSelectedPropertyItems((prevSelected) => [
        ...prevSelected,
        propertyItemId,
      ]);
    } else {
      setSelectedPropertyItems((prevSelected) =>
        prevSelected.filter((id) => id !== propertyItemId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  // const filteredPropertyItems = applyFilters(properties, searchQuery);
  const paginatedPropertyItems = applyPagination(
    propertyItems,
    page,
    limit
  );
  const selectedSomePropertyItems =
    selectedPropertyItems.length > 0 &&
    selectedPropertyItems.length < propertyItems.length;
  const selectedAllPropertyItems =
    selectedPropertyItems.length === propertyItems.length;
  const theme = useTheme();

  return (
    <Card>
      {/* <CreateUserModal
        selectedUser={selectedValue}
        open={open}
        onClose={handleClose}
      /> */}
      {/* <DeleteUserModal
        selectedValue={selectedValue}
        open={openDeleteDialog}
        onClose={handleUserDeleteDialog}
      /> */}
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
                placeholder="Search property..."
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
                  checked={selectedAllPropertyItems}
                  indeterminate={selectedSomePropertyItems}
                  onChange={handleSelectAllPropertyItems}
                />
              </TableCell>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('city')}</TableCell>
              <TableCell>{t('address')}</TableCell>
              {/* <TableCell align="right">{t('role')}</TableCell> */}
              {/* <TableCell align="right">Status</TableCell> */}
              <TableCell align="right">{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPropertyItems.map((propertyItem) => {
              const isPropertyItemSelected = selectedPropertyItems.includes(
                propertyItem.id
              );
              return (
                <TableRow
                  hover
                  key={propertyItem.id}
                  selected={isPropertyItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isPropertyItemSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOnePropertyItem(event, propertyItem.id)
                      }
                      value={isPropertyItemSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {propertyItem.name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(propertyItem.orderDate, 'MMMM dd yyyy')}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {propertyItem.city}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {propertyItem.address}
                    </Typography>
                  </TableCell>
                  {/* <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {propertyItem.role}
                    </Typography>
                  </TableCell> */}
                  <TableCell align="right">
                    <Tooltip title={t('editUser')} arrow>
                      <IconButton
                        onClick={() => handleClickOpen(propertyItem)}
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={t('deleteUser')} arrow>
                      <IconButton
                        onClick={() => handleUserDeleteDialog(propertyItem)}
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
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
          count={propertyItems.length}
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

PropertyItemsTable.propTypes = {
  propertyItems: PropTypes.array.isRequired,
};

PropertyItemsTable.defaultProps = {
  propertyItems: [],
};

export default PropertyItemsTable;
