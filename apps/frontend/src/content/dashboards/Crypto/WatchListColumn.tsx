import {
  Card,
  Box,
  Typography,
  Avatar,
  Grid,
  alpha,
  useTheme,
  styled,
} from '@mui/material';
import Group from '@mui/icons-material/Group';
import Home from '@mui/icons-material/Home'; // Property icon
import Quiz from '@mui/icons-material/Quiz'; // Questionnaires icon

import Label from '../../../components/Label';
import Text from '../../../components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

function WatchListColumn() {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              p: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <Group />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Users
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1,
                }}
              >
                56
              </Typography>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Label color="success">+4</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1,
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              p: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <Home />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Property
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1,
                }}
              >
                119
              </Typography>
              <Text color="error">
                <b>-3.24%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Label color="error">-7</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1,
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              p: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <Quiz />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Questionnaire
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1,
                }}
              >
                13
              </Typography>
              <Text color="error">
                <b>-1%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Label color="error">-1</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1,
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WatchListColumn;
