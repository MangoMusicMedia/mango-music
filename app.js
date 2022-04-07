const express = require("express");
const app = express();
// HEROKU
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
// 
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const likes = require("./routes/api/likes");
const spotify = require("./routes/api/spotify");
const bodyParser = require('body-parser');
const passport = require('passport');
const {User} = require('./models/User');
const {Post} = require("./models/Post");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Success! Connected to MongoDB"))
  .catch( (err) => console.log(err));

// for testing postman
app.use(bodyParser.urlencoded({
  extended: false
}));

// test
app.get("/", (req, res) => {
  res.send("test");
});

app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);


// used to test creating a user
// app.get("/", (req, res) => {
//     const user = new User({
//         username: 'demouser',
//         email: 'demouser@email.com',
//         password: 'password123'
//     })
//     user.save();
//     res.send("Yo World");
// })


// testing a saved post
// app.use("/", (req, res) => {
//   const post = new Post({
//       title: "title2",
//       description: "whats crackin",
//       author: "624b8033f27d5b830677d318",
//       comments: [
//         {
//           message: "sick comment",
//           author: "624c8705af2bd29a61cf2fb7"
//         },
//         {
//           message: "hello",
//           author: "624c8705af2bd29a61cf2fb7"
//         }
//       ]
//   })

//   post.save()
//     .then(post => res.json(post))
//     .catch(err => res.status(400).json({ msg: "error" }))
// });

app.use("/api/users", users );
app.use("/api/spotify", spotify );
app.use("/api/posts", posts);
app.use("/api/likes", likes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

