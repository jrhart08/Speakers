import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { DARK, SERIAL_KILLER } from './themes';
import Context from './_context';

const SpeakersThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(SERIAL_KILLER);

  const muiTheme = useMemo(() => createMuiTheme({
    palette: {
      type: theme,
    },
  }), [theme]);

  const contextValue = {
    theme,
    toggleTheme: () => setTheme(theme === DARK ? SERIAL_KILLER : DARK),
  };

  return (
    <Context.Provider value={contextValue}>
      <SCThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </SCThemeProvider>
    </Context.Provider>
  );
};

SpeakersThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpeakersThemeProvider;
