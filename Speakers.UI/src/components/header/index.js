import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

const Divider = styled.div`
  margin-top: 30px;
`;

const Header = () => (
  <>
    <AppBar>
      Header
    </AppBar>
    <Divider />
  </>
);
export default Header;
