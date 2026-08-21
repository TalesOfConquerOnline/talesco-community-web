import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import AppBar from './components/AppBar';
import theme from './config/theme';
import HomePage from './pages/HomePage';
import UnderConstructionPage from './pages/UnderConstructionPage';

function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/wiki"
              element={<UnderConstructionPage title="Wiki" />}
            />
            <Route
              path="/market"
              element={<UnderConstructionPage title="Market" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
