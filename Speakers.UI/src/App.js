import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from './theme';
// import { Route } from 'react-router';
import Header from './components/header';
import Footer from './components/footer';
import EngagementsList from './pages/engagements-list';

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <main>
          <Container maxWidth="md">
            <EngagementsList />
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </StyledThemeProvider>
  </ThemeProvider>
);
export default App;
