import axios from "axios";

// Route for getting song lyrics. Requires knowing the song name and artist.
// If the song is not popular, lyrics might not be found.
// Example for testing in window: 
// fetchLyrics("abba", "dancing queen").then(res => console.log(res.data.lyrics))
export const fetchLyrics = (artistName, songName) => {
  return axios.get(`/api/lyrics/${artistName}/${songName}`);
}