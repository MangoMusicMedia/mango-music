import React from 'react';
import './App.scss';
import Splash from './components/splash/splash';
import Header from './components/header';
import Modal from './components/modal/modal';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Route, Switch, } from "react-router-dom";
import Feed from './components/feed/feed_container';
import Post from './components/post/post_container';


function App() {
  return (
    <div>
      <Modal/>
      <ProtectedRoute component={Header}/>
      <Switch>
        <AuthRoute exact path="/welcome"component={Splash} />
        <ProtectedRoute exact path="/posts/:postId" component={Post}/>
        <ProtectedRoute path="/" component={Feed}/>
      </Switch>
    </div>
  );
}

export default App;
