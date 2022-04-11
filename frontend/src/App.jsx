import React from 'react';
import './App.scss';
import Splash from './components/splash/splash';
import Header from './components/header';
import Modal from './components/modal/modal';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Route, Switch, } from "react-router-dom";
import Feed from './components/feed/feed_container';
import Profile from './components/profile/profile';
import Post from './components/post/post_container';
import Footer from './components/footer/footer';
import OurTeam from './components/ourTeam/ourTeam';

function App() {
  return (
    <div>
      <header>
        <Modal/>
        <ProtectedRoute component={Header}/>
      </header>
      <body>
        <Switch>
          <AuthRoute exact path="/welcome"component={Splash} />
          <ProtectedRoute exact path="/posts/:postId" component={Post}/>
          <ProtectedRoute exact path="/users/:id" component={Profile} />
          <ProtectedRoute exact path="/ourTeam" component={OurTeam} />
          <ProtectedRoute path="/" component={Feed}/>
        </Switch>
      </body>
      <footer>
        <ProtectedRoute path="/posts/:postId" component={Footer} />
        <ProtectedRoute path="/users/:id" component={Footer} />
        <ProtectedRoute exact path="/" component={Footer} />
      </footer>
    </div>
  );
}

export default App;
