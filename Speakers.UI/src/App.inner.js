import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Footer from './components/Footer';
import EngagementsList from './pages/engagements-list';

// each function in createSelector takes the previous selectors' returns as parameters.
// it also memoizes by each one.
const selectTheme = createSelector(
  // memoize by this
  (state) => state.themes.current,

  // return this
  (current) => createMuiTheme({
    palette: {
      type: current,
    },
  }),
);

const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/" component={EngagementsList} />
              <Redirect to="/" />
            </Switch>
          </Container>
        </main>
        <Footer />
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

App.displayName = 'App';

export default App;
