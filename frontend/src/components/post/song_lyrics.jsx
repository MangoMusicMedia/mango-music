import react from 'react';
import Spinner from '../misc/spinner';
import { fetchLyrics } from '../../util/lyrics_api_util';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

const Lyrics = props => {
  let [songLyrics, setSongLyrics] = useState('');

  useEffect(() => {
    fetchLyrics(props.artist, props.name).then(res => setSongLyrics(res.data.lyrics));
  }, []);

  return songLyrics ? (
    <div className='song-desc'>
      <h1>Lyrics</h1>
      {songLyrics === '?' ? (
        <p className='not-available'>Sorry, there is not yet lyrics available for this song.</p>
      ) : (
        <p>{songLyrics}</p>
      )}
    </div>
  ) : (
    null
    // <Spinner />
  );
}

export default connect(null, null)(Lyrics);