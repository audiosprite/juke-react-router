'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ArtistsContainer from './containers/ArtistsContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/artists" component={ArtistsContainer} />
        <Route path="/albums" component={AlbumsContainer} />
        <Route path="/album/:albumId" component={AlbumContainer} />
        <IndexRoute component={AlbumsContainer} />
      </Route> 
    </Router>
  </Provider>,
  document.getElementById('app')
);