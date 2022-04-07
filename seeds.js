const { faker } = require('@faker-js/faker');
const seeder = require('mongoose-seed');
const bcrypt = require('bcryptjs');
const db = require("./config/keys").mongoURI;
const axios = require('axios');
const mongoose = require("mongoose");

const User = require('./models/User');
const Post = require('./models/Post');

mongoose
  .connect(db, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then((res) => {
    console.log("connected to db in development environment");
  });

User.remove({}, function(err) { 
  console.log('User collection removed') 
});

Post.remove({}, function(err) { 
  console.log('User collection removed') 
});

const fakeUserData = [];
for (let idx = 0; idx < 100; idx++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  let newUser = {
    'username': faker.internet.userName(firstName, lastName),
    'email': faker.internet.email(firstName, lastName),
    'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
    'followers': [],
    'posts': [],
    'likedPosts': [],
    'profilePhoto': faker.internet.avatar(),
  }
  fakeUserData.push(new User(newUser))
}

let newDemoUser = {
  'username': 'demouser',
  'email': 'demouser@email.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
}

let newCatUser = {
  'username': 'catchoi',
  'email': 'catherine-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
}

let newMaggieUser = {
  'username': 'kingbloopy',
  'email': 'maggie-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
}

let newAbbeyUser = {
  'username': 'Shhmabbey',
  'email': 'abbey-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
}

let newJohnnyUser = {
  'username': 'johnnyhoang510',
  'email': 'johnny-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
}

let usersData = [
  new User(newDemoUser),
  new User(newCatUser),
  new User(newMaggieUser),
  new User(newAbbeyUser),
  new User(newJohnnyUser),
  ...fakeUserData
]

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash("password123", salt, (err, hash) => {
    console.log(hash);
  })
})

usersData.map(async (user, index) => {
  await user.save((err, result) => {
    if (index === usersData.length - 1) {
      console.log("Users seeded!");
    }
  });
})

