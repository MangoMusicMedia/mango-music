const { faker } = require('@faker-js/faker');
const seeder = require('mongoose-seed');
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
    'password': 'password',
  }
  fakeUserData.push(newUser)
}

const data = [
  {
      'model': 'User',
      'documents': [
          {
            'username': 'demouser',
            'email': 'demouser@email.com',
            'password': 'password123'
          }
          ,{
              'username': 'catchoi',
              'email': 'catherine-test@gmail.com',
              'password': 'password',
          },
          {
              'username': 'kingbloopy',
              'email': 'maggie-test@gmail.com',
              'password': 'password',
          },
          {
              'username': 'Shhmabbey',
              'email': 'abbey-test@gmail.com',
              'password': 'password',
          },
          {
              'username': 'johnnyhoang510',
              'email': 'johnny-test@gmail.com',
              'password': 'password',
          },
          ...fakeUserData
      ]
  }
];