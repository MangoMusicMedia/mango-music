# Welcome to Mango Music 🎶 

Mango Music is a social media platform in which users can build connections over what they love the most, music! Users can search for tracks, discover new tunes, listen to song previews, and most importantly, share their thoughts and start a discussion about a particular piece. Whether visitors prefer meeting new people by visiting the explore page or sharing the new indie band they just dicovered with their tight-knit circle, Mango Music has something for all music lovers alike. [Visit Mango Music](https://mango-music-fsp.herokuapp.com/#/welcome) today and see what all the hype is about.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Contributors](#contributors)
4. [Future Features](#future-features)

## Features
* Create new account creation and login
* Create, edit, or delete posts about songs and albums they would like to share
* Like or add comments to posts
* View feed of recently made posts
* View own posts on profile
* Utilize search bar to find new songs to share
* View profiles of and follow users
* Users can expect a responsive application that is intuitive to use and has a consistent look and feel

## Technologies
MangoMusic is primarily built with the MERN stack, a combination of following four technologies: MongoDB, Express, React, and Node.

Spotify API will be used to extract:
* Song details
* Artist name
* Album art and realease date
* Track samples

Genius API will be used to extract:
* Song description

Lyrics Ovh API will be used to extract:
* Song lyrics

## Featured Code

```  useEffect(() => {
fetchLyrics(props.artist, props.name).then(res => setSongLyrics(res.data.lyrics)).catch(err => setError('Sorry, lyrics are not yet available for this song.'))
}, []);
```

* In order to fetch lyrics for a specific song, we passed in the track artist and track name into a fetchLyrics action
* We utilized setState React hooks to save the fetched result
* If no results were found for the fetch, we setErrors state to a custom error message to indicate that the lyrics were not available

## Contributors
Thanks for the following people who have contributed to this project:
* [Abigail Hernandez](https://github.com/Shhmabbey)
* [Catherine Choi](https://catherinemchoi.com/)
* [Johnny Hoang](https://github.com/johnnyhoang510)
* [Maggie McDonald](https://maggie-mcdonald.com/) 

## Future Features
* View lyrics on post show page
* View chords on post show page
* Users wll soon have the ability to create, edit or delete 'playlists' on their personal profile to organize their music posts
* Private posts that can only been seen by the user
* Feed customization
* Upload profile image
