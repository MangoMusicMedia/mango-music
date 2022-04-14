const { faker } = require('@faker-js/faker');
const seeder = require('mongoose-seed');
const bcrypt = require('bcryptjs');
const db = require("./config/keys").mongoURI;
const axios = require('axios');
const mongoose = require("mongoose");


// const User = require('./models/User');
// const Post = require('./models/Post');
const Like = require('./models/Like')
const {User} = require('./models/User');
const {Post} = require('./models/Post');

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
  console.log('Post collection removed') 
});

Like.remove({}, function(err) { 
  console.log('Like collection removed') 
});

let profileBio = ["Music is life. That’s why our hearts have beats.",
  "It’s like if the music is loud enough I won’t be able to listen to my own thoughts.It’s like if the music is loud enough I won’t be able to listen to my own thoughts.",
  "Virtually every writer I know would rather be a musician.― Kurt Vonnegut",
  "When you’re happy, you enjoy the music… But, when you’re sad, you understand the lyrics.",
  "You have to take a deep breath. And allow the music to flow through you. Revel in it, allow yourself to awe. When you play, allow the music to break your heart with its beauty.― Kelly White",
  "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.― Plato",
  "Music is my divinity and the only love that has never left me.",
  "The time I feel most alive is when I listen to music.",
  "When I ask you to listen to a song, it’s because the lyrics mean everything I’m trying to say to you.",
  "I hate it when I have to Pause my Music every time someone talks to me.",
  "I just want someone who will take me to a concert instead of a fancy dinner.",
  "Music knows more about the kind of mood I’m in than I do.",
  "Why be moody when you can shake yo booty?",
  "I just want someone who will take me to a concert instead of a fancy dinner.",
  "Music unites the moral, emotional, and aesthetic spheres of man.",
  "Music is my best friend.",
  "People are like ‘Music’ some say the ‘Truth’ and rest, just noise."
]

const fakeUserData = [];
for (let idx = 0; idx < 8; idx++) {
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
    'profileBio': profileBio[idx],

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
  'profileBio': "Hello and welcome to Mango Music. We hope that you make yourself at home and take a look around. Get to know the developers by visiting our bios listed in the footer. Share your favorite song or leave a comment letting us know what you liked about Mango Music 🥭🎶",
}

let newCatUser = {
  'username': 'catchoi',
  'email': 'catherine-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
  'profileBio' : "",
}

let newMaggieUser = {
  'username': 'kingbloopy',
  'email': 'maggie-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
  'profileBio': "",
}

let newAbbeyUser = {
  'username': 'Shhmabbey',
  'email': 'abbey-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
  'profileBio': "",
}

let newJohnnyUser = {
  'username': 'johnnyhoang510',
  'email': 'johnny-test@gmail.com',
  'password': '$2a$10$aOMJ3eVpcopmn71gewSVte3h15VlB3nKk1fgEvHfjmjBe2dpZnnVq',
  'followers': [],
  'posts': [],
  'likedPosts': [],
  'profilePhoto': faker.internet.avatar(),
  'profileBio' : "",

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
  })
})

usersData.map(async (user, index) => {
  await user.save((err, result) => {
    if (index === usersData.length - 1) {
      console.log("Users seeded!");
    }
  });
})

// const spotifySongs = [
//     {
//     trackName: "Moby Octopad", 
//     trackId: "29rx2LiCOpZ6PYFc8l4M3z", 
//     albumName: "I Can Hear The Heart Beating As One", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273af3486eb00344584683f0123", 
//     releaseDate: "1997-04-22", 
//     }, {
//     trackName: "Computer Love", 
//     trackId: "362zcsyXMLbL7PNLhOovvm", 
//     albumName: "The New Zapp IV U", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2733c344708fbfd3541296bdda9", 
//     releaseDate: "1985-01-01", 
//     }, {
//     trackName: "As Long as You Love Me", 
//     trackId: "00WvmRXTkPBZNhhRK3xfdy", 
//     albumName: "Backstreet Boys", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273dafd4b9261a1ab9acd53a53d", 
//     releaseDate: "1996", 
//     }, {
//     trackName: "Can't Help Falling in Love", 
//     trackId: "6yIHGmQLJxWAUZ1ZkENemN", 
//     albumName: "Better", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27382ad647e950d61f30d02ff16", 
//     releaseDate: "2016-04-29", 
//     }, {
//     trackName: "Think About You", 
//     trackId: "0rXtV4L8uQ7KHNxxKd2jGZ", 
//     albumName: "Think About You", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2731ccc8cbc13eb6446f12b0226", 
//     releaseDate: "2021-09-22", 
//     }, {
//     trackName: "A-Punk", 
//     trackId: "1595LW73XBxkRk2ciQOHfr", 
//     albumName: "Vampire Weekend", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2739cca0d695187fbeed4ee301b", 
//     releaseDate: "2008-01-29", 
//     }, {
//     trackName: "Everglow", 
//     trackId: "5qfZRNjt2TkHEL12r3sDEU", 
//     albumName: "A Head Full of Dreams", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6", 
//     releaseDate: "2015-12-04", 
//     }, {
//     trackName: "Luv(sic.) pt3 (feat. Shing02)", 
//     trackId: "4xlpJ99yL9xYQtzG6c3hwk", 
//     albumName: "Modal Soul", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273912cc8fe2e9a53d328757a41", 
//     releaseDate: "2005-11-11", 
//     }, {
//     trackName: "I Won't Give Up", 
//     trackId: "53QF56cjZA9RTuuMZDrSA6", 
//     albumName: "Love Is a Four Letter Word (Deluxe Edition)", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27346e379c721504777a62bd9b8", 
//     releaseDate: "2012-04-13", 
//     }, {
//     trackName: "Inside Out", 
//     trackId: "7qCZgvV98j6RjUULW1s1it", 
//     albumName: "They Want My Soul", 
//     albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2739288bc6a8c1f2fca8b5eddf9", 
//     releaseDate: "2014-08-05", 
//     }, 
// ]

