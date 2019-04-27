
import React, { Fragment }  from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import UserListContainer from './user/container/UserListContainer';
import ItemListContainer from './item/container/ItemListContainer';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/front/user"/>
      <Route path="/front" component={({match}) =>
        <Fragment>
            {/*<Route path="/front/user"></Route>*/}
        </Fragment>
      }/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