const spotifySongs = [
  {
    trackName: "Boredom (feat. Rex Orange County & Anna of the North)", 
    trackId: "5WNYg3usc6H8N3MBEp4zVk", 
    albumName: "Flower Boy", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", 
    releaseDate: "2017-07-21", 
    }, {
    trackName: "Modern Loneliness", 
    trackId: "1eyek0KJEh2v5HQ9uQSybb", 
    albumName: "~how i'm feeling~", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27336b12a4082f11d16a519b964", 
    releaseDate: "2020-03-06", 
    }, {
    trackName: "6's to 9's (feat. Rationale)", 
    trackId: "4DAaQ5InUO23d8yNRbB0Yj", 
    albumName: "Superdream", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273da45750734ba67831abf4f76", 
    releaseDate: "2019-02-01", 
    }, {
    trackName: "Time of the Season - Mono Version", 
    trackId: "5AJrhrwz4oSZX2PwwV4qrN", 
    albumName: "Odessey and Oracle", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2736de69821e8460a9d689e20ba", 
    releaseDate: "1968-04-19", 
    }, {
    trackName: "Dapper (feat. Anderson .Paak)", 
    trackId: "2Nh2cMryoXl7BrZoIeN2Pr", 
    albumName: "Genesis", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273085d6629aaaf7baa283d5c7d", 
    releaseDate: "2016-03-25", 
    }, {
    trackName: "Daydream / Wetdream / Nightmare", 
    trackId: "3UYFbRnkJlvm4POhrtsEL7", 
    albumName: "Voyeur", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273e94bcdf1c7b684417d75db68", 
    releaseDate: "2012-07-10", 
    }, {
    trackName: "Moby Octopad", 
    trackId: "29rx2LiCOpZ6PYFc8l4M3z", 
    albumName: "I Can Hear The Heart Beating As One", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273af3486eb00344584683f0123", 
    releaseDate: "1997-04-22", 
    }, {
    trackName: "Kids", 
    trackId: "1jJci4qxiYcOHhQR247rEU", 
    albumName: "Oracular Spectacular", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738b32b139981e79f2ebe005eb", 
    releaseDate: "2007-12-14", 
    }, {
    trackName: "Watermelon Man", 
    trackId: "2zQl59dZMzwhrmeSBEgiXY", 
    albumName: "Head Hunters", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2736b75d57d2d070c0c4afb3f9a", 
    releaseDate: "1973-10-26", 
    }, {
    trackName: "Computer Love", 
    trackId: "362zcsyXMLbL7PNLhOovvm", 
    albumName: "The New Zapp IV U", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2733c344708fbfd3541296bdda9", 
    releaseDate: "1985-01-01", 
    }, {
    trackName: "As Long as You Love Me", 
    trackId: "00WvmRXTkPBZNhhRK3xfdy", 
    albumName: "Backstreet Boys", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273dafd4b9261a1ab9acd53a53d", 
    releaseDate: "1996", 
    }, {
    trackName: "My Old Man", 
    trackId: "4c7k0jGOFR1OraHvE3BszV", 
    albumName: "This Old Dog", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27398526846ff341ae71e5c3818", 
    releaseDate: "2017-05-05", 
    }, {
    trackName: "Can't Help Falling in Love", 
    trackId: "6yIHGmQLJxWAUZ1ZkENemN", 
    albumName: "Better", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27382ad647e950d61f30d02ff16", 
    releaseDate: "2016-04-29", 
    }, {
    trackName: "Think About You", 
    trackId: "0rXtV4L8uQ7KHNxxKd2jGZ", 
    albumName: "Think About You", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2731ccc8cbc13eb6446f12b0226", 
    releaseDate: "2021-09-22", 
    }, {
    trackName: "Raspberry Jam", 
    trackId: "3i2pAVmEzBgJIHtIMkNQBJ", 
    albumName: "Raspberry Jam", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273c453d9c88f94025874164947", 
    releaseDate: "2019-04-24", 
    }, {
    trackName: "A-Punk", 
    trackId: "1595LW73XBxkRk2ciQOHfr", 
    albumName: "Vampire Weekend", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2739cca0d695187fbeed4ee301b", 
    releaseDate: "2008-01-29", 
    }, {
    trackName: "Everglow", 
    trackId: "5qfZRNjt2TkHEL12r3sDEU", 
    albumName: "A Head Full of Dreams", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6", 
    releaseDate: "2015-12-04", 
    }, {
    trackName: "Friends", 
    trackId: "43NI5sAcvDLG7QQAmUc7UU", 
    albumName: "Minds Of Our Own", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2737bd9fc011be3966c96e28360", 
    releaseDate: "2015-02-07", 
    }, {
    trackName: "Luv(sic.) pt3 (feat. Shing02)", 
    trackId: "4xlpJ99yL9xYQtzG6c3hwk", 
    albumName: "Modal Soul", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273912cc8fe2e9a53d328757a41", 
    releaseDate: "2005-11-11", 
    }, {
    trackName: "Still into You", 
    trackId: "1yjY7rpaAQvKwpdUliHx0d", 
    albumName: "Paramore", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273e71a5005c37e8c2ffd9beda8", 
    releaseDate: "2013-04-05", 
    }, {
    trackName: "I Won't Give Up", 
    trackId: "53QF56cjZA9RTuuMZDrSA6", 
    albumName: "Love Is a Four Letter Word (Deluxe Edition)", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27346e379c721504777a62bd9b8", 
    releaseDate: "2012-04-13", 
    }, {
    trackName: "Rock and Roll - Full Length Version; 2015 Remaster", 
    trackId: "0ZfP7K8NoyJRjEfWWk8Mlv", 
    albumName: "Loaded (2015 Remaster)", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27346ed71f4f0ab02c72179b15d", 
    releaseDate: "1970", 
    }, {
    trackName: "Nobody", 
    trackId: "2P5yIMu2DNeMXTyOANKS6k", 
    albumName: "Be the Cowboy", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273c428f67b4a9b7e1114dfc117", 
    releaseDate: "2018-08-17", 
    }, {
    trackName: "Inside Out", 
    trackId: "7qCZgvV98j6RjUULW1s1it", 
    albumName: "They Want My Soul", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2739288bc6a8c1f2fca8b5eddf9", 
    releaseDate: "2014-08-05", 
    }, {
    trackName: "untitled 08 | 09.06.2014.", 
    trackId: "5bBUDJUfGcG7eFy3Bf4fXv", 
    albumName: "untitled unmastered.", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738c697f553a46006a5d8886b2", 
    releaseDate: "2016-03-04", 
    }, {
    trackName: "Born Sinner (feat. James Fauntleroy)", 
    trackId: "2wQVmS0j4xcSbEK8CLEgwz", 
    albumName: "Born Sinner", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2735bed713e0774ad8bf8d0fbab", 
    releaseDate: "2013-06-14", 
    }, {
    trackName: "Live And Let Die - Main Title", 
    trackId: "5Go7a9wnApTQm2nYqKBdm0", 
    albumName: "All The Best", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273a866f3dcb0b55e0f6eee30ac", 
    releaseDate: "1987-11-02", 
    }, {
    trackName: "Back Pocket", 
    trackId: "1DrlLvlYd1FIjNavRm6NdX", 
    albumName: "Thrill of the Arts", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2739ac61b549ad39e5af30e340e", 
    releaseDate: "2015-10-09", 
    }, {
    trackName: "1999", 
    trackId: "2H7PHVdQ3mXqEHXcvclTB0", 
    albumName: "1999", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2734117e531f63855d072059d6e", 
    releaseDate: "1982-10-27", 
    }, {
    trackName: "Everything I Am", 
    trackId: "1XQhZctQWzkznclbmbE7FQ", 
    albumName: "Graduation", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273675561f3defd1d5a551936a8", 
    releaseDate: "2007-09-11", 
    }, {
    trackName: "I Knew I Loved You", 
    trackId: "6nozDLxeL0TE4MS9GqYU1v", 
    albumName: "Affirmation", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2735f2acb28c792e4594c0f11e8", 
    releaseDate: "1999-11-09", 
    }, {
    trackName: "What's Up?", 
    trackId: "0jWgAnTrNZmOGmqgvHhZEm", 
    albumName: "Bigger, Better, Faster, More !", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273381371cb8ce680d0dc324600", 
    releaseDate: "1992-01-01", 
    }, {
    trackName: "Awaken (Feel Alive)", 
    trackId: "1p6AQlMFpnH4hmhrSfoQ3k", 
    albumName: "Awaken (Feel Alive)", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273df4a0770f82cd7ce25335a00", 
    releaseDate: "2021-10-15", 
    }, {
    trackName: "Black Lipstick", 
    trackId: "3kzOYFM5ZTj45uLhpSoINZ", 
    albumName: "Black Lipstick", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273a1c81067854391cf1e010f32", 
    releaseDate: "2019-06-21", 
    }, {
    trackName: "Sunday Best", 
    trackId: "1Cv1YLb4q0RzL6pybtaMLo", 
    albumName: "Where the Light Is", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2733667dc27da7b24360d6050d0", 
    releaseDate: "2019-01-06", 
    }, {
    trackName: "Miss June '75", 
    trackId: "04oQ19JkxyzzLglnqYsrlB", 
    albumName: "Their Satanic Majesties' Second Request", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2732557f5ed1ca07d5111d49b93", 
    releaseDate: "2008-06-09", 
    }, {
    trackName: "These Are The Times", 
    trackId: "0OMmiWMwsCNtpQ5aP6fdp9", 
    albumName: "Enter The Dru", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273677c540448268b663711ca81", 
    releaseDate: "1998-01-01", 
    }, {
    trackName: "Dear Maria, Count Me In", 
    trackId: "18HtrVceFUqG9aukMZN2et", 
    albumName: "So Wrong, It's Right", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273344cef0b781c861bbc33a5d5", 
    releaseDate: "2007-09-25", 
    }, {
    trackName: "abcdefu", 
    trackId: "4fouWK6XVHhzl78KzQ1UjL", 
    albumName: "abcdefu", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2732842f743ebd32235bceb43d3", 
    releaseDate: "2021-08-13", 
    }, {
    trackName: "Rapp Snitch Knishes feat. Mr. Fantastik", 
    trackId: "5KUNwkaNf8l5A9sXZhiCgI", 
    albumName: "MM...FOOD", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27352f194d02c39909d1b284799", 
    releaseDate: "2004-11-16", 
    }, {
    trackName: "Tearin' up My Heart - Radio Edit", 
    trackId: "73q3FpQVXWk5eSUnyo83E4", 
    albumName: "N Sync UK Version", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273186b235052f031900c5cb282", 
    releaseDate: "1997", 
    }, {
    trackName: "Kiss Me Slowly", 
    trackId: "72R0X0h8YaxYNpegeoOl0M", 
    albumName: "The Way It Was", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27397cf472669557a23431a9488", 
    releaseDate: "2011-01-01", 
    }
]

