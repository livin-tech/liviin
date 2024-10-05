import { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

import { styled } from '@mui/material/styles';
import ComingSoonImage from '../../../../assets/images/coming-soon.svg';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function StatusComingSoon() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  return (
    <>
      {/* <Helmet>
        <title>Status - Coming Soon</title>
      </Helmet> */}
      <MainContent>
        <Container maxWidth="md">
          {/* <Logo /> */}
          <Box textAlign="center" mb={3}>
            <Container maxWidth="xs">
              <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
                Coming Soon
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                We're working on implementing the last features before our
                launch!
              </Typography>
            </Container>
            <img alt="Coming Soon" height={200} src={ComingSoonImage} />
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusComingSoon;
