import React from 'react';
import './App.scss';
import Splash from './components/splash/splash';
import Header from './components/splash/header';
import Modal from './components/modal/modal';


function App() {
  return (
    <div>
      <Modal/>
      <Header/>
      <Splash/>
    </div>
  );
}

export default App;