spotifySongs.forEach(async (song, idx) => {
  // console.log(song)
  const randUser = usersData[Math.floor(Math.random() * usersData.length)];
  newPost = new Post({
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    author: randUser._id,
    likes: [],
    comments: [],
    ...song,
  })

  const numComments = Math.floor(Math.random()*5) + 2
  for (let index = 0; index < numComments; index++) {
    const randCommenter = usersData[Math.floor(Math.random() * usersData.length)];
    newPost.comments.push({
      message: faker.lorem.sentence(),
      author: randCommenter._id
    });
  }
  
  await newPost.save((err, result) => {
    // if (idx === spotifySongs.length - 1) {
    //   console.log("Posts seeded!");
    //   mongoose.disconnect();
    // } 
  })
})


  

// const songIds = [
//   "7qCZgvV98j6RjUULW1s1it", 
//   "3UYFbRnkJlvm4POhrtsEL7", 
//   "43NI5sAcvDLG7QQAmUc7UU", 
//   "3i2pAVmEzBgJIHtIMkNQBJ", 
//   "4c7k0jGOFR1OraHvE3BszV", 
//   "04oQ19JkxyzzLglnqYsrlB", 
//   "3kzOYFM5ZTj45uLhpSoINZ", 
//   "29rx2LiCOpZ6PYFc8l4M3z", 
//   "0ZfP7K8NoyJRjEfWWk8Mlv", 
//   "1595LW73XBxkRk2ciQOHfr", 
//   "5KUNwkaNf8l5A9sXZhiCgI", 
//   "2P5yIMu2DNeMXTyOANKS6k", 
//   "5AJrhrwz4oSZX2PwwV4qrN", 
//   "2zQl59dZMzwhrmeSBEgiXY", 
//   "2Nh2cMryoXl7BrZoIeN2Pr", 
//   "5WNYg3usc6H8N3MBEp4zVk", 
//   "1DrlLvlYd1FIjNavRm6NdX", 
//   "1p6AQlMFpnH4hmhrSfoQ3k", 
//   "5Go7a9wnApTQm2nYqKBdm0", 
//   "0jWgAnTrNZmOGmqgvHhZEm", 
//   "1Cv1YLb4q0RzL6pybtaMLo", 
//   "4DAaQ5InUO23d8yNRbB0Yj", 
//   "5bBUDJUfGcG7eFy3Bf4fXv", 
//   "2H7PHVdQ3mXqEHXcvclTB0", 
//   "6nozDLxeL0TE4MS9GqYU1v", 
//   "0OMmiWMwsCNtpQ5aP6fdp9", 
//   "4xlpJ99yL9xYQtzG6c3hwk", 
//   "2wQVmS0j4xcSbEK8CLEgwz", 
//   "1XQhZctQWzkznclbmbE7FQ", 
//   "362zcsyXMLbL7PNLhOovvm", 
//   "1jJci4qxiYcOHhQR247rEU", 
//   "00WvmRXTkPBZNhhRK3xfdy", 
//   "1eyek0KJEh2v5HQ9uQSybb", 
//   "4fouWK6XVHhzl78KzQ1UjL", 
//   "0rXtV4L8uQ7KHNxxKd2jGZ", 
//   "72R0X0h8YaxYNpegeoOl0M", 
//   "1yjY7rpaAQvKwpdUliHx0d", 
//   "18HtrVceFUqG9aukMZN2et", 
//   "5qfZRNjt2TkHEL12r3sDEU", 
//   "53QF56cjZA9RTuuMZDrSA6", 
//   "73q3FpQVXWk5eSUnyo83E4", 
//   "6yIHGmQLJxWAUZ1ZkENemN", 
// ]


