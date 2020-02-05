import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Divider } from './styles';
import ToggleThemeButton from './ToggleThemeButton';

const Header = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Header
        </Typography>
        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
    <Divider />
  </>
);

export default Header;
