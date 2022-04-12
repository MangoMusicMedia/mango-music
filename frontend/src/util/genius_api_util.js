import axios from "axios";

// Route for getting searching for song info. Requires knowing the genius song id of the track. 
// Example: searchGenius('Dancing Queen')
export const searchGenius = (searchQuery) => {
  return axios.get('/api/genius/search', {
    params: 
      {q: searchQuery
    }
  });
}

// Route for getting song description. Requires knowing the genius song id of the track. 
// Example: fetchTrack('395791')
export const fetchTrackDescription = (trackId) => {
  return axios.get(`/api/genius/songs/${trackId}`);
}