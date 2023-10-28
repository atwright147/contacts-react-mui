import { FC } from 'react';
import { Drawer, Link, styled } from '@mui/material'
import { NavLink as RouterNavLink } from 'react-router-dom';

interface Props {
  drawerWidth: number;
}

export const Nav: FC<Props> = ({ drawerWidth }): JSX.Element => {
  return (
    <Drawer variant="permanent" PaperProps={{ sx: { width: drawerWidth } }}>
      <StyledNav>
        <StyledLink component={RouterNavLink} to="/">Home</StyledLink>
        <StyledLink component={RouterNavLink} to="/team">Team</StyledLink>
      </StyledNav>
    </Drawer>
  );
}

const StyledNav = styled('nav')`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(.25, .5),
  width: '100%',
})) as typeof Link;
