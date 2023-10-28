import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Main } from './Main';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export default function Root() {
  return (
    <>
      <Nav drawerWidth={240} />
      <Main>
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6" color="inherit" noWrap>
              My App
            </Typography>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Main>
    </>
  );
}
