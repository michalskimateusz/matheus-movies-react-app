import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchView from '../../views/SearchView/SearchView';


const BaseRoutes = () => (
  <Switch>
    <Route exact path="/" component={SearchView} />
  </Switch>
)
 
export default BaseRoutes;