import { Grid, Container } from '@mui/material';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import UsersTable from './components/UsersTable';
import PageHeader from './components/PageHeader';

function Users() {
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
          spacing={3}
        >
          <Grid item xs={12}>
            <UsersTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Users;
