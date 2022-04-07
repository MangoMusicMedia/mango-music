import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import configureStore from './store/store';


//TESTING FETCHING LIKED POSTS
import { fetchLikedPostsbyUser } from './util/post_api_util';


// TESTING START
import { search, 
    fetchTrack, 
    fetchAlbum, 
    fetchArtist, 
    fetchGenres, 
    fetchRecommendations,
    fetchArtistTopTracks,
    fetchArtistAlbums,
    fetchNewReleases,
    fetchAlbumsTracks
} from './util/spotify_api_util';
import { fetchPosts, fetchPost, fetchPostsByUser, createPost, updatePost, deletePost } from './actions/post_actions';
// TESTING END

//TESTING COMMENTS
import { fetchComments, fetchComment, createComment, editComment, deleteComment } from './actions/comment_actions';

//TESTING LIKES
import { fetchLikes, fetchLike, createLike, deleteLike } from "./actions/like_actions";

// We will create this component shortly
import Root from './components/root';

// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';

// The session utility we just created
import { setAuthToken } from './util/session_api_util';

//create next
import { logout, signup, login } from './actions/session_actions';

import './index.scss';
import axios from 'axios';

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
    
    //TESTING START
    window.axios = axios;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.search = search
    window.fetchTrack = fetchTrack;
    window.fetchAlbum = fetchAlbum;
    window.fetchArtist = fetchArtist;
    window.fetchGenres = fetchGenres;
    window.fetchRecommendations = fetchRecommendations;
    window.fetchArtistTopTracks = fetchArtistTopTracks;
    window.fetchArtistAlbums = fetchArtistAlbums;
    window.fetchNewReleases = fetchNewReleases;
    window.fetchAlbumsTracks = fetchAlbumsTracks;

    window.fetchComments = fetchComments;
    window.fetchComment = fetchComment;
    window.createComment = createComment;
    window.editComment = editComment;
    window.deleteComment = deleteComment;

    window.fetchPosts = fetchPosts;
    window.fetchPost = fetchPost;
    window.createPost = createPost;
    window.updatePost = updatePost;
    window.deletePost = deletePost;
    window.fetchPostsByUser = fetchPostsByUser;
    window.fetchLikedPostsbyUser = fetchLikedPostsbyUser;

    window.fetchLikes = fetchLikes;
    window.fetchLike = fetchLike;
    window.createLike = createLike;
    window.deleteLike = deleteLike;

    //TESTING END
    
    // Render our root component and pass in the store as a prop
    const root = document.getElementById('root');
    const renderRoot = createRoot(root);
    renderRoot.render(<Root store={store} />);
});
