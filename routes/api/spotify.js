const axios = require('axios');
const qs = require('qs');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

const getAuth = async () => {
  try{
    //make post request to spotify API for access token
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${Buffer.from(keys.spotify_client_id + ':' + keys.spotify_client_secret).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    return response.data
  }catch(error){
    console.log(error);
  }
}

// Testing that we're getting back the auth token from spotify
// getAuth();

// test route for spotify data
router.get("/test", (req, res) => {
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      const test_url = "https://api.spotify.com/v1/search?q=lady%20gaga&type=artist";
      
      const response = axios.get(test_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(data => {
      return res.json(data.data)
    }, err =>  res.status(400).json(err))

});

module.exports = router;
