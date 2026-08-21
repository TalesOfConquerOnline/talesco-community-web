import {
  AppBar as MuiAppBar,
  Container,
  Link,
  Tab,
  Tabs,
  Toolbar
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

import { DB_LOGO_URL } from '../config/assets';
import { DISCORD_URL } from '../config/consts';

const Image = styled('img')(({ theme }) => ({
  height: 56,
  [theme.breakpoints.down('sm')]: {
    height: 50
  },
  willChange: 'filter',
  transition: 'filter 300ms',
  ':hover': {
    filter: `drop-shadow(0 0 0.5em ${theme.palette.primary.main})`
  }
}));

const tabs = [
  { label: 'Wiki', path: '/wiki' },
  { label: 'Market', path: '/market' },
  { label: 'Discord', path: DISCORD_URL, external: true }
];

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = tabs.some((tab) => tab.path === location.pathname)
    ? location.pathname
    : false;

  return (
    <MuiAppBar position="fixed" sx={{ backgroundColor: grey[900] }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Link
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={() => location.pathname !== '/' && navigate('/')}
          >
            <Image src={DB_LOGO_URL} loading="lazy" alt="TalesCO Logo" />
          </Link>

          <Tabs
            value={activeTab}
            onChange={(_, path: string) => {
              if (tabs.find((tab) => tab.path === path)?.external) {
                window.open(path, '_blank', 'noopener');
              } else {
                navigate(path);
              }
            }}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{ color: 'white' }}
          >
            {tabs.map((tab) => (
              <Tab key={tab.path} label={tab.label} value={tab.path} />
            ))}
          </Tabs>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
