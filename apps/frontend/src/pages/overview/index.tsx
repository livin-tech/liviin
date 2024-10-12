import PageHeader from './PageHeader';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import WatchList from './WatchList';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUsers } from '../../redux/user/userSlice';
import { RootState } from '../../store';
import { fetchProperties } from '../../redux/property/propertySlice';

function DashboardCrypto() {
  const { users } = useAppSelector((state: RootState) => state.user);
  const { properties } = useAppSelector((state: RootState) => state.property);

  const dispatch = useAppDispatch();

  console.log("usersusers->>", users, 'propertiesproperties', properties)

  useEffect(() => {
    !users && dispatch(fetchUsers());
    !properties && dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          {/* <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid> */}
          <Grid item xs={12}>
            <WatchList totalUsers={users.length} totalProperties={properties.length} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashboardCrypto;