// spotifySongs.forEach(async (song, idx) => {
//   // console.log(song)
//   const randUser = usersData[Math.floor(Math.random() * usersData.length)];
//   newPost = new Post({
//     title: faker.lorem.sentence(),
//     description: faker.lorem.paragraph(),
//     author: randUser._id,
//     likes: [],
//     comments: [],
//     ...song,
//   })

//   const numComments = Math.floor(Math.random()*5) + 2
//   for (let index = 0; index < numComments; index++) {
//     const randCommenter = usersData[Math.floor(Math.random() * usersData.length)];
//     newPost.comments.push({
//       message: faker.lorem.sentence(),
//       author: randCommenter._id
//     });
//   }
  
//   await newPost.save((err, result) => {
//     // if (idx === spotifySongs.length - 1) {
//     //   console.log("Posts seeded!");
//     //   mongoose.disconnect();
//     // } 
//   })
// })

const randUser = () => usersData[Math.floor(Math.random() * usersData.length)];
const commentedSpotifySongs = [
  {
    trackName: "Awaken (Feel Alive)",
    trackId: "1p6AQlMFpnH4hmhrSfoQ3k",
    albumName: "Awaken (Feel Alive)",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273df4a0770f82cd7ce25335a00",
    releaseDate: "2021-10-15",
    title: faker.lorem.sentence(),
    description: "Loving every song on this album!! This has got to be a favorite though. Loving every vibe and lyric. Can't stop listening over and over again.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "6's to 9's (feat. Rationale)",
    trackId: "4DAaQ5InUO23d8yNRbB0Yj",
    albumName: "Superdream",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273da45750734ba67831abf4f76",
    releaseDate: "2019-02-01",
    title: faker.lorem.sentence(),
    description: "Can you even listen to this song and not smile?",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Friends", 
    trackId: "43NI5sAcvDLG7QQAmUc7UU", 
    albumName: "Minds Of Our Own", 
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2737bd9fc011be3966c96e28360", 
    releaseDate: "2015-02-07", 
    title: faker.lorem.sentence(),
    description: "This song is such a big inspiration to me, sometimes when I feel discouraged I listen to this song and it motivates me to continue creating better music and chasing my dreams.I hope one day my music will be recognised and successful as well, It would a dream come true. To everyone reading this, God bless you and your family.May you achieve what you aspire and may all your dreams come true as well.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Rock and Roll - Full Length Version; 2015 Remaster",
    trackId: "0ZfP7K8NoyJRjEfWWk8Mlv",
    albumName: "Loaded (2015 Remaster)",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27346ed71f4f0ab02c72179b15d",
    releaseDate: "1970",
    title: faker.lorem.sentence(),
    description: "Imagine that this song, THIS VERSION, was released in the spring of 1970. And became the super bad hit that it deserved to be. What would have happened then ?",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Modern Loneliness",
    trackId: "1eyek0KJEh2v5HQ9uQSybb",
    albumName: "~how i'm feeling~",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27336b12a4082f11d16a519b964",
    releaseDate: "2020-03-06",
    title: faker.lorem.sentence(),
    description: "People are relating to this song because of quarantine but this song represents me my whole life.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Tearin' up My Heart - Radio Edit",
    trackId: "73q3FpQVXWk5eSUnyo83E4",
    albumName: "N Sync UK Version",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273186b235052f031900c5cb282",
    releaseDate: "1997",
    title: faker.lorem.sentence(),
    description: "It’s the ‘90s. I’m sleeping over my friend’s house and we’re playing Goldeneye 007 on N64 and listening to NSYNC, Backstreet Boys and the Spice Girls. Life will never be this good again.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Daydream / Wetdream / Nightmare",
    trackId: "3UYFbRnkJlvm4POhrtsEL7",
    albumName: "Voyeur",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273e94bcdf1c7b684417d75db68",
    releaseDate: "2012-07-10",
    title: faker.lorem.sentence(),
    description: "Wetdreams is phenomenal. The whole thing is, really. Just now hearing this and cage the elephant's masterpiece, come a little closer...I'm dedicating my whole day to searching real music.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "My Old Man",
    trackId: "4c7k0jGOFR1OraHvE3BszV",
    albumName: "This Old Dog",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27398526846ff341ae71e5c3818",
    releaseDate: "2017-05-05",
    title: faker.lorem.sentence(),
    description: "Oh my god ! I love the studio version of this so much. 'My Old Man' i can't tell you how much this song travelled with me on many adventures & occasions. So glad to hear this different approach with a live. Music is what connects best, people with each other and with our souls, we CANT ever ever loose it.Legends < 3",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Miss June '75",
    trackId: "04oQ19JkxyzzLglnqYsrlB",
    albumName: "Their Satanic Majesties' Second Request",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2732557f5ed1ca07d5111d49b93",
    releaseDate: "2008-06-09",
    title: faker.lorem.sentence(),
    description: "In the span of 12 years this video has only gotten 400 thousand views. This band is so underrated, yet it's one the few bands that I can listen to all day everyday nonstop. Every single song has a different meaning to me and it's so fucking beautiful, sad and angering at the same time. These songs are so well put together and mysterious and they're fucking wonderful. Ok bye",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Black Lipstick",
    trackId: "3kzOYFM5ZTj45uLhpSoINZ",
    albumName: "Black Lipstick",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273a1c81067854391cf1e010f32",
    releaseDate: "2019-06-21",
    title: faker.lorem.sentence(),
    description: "I'm a metal head for life but when I hear this song it makes me want to dance like buffalo bill off of silence of the lamb, this song is intoxicating, first song ive heard from these guys two days ago.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Nobody",
    trackId: "2P5yIMu2DNeMXTyOANKS6k",
    albumName: "Be the Cowboy",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273c428f67b4a9b7e1114dfc117",
    releaseDate: "2018-08-17",
    title: faker.lorem.sentence(),
    description: "i'm pretty sure the videoclip is influenced by a book called 'The Yellow Wallpaper' by Charlotte Perkins Gilman. the book is a collection of journal entries by a woman who, as a form of treatment, is locked in a room and forbidden from working or writing or doing literally anything so she can recuperate from what her husband calls a 'temporary nervous depression'. because of this she starts to feel increasingly isolated, alone and trapped. the woman devotes many journal entries to describing the wallpaper in the room --yellow, as in the video--, and with no other stimulus other than that wallpaper, she begins to see a figure in the design and eventually comes to believe that another woman is creeping on all fours behind the pattern. believing she must free the woman in the wallpaper, the woman begins to strip the remaining paper off the wall.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Raspberry Jam",
    trackId: "3i2pAVmEzBgJIHtIMkNQBJ",
    albumName: "Raspberry Jam",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273c453d9c88f94025874164947",
    releaseDate: "2019-04-24",
    title: faker.lorem.sentence(),
    description: "I really like this music style. It makes me feel like I'm on a really positive fun adventure out in nature, with no need to return anytime soon, and care has been taken to prepare and pack everything you need.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "1999",
    trackId: "2H7PHVdQ3mXqEHXcvclTB0",
    albumName: "1999",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2734117e531f63855d072059d6e",
    releaseDate: "1982-10-27",
    title: faker.lorem.sentence(),
    description: "When Prince passed all the doves cried, the world stopped, a raspberry beret laid on a shelf, a red corvette zooms through town, then it rained that beautiful Purple. Rest Easy in that Purple Paradise Prince",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Boredom (feat. Rex Orange County & Anna of the North)",
    trackId: "5WNYg3usc6H8N3MBEp4zVk",
    albumName: "Flower Boy",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3",
    releaseDate: "2017-07-21",
    title: faker.lorem.sentence(),
    description: "This album makes me feel how special July 2017 was. Nostalgia on 10. Oh the times.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Dear Maria, Count Me In",
    trackId: "18HtrVceFUqG9aukMZN2et",
    albumName: "So Wrong, It's Right",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273344cef0b781c861bbc33a5d5",
    releaseDate: "2007-09-25",
    title: faker.lorem.sentence(),
    description: "In January, I became a Directioner. Now I am listening to this and hopefully get into their music. Also 5SOS. This is the first All Time Low song I have heard, and I love it!!!",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Sunday Best",
    trackId: "1Cv1YLb4q0RzL6pybtaMLo",
    albumName: "Where the Light Is",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2733667dc27da7b24360d6050d0",
    releaseDate: "2019-01-06",
    title: faker.lorem.sentence(),
    description: "Man, early 2020 Quarantine was such a vibe with this. It's already so nostalgic.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Time of the Season - Mono Version",
    trackId: "5AJrhrwz4oSZX2PwwV4qrN",
    albumName: "Odessey and Oracle",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2736de69821e8460a9d689e20ba",
    releaseDate: "1968-04-19",
    title: faker.lorem.sentence(),
    description: "We took a lot for granted in the '60s, except for that  war.  We all drove cool cars; listened to the best music in the world;  had groovy friends, and loved with great passion. Never know what you have until it's gone!  But the memories still remain.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "untitled 08 | 09.06.2014.",
    trackId: "5bBUDJUfGcG7eFy3Bf4fXv",
    albumName: "untitled unmastered.",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738c697f553a46006a5d8886b2",
    releaseDate: "2016-03-04",
    title: faker.lorem.sentence(),
    description: "For me this is the pinnacle of rap. The intensity, wordplay, meaning, synchronization with the instruments, the story behind the albuns, the album concepts, the message of revolution,  the hard work that Kendrick embodys in every single work he does is just unbelievable. Its a role model to rappers all over the world, and for people who are inspired by true talent and a hell of hard work behind such a performance. He is the king of rap. Compared to the majority of rappers today, its just impossible to compete with him.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Still into You",
    trackId: "1yjY7rpaAQvKwpdUliHx0d",
    albumName: "Paramore",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273e71a5005c37e8c2ffd9beda8",
    releaseDate: "2013-04-05",
    title: faker.lorem.sentence(),
    description: "I don’t know what it is about Hayley that makes me feel so happy and energetic but she always is just so pleasant to my eyes. Whenever I see her, it’s like as if my whole world lights up and it gives me a sense of relief or comfort. It’s like her presence non-verbally  telling me that the world is just such a beautiful place. She literally radiates optimism and colour. I absolutely love laying my eyes on her so much. This song is such a bop too!",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Kiss Me Slowly",
    trackId: "72R0X0h8YaxYNpegeoOl0M",
    albumName: "The Way It Was",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27397cf472669557a23431a9488",
    releaseDate: "2011-01-01",
    title: faker.lorem.sentence(),
    description: "I went backstage at a Secondhand Serenade concert at a music festival that Parachute was performing at a few years ago. My friend and I walked back totally intimidated and unsure of what we should even do, when suddenly this dark haired guy called us over to him, and asked us in a sincere and excited voice how we were doing and where we were from, it was him! He totally took time for us and it made it so fun! Nicest musician I ever met!",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Dapper (feat. Anderson .Paak)",
    trackId: "2Nh2cMryoXl7BrZoIeN2Pr",
    albumName: "Genesis",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273085d6629aaaf7baa283d5c7d",
    releaseDate: "2016-03-25",
    title: faker.lorem.sentence(),
    description: "I'd say that for me quarantine was not that bad because I found so many amazing artists and being inside my house all day changed my music taste a lot!",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Live And Let Die - Main Title",
    trackId: "5Go7a9wnApTQm2nYqKBdm0",
    albumName: "All The Best",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273a866f3dcb0b55e0f6eee30ac",
    releaseDate: "1987-11-02",
    title: faker.lorem.sentence(),
    description: "The chord progression is so cool, and subtle. The instrumentation is at times quirky and vibrant. The scale of this track is HUGE, and that first brass hit is so damn powerful.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "These Are The Times",
    trackId: "0OMmiWMwsCNtpQ5aP6fdp9",
    albumName: "Enter The Dru",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273677c540448268b663711ca81",
    releaseDate: "1998-01-01",
    title: faker.lorem.sentence(),
    description: "I hate how people seem to overlook Sisqo and dem VOCALS he was serving us with!!! Hes legit one of the best male singers of the 90s.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "abcdefu",
    trackId: "4fouWK6XVHhzl78KzQ1UjL",
    albumName: "abcdefu",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2732842f743ebd32235bceb43d3",
    releaseDate: "2021-08-13",
    title: faker.lorem.sentence(),
    description: "I appreciate the fact that she says ‘everybody but your dog”!  This is what gives me faith in humanity 😂! (Thank you to everyone!!)",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Rapp Snitch Knishes feat. Mr. Fantastik",
    trackId: "5KUNwkaNf8l5A9sXZhiCgI",
    albumName: "MM...FOOD",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b27352f194d02c39909d1b284799",
    releaseDate: "2004-11-16",
    title: faker.lorem.sentence(),
    description: "The fantasy and humor in his lyrics, the genius own productions laced with samples, the extremely interesting collaborations, the inimitable rhyme schemes, the productions for others, the different characters / alter-egos...This man was so original, inventive and good at what he did, that he has pushed boundaries and broadened hip-hop/rap with certainty in a beautiful way.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Watermelon Man",
    trackId: "2zQl59dZMzwhrmeSBEgiXY",
    albumName: "Head Hunters",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2736b75d57d2d070c0c4afb3f9a",
    releaseDate: "1973-10-26",
    title: faker.lorem.sentence(),
    description: "This is hands down one of the 'coolest' songs ever recorded. It's cool personified in song form.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Everything I Am",
    trackId: "1XQhZctQWzkznclbmbE7FQ",
    albumName: "Graduation",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273675561f3defd1d5a551936a8",
    releaseDate: "2007-09-11",
    title: faker.lorem.sentence(),
    description: "Everybody always saying 'I miss the old Kanye', but i think that his whole career is great.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "I Knew I Loved You",
    trackId: "6nozDLxeL0TE4MS9GqYU1v",
    albumName: "Affirmation",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2735f2acb28c792e4594c0f11e8",
    releaseDate: "1999-11-09",
    title: faker.lorem.sentence(),
    description: "I was pregnant for my daughter when this song came out, I used to sing it to my pregnant belly, and after she was born I sang it as a lullaby to her while I rocked her to sleep at night.  She's 19 years old today, and this song still holds true.  I loved  her before I met her, she's the baby girl I always dreamed of having, and she became my best friend.  This song will always be beautiful and so very special!",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "What's Up?",
    trackId: "0jWgAnTrNZmOGmqgvHhZEm",
    albumName: "Bigger, Better, Faster, More !",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b273381371cb8ce680d0dc324600",
    releaseDate: "1992-01-01",
    title: faker.lorem.sentence(),
    description: "So in 1993 when this song came out I was 25 yet, my girlfriend 23 and our daughter just three years old. Now I am a freakin' grandpa of two and still rockin'. Secretly you know? :)",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Born Sinner (feat. James Fauntleroy)",
    trackId: "2wQVmS0j4xcSbEK8CLEgwz",
    albumName: "Born Sinner",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2735bed713e0774ad8bf8d0fbab",
    releaseDate: "2013-06-14",
    title: faker.lorem.sentence(),
    description: "We’re all born sinners. Sinning is human. Isn’t it?",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Back Pocket",
    trackId: "1DrlLvlYd1FIjNavRm6NdX",
    albumName: "Thrill of the Arts",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2739ac61b549ad39e5af30e340e",
    releaseDate: "2015-10-09",
    title: faker.lorem.sentence(),
    description: "This song is soft sunshine caressing your face and waking you up on a late, lazy Sunday morning.",
    author: randUser()._id,
    likes: [],
    comments: [],
  }, {
    trackName: "Kids",
    trackId: "1jJci4qxiYcOHhQR247rEU",
    albumName: "Oracular Spectacular",
    albumCoverURL: "https://i.scdn.co/image/ab67616d0000b2738b32b139981e79f2ebe005eb",
    releaseDate: "2007-12-14",
    title: faker.lorem.sentence(),
    description: "'kids' is a song that teaches empathy and moderation. As the track begins, it is meant to induce feelings of nostalgia, to bring the listener back to much simpler times… as a kid… innocent. As the melody progresses, so does the next stage of life. As you grow older, you begin to lose your innocence and fall into society’s ways. The artists warn of the impending struggle between good and bad and remind the listener to take in the world around them in moderation. As one grows older, they must try to maintain the happy-go-lucky attitude and love for the life they had as a kid. The song is perfect for recognizing that the entirety of your youth is the glory days(especially your collegiate years), remembering to live in the moment and creating fond memories you will reminisce about in the future whenever you hear the familiar melody. In an interview with Time Out London, Wyngarden describes the band’s mentality when writing the song: “We were just happy- go - lucky, going crazy on campus.But at the same time, we were nostalgic for childhood and there was the threat of post - college life coming.' The 'threat' of 'post - college life' is surely a reference to impending adulthood.With that in mind, it makes a lot of sense that almost all of the adults in the official music video are portrayed as threatening monsters.In the end, it seems like MGMT is constantly inspired by this fear of growing up.Like Nietzsche and Twain(also referenced in the official music video) they express a cynicism for the adult world.Many of their songs are drenched with a nostalgia for the lost innocence of childhood that the adult world tends to steal away. “Kids” is a great example of all this.Sure, the song is upbeat, a bit random, and super catchy, but its meaning seems to be grounded in these universal emotions of fear and longing.",
    author: randUser()._id,
    likes: [],
    comments: [],
  },
]

