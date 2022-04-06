const { faker } = require('@faker-js/faker');
const seeder = require('mongoose-seed');
const bcrypt = require('bcryptjs');
const db = require("./config/keys").mongoURI;

const User = require('./models/User');

seeder.connect(db, function() {
  seeder.loadModels(["./models/User.js"])
  seeder.clearModels(['User'], function(err, done) {
    if (err) {
      return console.log("Error seeding")
    } else if (done) {
      return console.log("Done seeding")
    }
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
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