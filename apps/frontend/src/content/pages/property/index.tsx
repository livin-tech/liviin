import PageHeaderProperty from './components/PageHeaderProperty';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import PropertyItems from './components/PropertyItems';


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
            {/* <RecentOrders /> */}
            <PropertyItems />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Property;
