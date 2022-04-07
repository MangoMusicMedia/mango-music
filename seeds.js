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

let demoPassword = "password123";
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(demoPassword, salt, (err, hash) => {
    demoPassword = hash;
  })
})

let genericPassword = "password";
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(genericPassword, salt, (err, hash) => {
    genericPassword = hash;
  })
})

const demoUser = {
  'username': 'demouser',
  'email': 'demouser@email.com',
  'password': 'password123'
}

const newCatUser = {
  'username': 'catchoi',
  'email': 'catherine-test@gmail.com',
  'password': genericPassword
}

const newMaggieUser = {
  'username': 'kingbloopy',
  'email': 'maggie-test@gmail.com',
  'password': genericPassword
}

const newAbbeyUser = {
  'username': 'Shhmabbey',
  'email': 'abbey-test@gmail.com',
  'password': genericPassword
}

const newJohnnyUser = {
  'username': 'johnnyhoang510',
  'email': 'johnny-test@gmail.com',
  'password': genericPassword
}

const usersData = [   
  new User(demoUser),
  new User(newCatUser),
  new User(newMaggieUser),
  new User(newAbbeyUser),
  new User(newJohnnyUser),
]

for (let idx = 0; idx < 100; idx++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  let newUser = new User({
    'username': faker.internet.userName(firstName, lastName),
    'email': faker.internet.email(firstName, lastName),
    'password': genericPassword
  })

  usersData.push(newUser)
}

usersData.map(async (user, index) => {
  await user.save((err, result) => {
    if (index === usersData.length - 1) {
      console.log("Users seeded!");
    }
  });
})


axios.get('http://localhost:5000/api/spotify/new-releases', {country: 'US'})
  .then(res => {
    console.log("successful fetch!")
    return res.data.albums.items
  }, err => {
    console.log("fail to fetch!")
    console.log(err)
  })
  .then( (newReleases) => {
    const postData = []
    newReleases.forEach(item => {
      const randUser = usersData[Math.floor(Math.random() * usersData.length)];
      if (item.album_type === "single") {
        const newPost = new Post({
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          author: randUser._id,
          likes: [],
          comments: [],
          trackName: item.name,
          trackId: item.id,
          albumCoverURL: item.images[0].url,
          albumName: item.name,
          releaseDate: item.release_date,
        })
        postData.push(newPost)
      }
    })

    postData.map(async (post, index) => {
      await post.save((err, result) => {
        if (index === postData.length - 1) {
          console.log("Posts seeded!");
          mongoose.disconnect();
        }
      });
    })

    return postData
  })
  
