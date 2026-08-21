import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { LOGO_URL } from '../config/assets';

const Logo = styled('img')(({ theme }) => ({
  width: '80%',
  minWidth: 250,
  maxWidth: 800,
  willChange: 'filter',
  transition: 'filter 300ms',
  ':hover': {
    filter: `drop-shadow(0 0 0.5em ${theme.palette.primary.main})`
  }
}));

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: grey[900],
        px: 3
      }}
    >
      <Logo src={LOGO_URL} alt="TalesCO logo" fetchPriority="high" />
      <Typography
        variant="h1"
        sx={{
          mt: 2,
          fontSize: { xs: '0.95rem', sm: '1.25rem' },
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: grey[400]
        }}
      >
        Community website built and maintained by the TalesCO community
      </Typography>
    </Box>
  );
}
