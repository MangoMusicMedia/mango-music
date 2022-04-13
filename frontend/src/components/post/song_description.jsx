import react from 'react';
import Spinner from '../misc/spinner';
import { searchGenius, fetchTrackDescription } from '../../util/genius_api_util';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

const Description = props => {
  let [songDesc, setSongDesc] = useState('');

  useEffect(() => {
    searchGenius(props.name).then(res => fetchTrackDescription(res.data)).then(res => setSongDesc(res.data.description));
  }, []);

  return songDesc ? (
    <div className='song-desc'>
      {songDesc === '?' ? (
        <p className='not-available'>Sorry, there is not yet a description available for this song.</p>
      ) : (
        <p>{songDesc}</p>
      )}
    </div>
  ) : (
    <Spinner/>
  );
}

export default connect(null, null)(Description);