const songComments = [
  [  
    "this song needs to blow up...seriously",
    "Nostalgic and futuristic at the very same poppy, dancey time.",
    "Best song on the album, and may well be my favorite song Big Wild has put out to date!",
    "This is one of the BEST Albums of the 2010's!  Grammy worthy stuff here!",
    "A guy on Tinder said this was his favorite song and I've been dancing to it on repeat on my balcony without pants for the past 2 hours. Just sayin'.",
    "Hot Damn this is fire.I wanna snowboard to this so bad...",
    "I just can’t get enough of this song and how it makes me feel 💕🕊",
    "I didn't recall hearing 70s/80s music this good, then I looked and it was... Big Wild? Love it!",
  ], [
    "I've introduced almost everyone I know to surfaces and not a single one doesn't like them.Their song quality is so consistent with each upload",
    "This channel really goes unnoticed. They deserve more attention. Thank you for the good music ❤️❤️❤️",
    "Big shout out to my boy Big Wild for this collaboration. Great song!",
    "as músicas do surfaces tem uma vibe tão boa ❤️",
    "Yet another beautiful track from Surfaces!",
    "Surfaces. Forever.",
    "Much love from Germany to all the people out there, I love you.",
    "LOVEEE!!!! This was the best Friday surprise ever. Perfect way to start the end of the week & lt; 3 Thank you Colin and Forrest",
    "Love it boys. Knew it would be magical morning when the alarm clock rings out some of your tunes. Stay strong out there y'all 🧡",
    "love your music. glad I met y’all in houston.feel like I got the biggest blessing finding your music in 2018 🙏🏼",
  ], [
    "The animations and the song itself is just marvelous!",
    "Eu adoro demais essa música 💞💞💞 eu acho q e a minha música preferida",
    "A message to the future generations: 'DON'T LET THIS SONG DIE'",
    "MEU DEUS QUE SAUDADE DESSA MUSICA AAAAAA",
    "Imagine someone plays this song during a date.",
    "I can’t let this song go away I listen to it every days",
    "Uwielbiam tą piosenkę 😍",
  ], [
    "What I love about this song is that Lou always performed it without any affect or irony; always with passion and sincerity, like an evangelist.",
    "Fine, fine music...The wife yelled from the other room, 'can you turn that down!'...I could not.",
    "I am jenny and I was saved by rock and roll",
    "Fine, fine, music...",
    "Tan buenoooo ♡",
    "Aug 23rd 1970 Was Lou Reed w / Velvet Undergrounds last Show - 51 years ago today!  Rock on Lou, and Michael Fonfara, we miss ya!",
    "the BEST version!!!!!",
    "I had the album waaaayyy back when.",
    "  Great!! I've never heard this!",
    "This raw and rumbling interpretation fires the words, all other versions, esp.the many solo ones from Lou Reed, make you rather think that Rock indeed was and is dead.Thanks alot.",
  ], [
    "This guy has literally NEVER made a bad song.",
    "This man literally doesn't have any bad songs.",
    "Modern loneliness, were never alone but always depressed. That hit me deep",
    "Love my friends to death but I never call and I never text them. really hits hard.",
    "The real loneliness in this song is WHY IS THIS SO UNDERRATED ? PEOPLE ARE SLEEPING ON THIS MASTERPIECE.",
    "Lauv is literally one of the only artists that don't ever disappoint me.",
    "I'm actually glad that this song is so underrated. Some masterpiece deserve to be known by people with the best taste!!",
  ], [
    "Man I wish we could bring back the '90s and early 2000's!",
    "This song will forever be a hit, still amazing",
    "Yeah the good old days. This new generation has no clue what they missed. Remember playing this track among other from all Genre on Friday night House Party's after school. Even practiced moves with my twin bro when we take a break from the DJ set.",
  ], [
    "I just heard these guys on the radio for the first time and lost it. FINALLY. These guys are gonna make it so big. So happy that a talented band like saint motel is finally gonna be a huge trademark",
    "Saint motel deserves more recognition!!",
    "LOVE the transitions!"
  ], [
    "The band is so much tighter with Jon playing bass and a dedicated keys player. It's always bothered me that Mac's bass players have never played with their fingers, finally, he's got one that does.",
    "Just saw this legend at Glastonbury. I was always a fan but seeing him live is a totally different experience",
    "discovered mac’s music last night. going crazyyyyy!!!!!! this song is so amazing, pure pyrotechnics!"
  ], [
    "i literally listen to this song on repeat for hours."
  ], [
    "lol same",
    "I love this comment"
  ], [
    "everytime she says 'nobody' I really feel it and I get goosebumps...",
    "I always love how mitski's songs, it depicts the emotion she wants to convey accurately but didnt feel intense, for example this song about wanting to feel loved, but not in gloomy feeling, more the way she  add the beats make this song has 'numb' feeling to it, sad but not too much, just perfect"
  ], [
    "Absolutely love this band and especially this tune. Makes me feel like I am back in the late 60s when life was calm and peaceful. Going to see them in October in Holland....Can't wait!!!!!",
    "quite possibly the best summer groove ever made",
    "If I ever make a movie about surfers that do psychedelics, this song is going to be in it."
  ], [
    "Prince isn’t dead, he is just performing in heaven from now on.",
    "DMSR was played at the skating rink where I was 4-5 times a week. It was The first song that I can remember loving the first time that I heard it. I absolutely love his music. My all time favorite artist. He is so deeply missed by many. Add the fact that he played all of those instruments is absolutely amazing. RIP purple one. We love and miss you!!",
    "Wasn’t a Prince fan. Loved Clapton, Beck, Led Zepplin, The Stones,Beatles etc. I’m a huge fan now. He’s an incredible talent, or was !!"
  ], [
    "This album was the soundtrack to my life in 2017",
    "I can still remember jogging to this early in the morning and listening to this after my messaging my homegirl every morning because she would wake up extra early in the morning for school, ofcourse that whole situation shit itself, but it's nice to come back and reminisce. This song makes me happy because it brings me back to a time to where I was truly happy, of course I'm happy now but that shade of happy was different, a much younger and more innocent happy. :)",
    "I've been a Tyler fan since 2010, listened to him growing up. My parents had a divorced so I had to live with my dad for a while. He’s married to a new woman. She has a son of 10 years. Back in 2014, I introduced him to Tyler the Creator. He later started to love his music. Me and him had a great bond ever since. Tyler really brings people together and closer. I introduced Tyler to my ex girlfriend, we non stop listen to cherry bomb and we would listen to wolf. Times changed ever since",
    "Heard this song performed acoustic and I fell in love with Tyler.",
  ], [
    "omg this has been stuck in my head all day and I finally figured out what song it is I'm so happy rn",
    "I really miss this song i love it"
  ], [
    "I really needed this at this point in my life.",
    "2 years later and I'm still OBSESSED with these guys and their energy",
    "These are the songs that I listen to when I'm not feeling good like I should."
  ], [
    "People that didn't go through that period of time just don't know how screwed up the 60s really were, We about caused the end of the world with the Cuban Missile Crisis, Vietnam, saw President Kennedy get his brains splattered Live then 2 days later they silenced Oswald again Live, then Martin Luther king Jr, Civil rights abused, Bobby Kennedy shot in the head Live again. Woodstock was a drop in the bucket for some kids while we were getting our draft notices. I really think towards the end our music helped us raise awareness that our voices could make a change.",
    "80s had thrash metal and hardcore punk.",
    "As a child of the early 60s I can still say that I remember a lot of it.  It was certainly a time of upheaval.",
    "Great music, was 18 in 66 in US, bad time in the country.",
    "Vietnam  was heating up. Sitting in high school reading a draft notice. Still here at 73!!! Zombies were ahead of the time. Great stuff!!!😎",
    "I'm a kid again and I love it. The 1960's were the time of awesome music."
  ], [
    "i agree with absolutely everything you said to a T except 'the message of revolution'. I don't think kendrick embodies that at all, his lyrics usually tell very nuanced personal stories and explain contradictions in himself and his upbringing.",
    "Hi Universe: I am requesting that Kendrick does a whole set like this with a live band and put it on Netflix please. In 4K. Thanks in advance universe!",
    "Most godly performance I've ever seen on a late-night show. No disrespect to Jimmy Fallon but his show doesn't deserve peak Kendrick in his zone lol"
  ], [
    "Good songs will fade but songs like these will always be new"
  ], [
    "This was the song my husband and I danced to at our wedding reception ",
    "I had my first kiss today and this song was playing in my head the whole time"
  ], [
    "I haven't found a single song that Anderson .Paak is featured in that isn't good",
    "It's nice seeing some of the OF boys in a video again, even if they aren't actually in the song"
  ], [
    "McCartney during the 60s: 'SHE LOVES YOU YEAH YEAH YEAH!' McCartney during the 70s: ' So Live and Let Die '",
    "A rollercoaster from a genius. Still blows you away in 2019",
    "This song legit used to scare the shit out of me when I was a kid, I could NOT listen to it half the time. One day I would be in awe of it and just feel chills, another day I would cry if I heard it. Great song haha, love it now",
    "A true masterpiece. This 70’s/80’s music radio station ALWAYS plays this song and as a new Paul McCartney fan, I didn’t know he was the one who made this song! It was always a favorite of mine but I never searched it up but would always jam to it in the car. Absolutely great!"
  ], [
    "'Tear you up in little pieces swallow you like reeses pieces come on girl you know I need it ' yasssss my jam 20/20 still jamming this!!"
  ], [
    "While this song is quite new it still gives me a 2011 feeling. It's great!",
    "This song is great. The lyrics are crafty, and the mood is set effectively. Although this song's meaning is fairly irrelevant to me, I still somehow feel like I connect with the song"
  ], [
    "Hey man, where ever you are, I hope you and Nujabes are jamming it out. Rest in peace.",
    "This is one of the best rap beats I've ever heard, he truly was a genius.",
    "Bruh. Mr. Fantastik really dropped one of the smoothest guest verses ever here and then vanished off the face of the earth afterwards lol"
  ], [
    "I remember hearing this song when I was 4. I'm 15 now and I haven't heard this song since then. I looked so long for it and now I'm almost crying.  I still love this song.",
    "I don't care what color your skin is, I don't care where you come from, I don't care what your religion is, If you listen to this music then you are officially groovy as hell and I love you.  Do you hear me??  I love you!!  Groove on baby!!  Hell Yea!!",
    "This album is just phenomenal.  The saxophone player Bennie Maupin came to my school last Friday and it was an amazing experience.  It's amazing to watch people at the top of their level playing live."
  ], [
    "There was a point and time where 'Ye gave HipHop a level of soul it'd never encountered before. Say what you will about the man today, but go back and check those first 3 albums. Boy was spitting soulful fire.",
    "This song aged great. It’s almost as if he predicted people were gonna shame and criticize him almost unilaterally but he will still come out successful."
  ], [
    "A special, calming song that gives you feelings of warmth and peace. Darren Hayes' falsetto is something else; the drum and bass parts make the song sound almost as if it has its own heartbeat. They almost never recorded it at all, which has to make it one of the most surprising #1 singles ever. Just memorable.",
    "This song reminds me so much of my best friend from my teen years. It takes me back to that exact moment when we were in his room and he had bought the  Affirmation album and he asked me to listen to this song. I didn’t know it then, but I know it now that he was trying to tell me something. That was 22 years ago and this song will remind me of what him and I could of had. Our friendship came to and end in early 2002, losing him has been my biggest regret."
  ], [
    "Future Generations Never Let This Song Die Please!",
    "I was a senior in high school when this came out and the lyrics still make sense to me in 2022. Timeless.",
    "I never get tired of hearing it, too beautiful",
    "Hard to believe they only had one hit with a voice like that"
  ], [
    "Happy Birthday x, go keep makin beats in Heaven my guy."
  ], [
    "I would like to say that this song marked my life and my current relationship. I live a beautiful love story, and we will dance to this song when we get married!",
    "I feel so much better about the world after watching this.",
    "heartwarming and strangely overproduced for vulfpeck, you guys can make any tenso feel like a sweet ride"
  ],[
    "'Control yourself, take only what you need from it', love these lyrics, my interpretation is that it means your own childhood. They say what we experienced as children makes us who we are, but maybe as adults we can take control over our own experiences, how they affect us, for good or bad, taking what we need and letting go of that we cannot benefit from. Idk if that's a true idea and I don't even know if that was the intended message...but I like to think so (for both)",
    "20 years later and this song is still iconic! MGMT is truly underrated!",
    "I’m 25 and this song just reminds me of being young and good times. Back in the 2000s before social media when life was simpler and good fun. I think it’s brilliant, the lyrics, everything. It’s one of the best songs IMO",
    "For me, this song has a pretty deep feeling for me.. it just reminds me of the dangers of  and growing up to learn things and going out into the unknowns of the world. Things we don’t know can make us confused or scared, but when we grow older we learn and they don’t seem as scary anymore."
  ]

]

commentedSpotifySongs.forEach(async (song, idx) => {
  const newPost = new Post(song)
  
  for (let index = 0; index < songComments[idx].length; index++) {
    newPost.comments.push({
      message: songComments[idx][index],
      author: randUser()._id
    });
  }

  await axios.get('http://localhost:5000/api/spotify/track', { params: { id: newPost.trackId } })
    .then((res) => {

      newPost.artistName = res.data.artists[0].name
      
      newPost.save((err, result) => {
        User.findById(newPost.author.toString())
        .then(foundUser => {
          if (foundUser) {
            foundUser.posts.push(newPost)
            foundUser.save()
          } else {
            console.log(`Doesn't work for ${newPost.author.toString()}`)
          }
        }).catch(error => console.log(error))
      })
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

  