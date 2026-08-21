import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

interface UnderConstructionPageProps {
  title: string;
}

export default function UnderConstructionPage({
  title
}: UnderConstructionPageProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: grey[900],
        px: 3,
        gap: 2
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem' },
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '0.95rem', sm: '1.25rem' },
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: grey[400]
        }}
      >
        Under construction
      </Typography>
    </Box>
  );
}
