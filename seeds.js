const { faker } = require('@faker-js/faker');
const seeder = require('mongoose-seed');
const bcrypt = require('bcryptjs');
const db = require("./config/keys").mongoURI;
const axios = require('axios');

const User = require('./models/User');
const Post = require('./models/Post');

seeder.connect(db, function() {
  seeder.loadModels(["./models/User.js"])
  seeder.clearModels(['User', 'Post'], function(err, done) {
    if (err) {
      return console.log("Error seeding")
    } else if (done) {
      return console.log("Done seeding")
    }

    axios.get('http://localhost:5000/api/spotify/new-releases', {
      country: 'US'
    })
    .then(res => {
      // Array of new release data (should be 20 items)
      console.log("successful fetch!")
      return res.data.albums.items
    }, err => {
      console.log("fail to fetch!")
      console.log(err)
    })
    .then( (newReleases) => {
      const fakePostData = []
      
      newReleases.forEach(item => {
        let newPost = {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          author: User.findOne({username: 'demouser'})._id,
          likes: null,
          comments: [],
          trackName: item.name,
          trackId: item.id,
          albumCoverURL: item.images[0].url
        }
  
        fakePostData.push(newPost)
      })
      return fakePostData
    })
    .then((fakePostData) => {
      const postData = {
        'model': 'Post',
        'documents': [
          ...fakePostData
        ]
      }
      const newData = data.concat(postData);

      seeder.populateModels(newData, function() {
        seeder.disconnect();
      });
    }, err => console.log(err))

  })
})


const fakeUserData = [];
for (let idx = 0; idx < 100; idx++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  let newUser = {
    'username': faker.internet.userName(firstName, lastName),
    'email': faker.internet.email(firstName, lastName),
    'password': 'password'
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
    })
  })

  fakeUserData.push(newUser)
}

let newDemoUser = {
  'username': 'demouser',
  'email': 'demouser@email.com',
  'password': 'password123'
}

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newDemoUser.password, salt, (err, hash) => {
    newDemoUser.password = hash;
  })
})

let newCatUser = {
  'username': 'catchoi',
  'email': 'catherine-test@gmail.com',
  'password': 'password'
}

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newCatUser.password, salt, (err, hash) => {
    newCatUser.password = hash;
  })
})

let newMaggieUser = {
  'username': 'kingbloopy',
  'email': 'maggie-test@gmail.com',
  'password': 'password'
}

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newMaggieUser.password, salt, (err, hash) => {
    newMaggieUser.password = hash;
  })
})

let newAbbeyUser = {
  'username': 'Shhmabbey',
  'email': 'abbey-test@gmail.com',
  'password': 'password'
}

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newAbbeyUser.password, salt, (err, hash) => {
    newAbbeyUser.password = hash;
  })
})

let newJohnnyUser = {
  'username': 'johnnyhoang510',
  'email': 'johnny-test@gmail.com',
  'password': 'password'
}

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newJohnnyUser.password, salt, (err, hash) => {
    newJohnnyUser.password = hash;
  })
})


const data = [
  {
      'model': 'User',
      'documents': [
          newDemoUser,
          newCatUser,
          newMaggieUser,
          newAbbeyUser,
          newJohnnyUser,
          ...fakeUserData
      ]
  }
];