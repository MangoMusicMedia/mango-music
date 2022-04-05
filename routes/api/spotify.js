const axios = require('axios');
const qs = require('qs');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

// To get the auth token from spotify
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


// Search route for spotify data. Expects request params to look like: {
//   q: 'lady gaga',  // search query.
//   type: 'artist'   // types allowed are "album", "artist", "playlist", "track", "show", "episode"
// }
// Accepts optional params such as limit. Look at spotify documentation to see available params

router.get("/search", (req, res) => {
  console.log(req.query)
  
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      let search_url = "https://api.spotify.com/v1/search?";
      
      let params = []
      for (let k in req.query) {
        params.push(`${k}=${req.query[k]}`)
      }
      search_url += params.join("&");
      
      const response = axios.get(search_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(payload => {
      // console.log(payload.data.tracks.items[0].id) // Grabs id from first track
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});


// Route for specific spotify track info. Requires knowing the spotify id of the album. Expects request params to look like: {
//   id: '0GjEhVFGZW8afUYGChu3Rr',  // track id.
// }
// Example id for dancing queen by abba: 0GjEhVFGZW8afUYGChu3Rr
router.get("/track", (req, res) => {
  console.log(req.query)
  
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      const track_url = `https://api.spotify.com/v1/tracks/${req.query.id}`
      
      const response = axios.get(track_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(payload => {
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});

// Route for specific spotify album info. Requires knowing the spotify id of the album. Expects request params to look like: {
//   id: '1V6a99EbTTIegOhWoPxYI9',  // album id.
// }
// Example id for arrival by abba: 1V6a99EbTTIegOhWoPxYI9
router.get("/album", (req, res) => {
  console.log(req.query)
  
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      const album_url = `https://api.spotify.com/v1/albums/${req.query.id}`
      
      const response = axios.get(album_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(payload => {
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});

// Route for specific spotify artist info. Requires knowing the spotify id of the artist. Expects request params to look like: {
//   id: '0LcJLqbBmaGUft1e9Mm8HV',  // artist id.
// }
// Example id for abba: 0LcJLqbBmaGUft1e9Mm8HV
router.get("/artist", (req, res) => {
  console.log(req.query)
  
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      const artist_url = `https://api.spotify.com/v1/artists/${req.query.id}`
      
      const response = axios.get(artist_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(payload => {
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});

// Get list of available genres
router.get("/genres", (req, res) => {
  console.log(req.query)
  
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      const artist_url = `https://api.spotify.com/v1/recommendations/available-genre-seeds`
      
      const response = axios.get(artist_url, {
        headers: { 
          'Authorization': token
        }
      })
      return response;
    })
    .then(payload => {
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});



// Search route for spotify data. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
// Expecting a comma separated list of param values for seed artist, genres, and tracks, so may need to array.join.(", ") if value is stored in an array
// Expects request params to look like: {
//   seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
//   seed_genres: 'classical,country',
//   seed_tracks: '0c6xIDDpzE81m2q797ordA'
// }
// Accepts optional params such as limit, max_danceability, etc. Look at spotify documentation to see available params
router.get("/recommendations", (req, res) => {
  console.log(req.query)
  
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      let rec_url = "https://api.spotify.com/v1/recommendations?";
      
      let params = []
      for (let k in req.query) {
        params.push(`${k}=${req.query[k]}`)
      }
      rec_url += params.join("&");
      
      const response = axios.get(rec_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(payload => {
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});


module.exports = router;