import {  React, useState } from 'react';

const SearchBar = (props) => {

  const [searchString, setSearch] = useState("");
  const [songList, setSongList] = useState([]);
  const [searching, setSearching] = useState(false);

  const onKeyDown = (e) => {
    if (searchString != "" && e.keyCode === 13) {
      if (!searching) {
        setSearching(true);
        props.search({ q: searchString, type: "track", limit: 5 })
          .then(res => setSongList(res.data.tracks.items))
          .catch(err => setSongList([]))
      } else {
        setSearching(false);
        setSongList([]);
      }
    }
  }

  const displayResults = 
    <div className="search_drop-down-container">
      {/* <div className="search-modal-background" onClick={() => {
        setSearching(false)
        setSearch("")
      }}></div> */}

      <div className="search_drop-down">
        {
          songList?.map( song => (
            <div className="song_card" key={song.id}>
              <button className="song_card__details" key={song.id} onClick={() => {
                setSearching(false)
                setSearch("")
                props.openModal({
                  type: "addPost",
                  payload: {
                    trackName: song.name,
                    trackId: song.id,
                    artistName: song.artists[0].name,
                    albumId: song.album.id,
                    albumName: song.album.name,
                    albumCoverURL: song.album.images[0].url,
                    artistName: song.artists[0].name,
                    releaseDate: song.album.release_date
                  }
                })
              }
            }>
                <div className="song_card__left">
                  <img src={song.album.images[song.album.images.length - 1].url} alt="Album art" />
                </div>
                <div className="song_card__row" >
                  <div className="song_card__right">
                    <p className="song_card__right__title" >{song.name}</p>
                    <p>{song.artists[0].name}</p>
                    <p>{song.album.release_date}</p>
                  </div>
                  <div className="song_card__add-post" onClick={() => {
                    setSearching(false)
                    setSearch("")
                    props.openModal({ 
                      type: "addPost", 
                      payload: {
                        trackName: song.name,
                        trackId: song.id,
                        albumId: song.album.id,
                        albumName: song.album.name,
                        albumCoverURL: song.album.images[0].url,
                        artistName: song.artists[0].name,
                        releaseDate: song.album.release_date
                      }
                    })
                  }
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                  </div>
                </div>
              </button>
            </div>

          ))
        }
      </div>
    </div>


  return (
    <div className="header__outter-wrapper-container" >
    <div className="header__outter-wrapper" >
      {searching && <div className="search-modal-background" onClick={(e) => {
        setSearching(false)
        setSearch("")
      }}></div>}
      <div className="header__search-wrapper">

        <input
          onKeyDown={onKeyDown}
          className="header__search-input"
          placeholder="Search for a track to make a post . . ."
          onChange={ e => {
            setSearch(e.target.value);
          }}
          value={searchString}
        ></input>
        <div onClick={ e => {
          if (!searching) {
            setSearching(true);
            props.search({ q: searchString, type: "track", limit: 5 })
              .then(res => setSongList(res.data.tracks.items))
              .catch(err => setSongList([]))
          } else {
            setSearching(false);
            setSongList([]);
          }
        }}>
          <svg className="search-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
          </svg>
        </div>
      </div>
      {searching &&  displayResults }
    </div>
    </div>
  );
}

export default SearchBar;

