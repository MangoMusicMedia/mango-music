import react from 'react';
import Spinner from '../misc/spinner';
import { fetchLyrics } from '../../util/lyrics_api_util';
import { fetchTrack } from '../../util/spotify_api_util';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

const Lyrics = props => {
  let [songLyrics, setSongLyrics] = useState('');
  let [error, setError] = useState('');

  useEffect(() => {
    fetchLyrics(props.artist, props.name).then(res => setSongLyrics(res.data.lyrics));
    fetchTrack(props.id).then(res => fetchLyrics(res.data.artists[0].name, props.name).then(res => setSongLyrics(res.data.lyrics)).catch(err => setSongLyrics('Sorry, there is not yet lyrics available for this song.')));
  }, []);

  if (songLyrics){
    return (
      <div className='song-desc song-lyrics'>
        <h1>Lyrics</h1>
        {songLyrics === '?' ? (
          <p className='not-available'>Sorry, there is not yet lyrics available for this song.</p>
          ) : (
            <p className='song-lyrics__lyrics'>{songLyrics}</p>
            )}
      </div>
    ) 
  } else if (error) {
    return (
      <p className='not-available'>{error}</p>
    )
  } else {
    return (
      <Spinner />
    )
  }
}

export default connect(null, null)(Lyrics);