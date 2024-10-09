import { Box } from '@mui/material';
import WatchListColumn from './WatchListColumn';

function WatchList() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      ></Box>

      <WatchListColumn />
      {/* {tabs === 'watch_list_columns' && <WatchListColumn />} */}

      {/* {tabs === 'watch_list_rows' && <WatchListRow />} */}

      {/* {!tabs && (
        <Card
          sx={{
            textAlign: 'center',
            p: 3
          }}
        >
          <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

          <Typography
            align="center"
            variant="h2"
            fontWeight="normal"
            color="text.secondary"
            sx={{
              mt: 3
            }}
            gutterBottom
          >
            Click something, anything!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4
            }}
          >
            Maybe, a button?
          </Button>
        </Card>
      )} */}
    </>
  );
}

export default WatchList;
