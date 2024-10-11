import PageHeader from './PageHeader';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import WatchList from './WatchList';

function Dashboard() {
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
            <WatchList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
