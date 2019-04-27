
import React, { Fragment }  from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/front/user"/>
      <Route path="/front" component={({match}) =>
        <Fragment>
            {/*<Route exact path={`${match.path}/user`} component={UserListContainer}></Route>*/}
        </Fragment>
      }/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
