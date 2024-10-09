import PageHeaderProperty from './components/PageHeaderProperty';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import PropertyItemsTable from './components/PropertyItemsTable'


function Property() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeaderProperty />
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
            <PropertyItemsTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Property;
