# Welcome to Mango Music 🎶 

Mango Music is a social media platform in which users can build connections over what they love the most, music! Users can search for tracks, discover new tunes, listen to song previews, and most importantly, share their thoughts and start a discussion about a particular piece. Whether visitors prefer meeting new people by visiting the explore page or sharing the new indie band they just dicovered with their tight-knit circle, Mango Music has something for all music lovers alike. [Visit Mango Music](https://mango-music-fsp.herokuapp.com/#/welcome) today and see what all the hype is about.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Featured Code](#featured-code)
4. [Contributors](#contributors)
5. [Future Features](#future-features)

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
Spotify Web API Routes
``` js
router.get("/search", (req, res) => {
    getAuth()
    .then(data => {
      const token = "Bearer " + data.access_token;
      let search_url = "https://api.spotify.com/v1/search?";
      
      let params = []
      for (let k in req.query) {
        params.push(`${k}=${req.query[k]}`)
      }
      search_url += params.join("&");
      
      const response = axios.get(search_url, {
        headers: { 
          'Authorization': token
        }
      })
      
      return response;
    })
    .then(payload => {
      return res.json(payload.data)
    }, err =>  res.status(400).json(err))
});
```
* To fetch data from the Spotify Web API, we first use `getAuth()` a function we defined to sent a `POST` request to the `/api/token` Spotify API endpoint, while including the Authorization and Content-Type in the headers of the request.
* After we get back the response with the access token, we chain another request to the `/v1/search` endpoint, including our specified search parameters such as song title.  
* Once we get back the response, we return it as a json object.

Lyric Fetching
```js
useEffect(() => {
  fetchLyrics(props.artist, props.name)
  .then(res => setSongLyrics(res.data.lyrics))
  .catch(err => setError('Sorry, lyrics are not yet available for this song.'))
}, []);
```

* In order to fetch lyrics for a specific song, we passed in the track artist and track name into a fetchLyrics action
* We utilized setState React hooks to save the fetched result
* If no results were found for the fetch, we setErrors state to a custom error message to indicate that the lyrics were not available

Intuitive Search Bar Design
```js
const SearchBar = (props) => {

  const [searchString, setSearch] = useState("");
  const [songList, setSongList] = useState([]);
  const [searching, setSearching] = useState(false);

  const onKeyDown = (e) => {
    if (searchString != "" && e.keyCode === 13) {
      if (searching) {
        setSearching(false);
        setSongList([]);
      } else {
        setSearching(true);
        props.search({ q: searchString, type: "track", limit: 5 })
          .then(res => setSongList(res.data.tracks.items))
          .catch(err => setSongList([]))
      }
    }
  }
  ...
 }
```
* Utilize return key to search
* Search by clicking on search icon
* Clear results by clicking away
* Click on listed song to create a post


Post Patch Route
```js
router.patch("/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(updatedPost => {
                User.findById(updatedPost.author).then( foundUser => {
                    let index;
                    foundUser.posts.forEach((post, idx) => {
                        if (post._id.toString() === updatedPost._id.toString()) {
                            index = idx
                        }
                    })
                    foundUser.posts[index] = updatedPost
                    foundUser.save().then(() => {
                        return res.json({user: foundUser, post: updatedPost})
                    })
                })
            })
            .catch(err => res.status(400).json({ nopostfound: "No post found by that ID" }))
    })
```
* To update a post, we first searched for the post by ID and then also the author that owned the post.
* To ensure the user's post gets saved to the database, we iterated through all of their posts and found the index
* We then updated the post by keying in to the user's posts array and finally called .save() on this user to save 
update our database


## Contributors
Thanks for the following people who have contributed to this project:
* [Abigail Hernandez](https://shhmabbey.com/)
* [Catherine Choi](https://catherinemchoi.com/)
* [Johnny Hoang](https://johnnyhoang510.github.io/portfolio-website/)
* [Maggie McDonald](https://maggie-mcdonald.com/) 

## Future Features
* View lyrics on post show page
* View chords on post show page
* Users wll soon have the ability to create, edit or delete 'playlists' on their personal profile to organize their music posts
* Private posts that can only been seen by the user
* Feed customization
* Upload profile image