// let postData = []
// songIds.forEach(async (songId, idx) => {
//   let newPost;
//   await axios.get('http://localhost:5000/api/spotify/track', { params: { id: songId } })
//   .then(res => {
//     console.log("Fetch new releases!")
//     const song = res.data
//     // console.log(song)
//     const randUser = usersData[Math.floor(Math.random() * usersData.length)];
//     newPost = new Post({
//       title: faker.lorem.sentence(),
//       description: faker.lorem.paragraph(),
//       author: randUser._id,
//       likes: [],
//       comments: [],
//       trackName: song.name,
//       trackId: song.id,
//       albumCoverURL: song.album.images[0].url,
//       albumName: song.album.name,
//       releaseDate: song.album.release_date,
//     })
//     // postData.push(newPost)
//     const numComments = Math.floor(Math.random()*5) + 2
//     for (let index = 0; index < numComments; index++) {
//       const randCommenter = usersData[Math.floor(Math.random() * usersData.length)];
//       newPost.comments.push({
//         message: faker.lorem.sentence(),
//         author: randCommenter._id
//       });
//     }
    
//     return newPost
//   }, err => console.log(err))
//   .then( async (post) => {
//     await post.save((err, result) => {
//       if (idx === songIds.length - 1) {
//         console.log("Posts seeded!");
//         mongoose.disconnect();
//       } 
//     })
//   })

// })

  