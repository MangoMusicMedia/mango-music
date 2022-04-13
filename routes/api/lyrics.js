const axios = require('axios');
const qs = require('qs');
const express = require("express");
const router = express.Router();

router.get("/:artist/:songName", (req, res) => {
  
  let song_url = `https://api.lyrics.ovh/v1/${req.params.artist}/${req.params.songName}`;

  axios.get(song_url).then(payload => {
    return res.json(payload.data)
  }, err =>  res.status(400).json(err))
});

module.exports = router;