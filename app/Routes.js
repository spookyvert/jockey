import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import SettingsPage from './containers/SettingsPage';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import QrPage from './containers/QrPage';
import FaqPage from './containers/FaqPage';
import FilterPage from './containers/FilterPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.FILTER} component={FilterPage} />
      <Route path={routes.FAQ} component={FaqPage} />
      <Route path={routes.SETTINGS} component={SettingsPage} />
      <Route path={routes.LOGIN} component={LoginPage} />
      <Route path={routes.QR} component={QrPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
