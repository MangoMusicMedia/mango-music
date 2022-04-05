import axios from "axios";

// searchData should look like: {
//   q: 'lady gaga',  // search query.
//   type: 'artist'   // types allowed are "album", "artist", "playlist", "track", "show", "episode"
// }
// Accepts optional params such as limit. Look at spotify documentation to see available params
export const search = (searchData) => {
  return axios.get('/api/spotify/search', {
    params: searchData
  });
}

// Route for specific spotify track info. Requires knowing the spotify id of the track. 
// Example: fetchTrack('0GjEhVFGZW8afUYGChu3Rr')

export const fetchTrack = (spotifyId) => {
  return axios.get('/api/spotify/track', {
    params: {
      id: spotifyId
    }
  });
}

// Route for specific spotify album info. Requires knowing the spotify id of the album. 
// Example: fetchAlbum('1V6a99EbTTIegOhWoPxYI9')
export const fetchAlbum = (spotifyId) => {
  return axios.get('/api/spotify/album', {
    params: {
      id: spotifyId
    }
  });
}

// Route for specific spotify artist info. Requires knowing the spotify id of the artist. 
// Example: fetchArtist('0LcJLqbBmaGUft1e9Mm8HV')
export const fetchArtist = (spotifyId) => {
  return axios.get('/api/spotify/artist', {
    params: {
      id: spotifyId
    }
  });
}

export const fetchGenres = () => {
  return axios.get('/api/spotify/genres');
}

// Search route for spotify data. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
// Expecting a comma separated list of param values for seed artist, genres, and tracks, so may need to array.join.(", ") if value is stored in an array
// Expects request params to look like: {
//   seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
//   seed_genres: 'classical,country',
//   seed_tracks: '0c6xIDDpzE81m2q797ordA'
// }
export const fetchRecommendations = (searchData) => {
  return axios.get('/api/spotify/recommendations', {
    params: searchData
  });
}

// Route for artist's top tracks. Requires knowing the spotify id of the artist. Expects request params to look like: {
  // id: '0LcJLqbBmaGUft1e9Mm8HV',  // artist id.
  // market: 'US'
// }
export const fetchArtistTopTracks = (searchData) => {
  return axios.get('/api/spotify/artist-top-tracks', {
    params: searchData
  });
}

// Route for artist's albums. Requires knowing the spotify id of the artist. Expects request params to look like: {
  // id: '0LcJLqbBmaGUft1e9Mm8HV',  // artist id.
// }
export const fetchArtistAlbums = (searchData) => {
  return axios.get('/api/spotify/artist-albums', {
    params: searchData
  });
}

// Route for albums's tracks. Requires knowing the spotify id of the album. Expects request params to look like: {
//   id: '1V6a99EbTTIegOhWoPxYI9',
// }
// Accepts optional params such as limit, market, offset, etc. 
// Look at spotify documentation to see available params
export const fetchAlbumsTracks = (searchData) => {
  return axios.get('/api/spotify/albums-tracks', {
    params: searchData
  });
}

// Route for new releases. No required request params. Optional params look like: {
//   country: 'US',  // country
//   limit: '5',
//   offet: '0'
// }
// Accepts optional params such as limit, market, offset, etc. 
// Look at spotify documentation to see available params
export const fetchNewReleases = (searchData) => {
  return axios.get('/api/spotify/new-releases', {
    params: searchData
  });
}
