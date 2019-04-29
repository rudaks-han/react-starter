
import React, { Fragment }  from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import UserListContainer from './user/container/UserListContainer';
import UserRegisterContainer from './user/container/UserRegisterContainer';
import UserModifyContainer from './user/container/UserModifyContainer';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/front/user"/>
      <Route path="/front" component={({match}) =>
        <Fragment>
            <Route exact path={`${match.path}/user`} component={UserListContainer}></Route>
            <Route exact path={`${match.path}/user/register`} component={UserRegisterContainer}></Route>
            <Route exact path={`${match.path}/user/modify`} component={UserModifyContainer}></Route>
        </Fragment>
      }/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
