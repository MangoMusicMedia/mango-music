# Document Design
## users
### document sample
```
{
    _id: ObjectId("5d8d5b50a5b9d4a3c402f571"),
    username: "someUsername",
    email: "user@email.com",
    password_digest: "Ke&63h1z$mK9jd37n",
    posts: [
        ObjectId("4a1h3m42a5b9d4i9dc405l721"),
        ObjectId("b9x2m45a5b7h7e3ml403a091"),
        ObjectId("1k3b5f87x5s6c7i2mp814g524")
    ],
    followers: [
        ObjectId("4a23hm42a5b9d4i9dc405l721"),
        ObjectId("b923h45a5b7h7e3ml403a091"),
        ObjectId("1k23hf87x5s6c7i2mp814g524")
    ],
    playlists: [
        ObjectId("4lgmhm42a5b9d4i9dc405l721"),
        ObjectId("blgmh45a5b7h7e3ml403a091"),
        ObjectId("1lgmhf87x5s6c7i2mp814g524")
    ],
    likedPosts: [
        ObjectId("4a1h3m42a5b9d4i9dc405l721")
    ]
}
```

## posts
### document sample (Embedded)
```
{
    _id: ObjectId("4a1h3m42a5b9d4i9dc405l721"),
    title: "somepostname",
    description: "post@email.com",
    author: ObjectId("5d8d5b50a5b9d4a3c402f571"),
    likes: 100,
    comments: [
        {
            author: "anotherUser",
			message: "Great choice!",
			dateCreated: new Date(2022,04,04,10,00)
        }
    ],
    track: {
        "album": {
            "album_type": "single",
            "artists": [
            {
                "external_urls": {
                "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
                },
                "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
                "id": "6sFIWsNpZYqfjUpaCgueju",
                "name": "Carly Rae Jepsen",
                "type": "artist",
                "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
            }
            ],
            "external_urls": {
            "spotify": "https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc"
            },
            "href": "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
            "id": "0tGPJ0bkWOUmH7MEOR77qc",
            "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027359994525d219f64872d3b1",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517359994525d219f64872d3b1",
                "width": 64
            }
            ],
            "name": "Cut To The Feeling",
            "release_date": "2017-05-26",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:0tGPJ0bkWOUmH7MEOR77qc"
        },
        "artists": [
            {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
            },
            "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
            "id": "6sFIWsNpZYqfjUpaCgueju",
            "name": "Carly Rae Jepsen",
            "type": "artist",
            "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
            }
        ],
        "disc_number": 1,
        "duration_ms": 207959,
        "explicit": false,
        "external_ids": {
            "isrc": "USUM71703861"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/6EJiVf7U0p1BBfs0qqeb1f"
        },
        "href": "https://api.spotify.com/v1/tracks/6EJiVf7U0p1BBfs0qqeb1f",
        "id": "6EJiVf7U0p1BBfs0qqeb1f",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
            "external_urls": {
            "spotify": "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl"
            },
            "href": "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
            "id": "11dFghVXANMlKmJXsNCbNl",
            "type": "track",
            "uri": "spotify:track:11dFghVXANMlKmJXsNCbNl"
        },
        "name": "Cut To The Feeling",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/4e69d142cceaca1fa4bc8db7a319ab7a0b8ffd82?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6EJiVf7U0p1BBfs0qqeb1f"
    },
    album: {
        "album_type": "album",
        "artists": [
            {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
            },
            "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            "id": "0TnOYISbd1XYRBk9myaseg",
            "name": "Pitbull",
            "type": "artist",
            "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
            }
        ],
        "copyrights": [
            {
            "text": "(P) 2012 RCA Records, a division of Sony Music Entertainment",
            "type": "P"
            }
        ],
        "external_ids": {
            "upc": "886443671584"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/album/4aawyAB9vmqN3uQ7FjRGTy"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
        "id": "4aawyAB9vmqN3uQ7FjRGTy",
        "images": [
            {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732c5b24ecfa39523a75c993c4",
            "width": 640
            },
            {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022c5b24ecfa39523a75c993c4",
            "width": 300
            },
            {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512c5b24ecfa39523a75c993c4",
            "width": 64
            }
        ],
        "label": "Mr.305/Polo Grounds Music/RCA Records",
        "name": "Global Warming",
        "popularity": 61,
        "release_date": "2012-11-16",
        "release_date_precision": "day",
        "total_tracks": 18,
        "tracks": {
            "href": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=0&limit=50&market=ES&locale=en-US,en;q=0.9",
            "items": [
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7iJrDbKM5fEkGdm5kpjFzS"
                    },
                    "href": "https://api.spotify.com/v1/artists/7iJrDbKM5fEkGdm5kpjFzS",
                    "id": "7iJrDbKM5fEkGdm5kpjFzS",
                    "name": "Sensato",
                    "type": "artist",
                    "uri": "spotify:artist:7iJrDbKM5fEkGdm5kpjFzS"
                }
                ],
                "disc_number": 1,
                "duration_ms": 85400,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/6OmhkSOpvYBokMKQxpIGx2"
                },
                "href": "https://api.spotify.com/v1/tracks/6OmhkSOpvYBokMKQxpIGx2",
                "id": "6OmhkSOpvYBokMKQxpIGx2",
                "is_local": false,
                "is_playable": true,
                "name": "Global Warming (feat. Sensato)",
                "preview_url": "https://p.scdn.co/mp3-preview/4df38b27b145e6e2d180a0790e991af3eef99d86?cid=7ec8a6c9e2d345a1beb572eefa1f90f5",
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:6OmhkSOpvYBokMKQxpIGx2"
            }
        }
    }
}
```

## comments
### document sample
```
{
    _id: ObjectId("5349b4ddd2781d08c09890f3"),
    post: ObjectId("5d8d5b50a5b9d4a3c40h2571"),
    author: ObjectId("5d8d5b50a5b9d4a3c402f571"),
    message: "Great choice!",
    dateCreated: new Date(2022,04,04,10,00)
}
```

## Post Likes
### document sample
```
{
    _id: ObjectId("5349b4ddd2781d08c09890f3"),
    post: ObjectId("5d8d5b50a5b9d4a3c40h2571"),
    user: ObjectId("5d8d5b50a5b9d4a3c402f571")
}
```



# Approach to Database Modeling
## Normalized 
* Reduces data redundancy and inconsistency
* Maintains data integrity
Uses: fast insertion, deletion and update anomalies, data consistency

## Embedded / Denormalized
* Faster retrieval
* Space inefficient
* More prone to errors 
Uses: fast lookup time, optimization of read performance


