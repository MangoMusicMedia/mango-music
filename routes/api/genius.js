const axios = require('axios');
const qs = require('qs');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.get("/search", (req, res) => {
  const token = "Bearer " + keys.genius_authorization_token
  let search_url = `https://api.genius.com/search?q=${req.query.q}`;
  
  axios.get(search_url, {
    headers: { 
      'Authorization': token
    }
  }).then(payload => {
    return res.json(payload.data.response.hits[0].result.id)
  }, err =>  res.status(400).json(err))
});

router.get("/songs/:songId", (req, res) => {
  
  const token = "Bearer " + keys.genius_authorization_token
  let song_url = `https://api.genius.com/songs/${req.params.songId}?text_format=plain`;

  axios.get(song_url, {
    headers: { 
      'Authorization': token
    }
  }).then(payload => {
    return res.json({description: payload.data.response.song.description.plain})
  }, err =>  res.status(400).json(err))
});

module.exports = router;