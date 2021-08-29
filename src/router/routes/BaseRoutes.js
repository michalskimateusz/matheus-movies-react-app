import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetailsView from '../../views/MovieDetailsView/MovieDetailsView';
import SearchView from '../../views/SearchView/SearchView';


const BaseRoutes = () => (
  <Switch>
    <Route exact path="/" component={SearchView} />
    <Route exact path="/movie/:id/details/:title" component={MovieDetailsView} />
  </Switch>
)
 
export default BaseRoutes;