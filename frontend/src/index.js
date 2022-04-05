import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import configureStore from './store/store';

// We will create this component shortly
import Root from './components/root';

// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';

// The session utility we just created
import { setAuthToken } from './util/session_api_util';

//create next
import { logout, signup, login } from './actions/session_actions';

import './index.scss';
import App from './App';
import axios from 'axios';
// const root = document.getElementById('root');
// const renderRoot = createRoot(root);

// renderRoot.render(<App />);


document.addEventListener('DOMContentLoaded', () => {
    let store;

    // If a returning user has a session token stored in localStorage
    if (localStorage.jwtToken) {

        // Set the token as a common header for all axios requests
        setAuthToken(localStorage.jwtToken);

        // Decode the token to obtain the user's information
        const decodedUser = jwt_decode(localStorage.jwtToken);

        // Create a preconfigured state we can immediately add to our store
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        //get time in seconds vs milliseconds
        const currentTime = Date.now() / 1000;

        // If the user's token has expired
        if (decodedUser.exp < currentTime) {
            // Logout the user and redirect to the login page
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        // If this is a first time user, start with an empty store
        store = configureStore({});
    }
    // Render our root component and pass in the store as a prop
    const root = document.getElementById('root');


    const renderRoot = createRoot(root);

    
    
    //TESTING START
    window.axios = axios;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    //TESTING END
    
    renderRoot.render(<Root store={store} />);

    // ReactDOM.render(<Root store={store} />, root);
});