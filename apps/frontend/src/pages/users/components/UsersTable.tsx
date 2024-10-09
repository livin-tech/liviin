import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import {
  Tooltip,
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
  Typography,
  useTheme,
  CardHeader,
  TextField,
} from '@mui/material';

import { User } from '../../../models/users';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { fetchUsers } from '../../../redux/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../store';
import { useTranslation } from 'react-i18next';
import CreateUserModal from './CreateUserModal';
import DeleteUserModal from './DeleteUserModal';
import BulkActions from './BulkActions';

const UsersTable: FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const { users } = useAppSelector((state: RootState) => state.user);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const selectedBulkActions = selectedUsers.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const applyFilters = (
    users: any[] = [],
    searchQuery: string
  ): User[] | [] => {
    return users?.length > 0
      ? users?.filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
  };

  const applyPagination = (
    users: User[],
    page: number,
    limit: number
  ): User[] => {
    return users?.slice(page * limit, page * limit + limit);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClickOpen = (user: any) => {
    if (user) {
      setOpen(true);
      setSelectedValue(user);
    }
  };

  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleUserDeleteDialog = (value: any) => {
    setOpenDeleteDialog(!openDeleteDialog);
    setSelectedValue(value);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSelectAllUsers = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedUsers(
      event.target.checked ? users?.map((user: any) => user._id) : []
    );
  };

  const handleSelectOneUser = (
    event: ChangeEvent<HTMLInputElement>,
    userId: string
  ): void => {
    if (!selectedUsers.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected?.filter((id) => id !== userId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUsers = applyFilters(users, searchQuery);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedSomeUsers =
    selectedUsers.length > 0 && selectedUsers.length < users.length;
  const selectedAllUsers = selectedUsers.length === users.length;
  const theme = useTheme();

  return (
    <Card>
      <CreateUserModal
        // selectedUser={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <DeleteUserModal
        selectedValue={selectedValue}
        open={openDeleteDialog}
        onClose={handleUserDeleteDialog}
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
                placeholder={t('searchUsers')}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Box>
          }
          title={t('usersTitleSidebar')}
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
                  checked={selectedAllUsers}
                  indeterminate={selectedSomeUsers}
                  onChange={handleSelectAllUsers}
                />
              </TableCell>
              <TableCell>{t('firstName')}</TableCell>
              <TableCell>{t('lastName')}</TableCell>
              <TableCell>{t('email')}</TableCell>
              <TableCell align="right">{t('role')}</TableCell>
              {/* <TableCell align="right">Status</TableCell> */}
              <TableCell align="right">{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers?.map((user) => {
              const isUserSelected = selectedUsers.includes(user._id);
              return (
                <TableRow hover key={user._id} selected={isUserSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isUserSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneUser(event, user._id)
                      }
                      value={isUserSelected}
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
                      {user.firstName}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(cryptoOrder.orderDate, 'MMMM dd yyyy')}
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
                      {user.lastName}
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
                      {user.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.role}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title={t('editUser')} arrow>
                      <IconButton
                        onClick={() => handleClickOpen(user)}
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
                        onClick={() => handleUserDeleteDialog(user)}
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
          count={filteredUsers.length}
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

export default UsersTable;
