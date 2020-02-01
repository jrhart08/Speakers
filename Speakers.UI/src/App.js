import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import EngagementsList from './pages/engagements-list';

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);
export default App;
