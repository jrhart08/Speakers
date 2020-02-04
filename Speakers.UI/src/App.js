import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import EngagementsList from './pages/engagements-list';
import SpeakersThemeProvider from './theme/SpeakersThemeProvider';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <SpeakersThemeProvider>
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
      </SpeakersThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
