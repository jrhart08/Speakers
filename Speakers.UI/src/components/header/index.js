import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Divider = styled.div`
  margin-top: 30px;
`;

const Header = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Header
        </Typography>
      </Toolbar>
    </AppBar>
    <Divider />
  </>
);

export default Header;
