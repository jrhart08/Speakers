import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {
  ThemeProvider as SCThemeProvider,
  createMuiTheme,
} from 'styled-components';
import { memoize } from 'lodash/fp/memoize';

const getTheme = memoize((type) => createMuiTheme({
  palette: {
    type,
  },
}));

const SpeakersThemeProvider = ({ children }) => {
  const { current } = useSelector((state) => state.theme);

  const theme = getTheme(current);

  return (
    <SCThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </SCThemeProvider>
  );
};

SpeakersThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpeakersThemeProvider;
