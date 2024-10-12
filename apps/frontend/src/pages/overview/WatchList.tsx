import { Box } from '@mui/material';
import WatchListColumn from './WatchListColumn';

interface WatchListProps {
  totalUsers: number;
  totalProperties: number;
}

function WatchList({ totalUsers, totalProperties }: WatchListProps) {
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

      <WatchListColumn totalUsers={totalUsers} totalProperties={totalProperties} />
    </>
  );
}

export default WatchList;
