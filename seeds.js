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
    'password': 'password'
  }
  fakeUserData.push(new User(newUser))
}

let newDemoUser = {
  'username': 'demouser',
  'email': 'demouser@email.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq'
}

let newCatUser = {
  'username': 'catchoi',
  'email': 'catherine-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq'
}

let newMaggieUser = {
  'username': 'kingbloopy',
  'email': 'maggie-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq'
}

let newAbbeyUser = {
  'username': 'Shhmabbey',
  'email': 'abbey-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq'
}

let newJohnnyUser = {
  'username': 'johnnyhoang510',
  'email': 'johnny-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq'
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

const songIds = [
  "7qCZgvV98j6RjUULW1s1it", 
  "3UYFbRnkJlvm4POhrtsEL7", 
  "43NI5sAcvDLG7QQAmUc7UU", 
  "3i2pAVmEzBgJIHtIMkNQBJ", 
  "4c7k0jGOFR1OraHvE3BszV", 
  "04oQ19JkxyzzLglnqYsrlB", 
  "3kzOYFM5ZTj45uLhpSoINZ", 
  "29rx2LiCOpZ6PYFc8l4M3z", 
  "0ZfP7K8NoyJRjEfWWk8Mlv", 
  "1595LW73XBxkRk2ciQOHfr", 
  "5KUNwkaNf8l5A9sXZhiCgI", 
  "2P5yIMu2DNeMXTyOANKS6k", 
  "5AJrhrwz4oSZX2PwwV4qrN", 
  "2zQl59dZMzwhrmeSBEgiXY", 
  "2Nh2cMryoXl7BrZoIeN2Pr", 
  "5WNYg3usc6H8N3MBEp4zVk", 
  "1DrlLvlYd1FIjNavRm6NdX", 
  "1p6AQlMFpnH4hmhrSfoQ3k", 
  "5Go7a9wnApTQm2nYqKBdm0", 
  "0jWgAnTrNZmOGmqgvHhZEm", 
  "1Cv1YLb4q0RzL6pybtaMLo", 
  "4DAaQ5InUO23d8yNRbB0Yj", 
  "5bBUDJUfGcG7eFy3Bf4fXv", 
  "2H7PHVdQ3mXqEHXcvclTB0", 
  "6nozDLxeL0TE4MS9GqYU1v", 
  "0OMmiWMwsCNtpQ5aP6fdp9", 
  "4xlpJ99yL9xYQtzG6c3hwk", 
  "2wQVmS0j4xcSbEK8CLEgwz", 
  "1XQhZctQWzkznclbmbE7FQ", 
  "362zcsyXMLbL7PNLhOovvm", 
  "1jJci4qxiYcOHhQR247rEU", 
  "00WvmRXTkPBZNhhRK3xfdy", 
  "1eyek0KJEh2v5HQ9uQSybb", 
  "4fouWK6XVHhzl78KzQ1UjL", 
  "0rXtV4L8uQ7KHNxxKd2jGZ", 
  "72R0X0h8YaxYNpegeoOl0M", 
  "1yjY7rpaAQvKwpdUliHx0d", 
  "18HtrVceFUqG9aukMZN2et", 
  "5qfZRNjt2TkHEL12r3sDEU", 
  "53QF56cjZA9RTuuMZDrSA6", 
  "73q3FpQVXWk5eSUnyo83E4", 
  "6yIHGmQLJxWAUZ1ZkENemN", 
]


let postData = []
songIds.forEach(async (songId, idx) => {
  let newPost;
  await axios.get('http://localhost:5000/api/spotify/track', { params: { id: songId } })
  .then(res => {
    console.log("Fetch new releases!")
    const song = res.data
    // console.log(song)
    const randUser = usersData[Math.floor(Math.random() * usersData.length)];
    newPost = new Post({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      author: randUser._id,
      likes: [],
      comments: [],
      trackName: song.name,
      trackId: song.id,
      albumCoverURL: song.album.images[0].url,
      albumName: song.album.name,
      releaseDate: song.album.release_date,
    })
    // postData.push(newPost)
    return newPost
  }, err => console.log(err))
  .then( async (post) => {
    await post.save((err, result) => {
      if (idx === songIds.length - 1) {
        console.log("Posts seeded!");
        mongoose.disconnect();
      } 
    })
  })

})

  