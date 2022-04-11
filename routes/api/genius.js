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
    return res.json(payload.data.response.hits)
  }, err =>  res.status(400).json(err))
});

module.exports = router;