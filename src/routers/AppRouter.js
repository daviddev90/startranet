import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryPage from '../components/CategoryPage';
import CupholderPage from '../components/CupholderPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PlaceListPage from '../components/PlaceListPage';

import database from '../firebase/firebase';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PlaceListPage} exact={true} />
        <Route path="/cupholder" component={CupholderPage} />
        <Route path="/category" component={CategoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
