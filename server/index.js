const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const axios = require('axios')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const NewsChannel = require("./models/NewsChannel")
const WorldNewsChannel = require("./models/WorldNewsChannel")
const FeaturedNewsChannel = require("./models/FeaturedNewsChannel")
const PlaylistVideo = require("./models/PlayListVideo")

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));



// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});



app.get('/getBDNewsChannelLinks', (req, res) => {

  NewsChannel.find({}, function (err, channels) {
    console.log("semtsadasdasdasdasdasdasdasdasd")
    res.send(channels);
  });
})

app.get('/getWorldNewsChannelLinks', (req, res) => {

  WorldNewsChannel.find({}, function (err, channels) {
    console.log("semtsadasdasdasdasdasdasdasdasd")
    res.send(channels);
  });
})

app.get('/getFeaturedNewsChannelLinks', (req, res) => {

  FeaturedNewsChannel.find({}, function (err, channels) {
    console.log("semtsadasdasdasdasdasdasdasdasd")
    res.send(channels);
  });
})

// channel name, timestamp, videoId

// setInterval(function () {


// }, 5000);

// NationalNews
// setImmediate(() => {

//   axios.all([

//     // somoy axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxHoBXkY88Tb8z1Ssj6CWsQ&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // dbc axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUvXoiDEKI8VZJrr58g4VAw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // ekattor axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0ThmWmb7WQATrrDMLQph7Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //Independent axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbyLSj19ID4UnaSc3vcCl8Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // ATN axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKlhfq1ILoAFav7iw5iCnfA&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //  news24 axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPREnbhKQP-hsVfsfKP-mCw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // Jamuna  axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCN6sm8iHiPd0cnoUardDAnw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //  channel 24 axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHLqIOMPk20w-6cFgkA90jw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')

//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxHoBXkY88Tb8z1Ssj6CWsQ&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUvXoiDEKI8VZJrr58g4VAw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0ThmWmb7WQATrrDMLQph7Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbyLSj19ID4UnaSc3vcCl8Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKlhfq1ILoAFav7iw5iCnfA&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPREnbhKQP-hsVfsfKP-mCw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCN6sm8iHiPd0cnoUardDAnw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHLqIOMPk20w-6cFgkA90jw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')



//   ]).then(axios.spread((response1, response2, response3, response4, response5, response6, response7, response8) => {

//     var axiosResponses = [response1, response2, response3, response4,response5, response6, response7,response8];
//     // var axiosResponses = [response1];
//     var extractedChannelResponses = [];
//     console.log(response1.data.items.length);
//     console.log(axiosResponses.length)
//     for (i = 0; i < axiosResponses.length; i++) {
//       if (axiosResponses[i].data.items.length > 0) extractedChannelResponses.push(axiosResponses[i].data.items[0]);
//     }

//     // console.log(extractedChannelResponses[0])
//     extractedChannelResponses.forEach(function (itemResponse, i) {

//       // console.log(itemResponse);
//       var channelName = itemResponse.snippet.channelTitle;
//       var videoId = itemResponse.id.videoId;
//       const tempChannel = { channelName, videoId }
//       const newsChannels = new NewsChannel(tempChannel)
//       const queryByChannelName = { channelName: tempChannel.channelName }
//       const updateVideoId = { videoId: tempChannel.videoId }


//       NewsChannel.findOneAndUpdate(queryByChannelName, updateVideoId, { upsert: true }, function (err, result) {
//         if (err) {
//           console.log("Erro in finding or saving channels in db")
//           console.log(err)
//         }
//         else {
//           console.log("succesfully saved/updated channel bro");
//           console.log("value of i is---", i, " ==", tempChannel.channelName); 
//         }
//       });
//     });

//   })).catch(error => {
//     console.log("Problem in the process man")
//     console.log(error)
//   });
// })

// AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo
// somoy tv UCxHoBXkY88Tb8z1Ssj6CWsQ


//WorldNewsSchema:
// setImmediate(() => {

//   axios.all([

//     // somoy axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxHoBXkY88Tb8z1Ssj6CWsQ&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // dbc axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUvXoiDEKI8VZJrr58g4VAw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // ekattor axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0ThmWmb7WQATrrDMLQph7Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //Independent axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbyLSj19ID4UnaSc3vcCl8Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // ATN axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKlhfq1ILoAFav7iw5iCnfA&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //  news24 axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPREnbhKQP-hsVfsfKP-mCw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // Jamuna  axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCN6sm8iHiPd0cnoUardDAnw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //  channel 24 axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHLqIOMPk20w-6cFgkA90jw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')

//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNye-wNBqNL5ZzHSJj3l8Bg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCBi2mrWuNuyYy4gbM6fU18Q&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCknLrEdhRCp1aegoMqRaCZg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC83jt4dlz1Gjl58fzQrrKZg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCef1-8eOpJgud7szVPlZQAQ&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeY0bbntWzzVIaj2z3QigXg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCN6sm8iHiPd0cnoUardDAnw&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHLqIOMPk20w-6cFgkA90jw&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')



//   ]).then(axios.spread((response1, response2, response3, response4, response5, response6) => {

//     var axiosResponses = [response1, response2, response3, response4,response5, response6];
//     // var axiosResponses = [response1];
//     var extractedChannelResponses = [];
//     console.log(response1.data.items.length);
//     console.log(axiosResponses.length)
//     for (i = 0; i < axiosResponses.length; i++) {
//       if (axiosResponses[i].data.items.length > 0) extractedChannelResponses.push(axiosResponses[i].data.items[0]);
//     }

//     // console.log(extractedChannelResponses[0])
//     extractedChannelResponses.forEach(function (itemResponse, i) {

//       // console.log(itemResponse);
//       var channelName = itemResponse.snippet.channelTitle;
//       var videoId = itemResponse.id.videoId;
//       const tempChannel = { channelName, videoId }
//       // const newsChannels = new WorldNewsChannel(tempChannel)
//       const queryByChannelName = { channelName: tempChannel.channelName }
//       const updateVideoId = { videoId: tempChannel.videoId }


//       WorldNewsChannel.findOneAndUpdate(queryByChannelName, updateVideoId, { upsert: true }, function (err, result) {
//         if (err) {
//           console.log("Erro in finding or saving channels in db")
//           console.log(err)
//         }
//         else {
//           console.log("succesfully saved/updated channel bro");
//           console.log("value of i is---", i, " ==", tempChannel.channelName); 
//         }
//       });
//     });

//   })).catch(error => {
//     console.log("Problem in the process man")
//     console.log(error)
//   });
// })





//FeaturedChannels:
// setImmediate(() => {

//   axios.all([

//     // somoy axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxHoBXkY88Tb8z1Ssj6CWsQ&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // dbc axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUvXoiDEKI8VZJrr58g4VAw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // ekattor axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0ThmWmb7WQATrrDMLQph7Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //Independent axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbyLSj19ID4UnaSc3vcCl8Q&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // ATN axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKlhfq1ILoAFav7iw5iCnfA&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //  news24 axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPREnbhKQP-hsVfsfKP-mCw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     // Jamuna  axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCN6sm8iHiPd0cnoUardDAnw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     //  channel 24 axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHLqIOMPk20w-6cFgkA90jw&eventType=live&maxResults=2&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
// // WorldNews
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNye-wNBqNL5ZzHSJj3l8Bg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCBi2mrWuNuyYy4gbM6fU18Q&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCknLrEdhRCp1aegoMqRaCZg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC83jt4dlz1Gjl58fzQrrKZg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCef1-8eOpJgud7szVPlZQAQ&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeY0bbntWzzVIaj2z3QigXg&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')

//     // Featured:
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDGiCfCZIV5phsoGiPwIcyQ&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCakgsb0w7QB0VHdnCc-OVEA&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLA_DiR1FfKNvjuUpBHmylQ&eventType=live&maxResults=1&q=live%20news&type=video&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')



//   ]).then(axios.spread((response1, response2, response3) => {

//     var axiosResponses = [response1, response2, response3];
//     // var axiosResponses = [response1];
//     var extractedChannelResponses = [];
//     console.log(response1.data.items.length);
//     console.log(axiosResponses.length)
//     for (i = 0; i < axiosResponses.length; i++) {
//       if (axiosResponses[i].data.items.length > 0) extractedChannelResponses.push(axiosResponses[i].data.items[0]);
//     }

//     // console.log(extractedChannelResponses[0])
//     extractedChannelResponses.forEach(function (itemResponse, i) {

//       // console.log(itemResponse);
//       var channelName = itemResponse.snippet.channelTitle;
//       var videoId = itemResponse.id.videoId;
//       const tempChannel = { channelName, videoId }
//       // const newsChannels = new WorldNewsChannel(tempChannel)
//       const queryByChannelName = { channelName: tempChannel.channelName }
//       const updateVideoId = { videoId: tempChannel.videoId }


//       FeaturedNewsChannel.findOneAndUpdate(queryByChannelName, updateVideoId, { upsert: true }, function (err, result) {
//         if (err) {
//           console.log("Erro in finding or saving channels in db")
//           console.log(err)
//         }
//         else {
//           console.log("succesfully saved/updated channel bro");
//           console.log("value of i is---", i, " ==", tempChannel.channelName); 
//         }
//       });
//     });

//   })).catch(error => {
//     console.log("Problem in the process man")
//     console.log(error)
//   });
// })


// bangladesh live stream tv news 

// playlist Items API
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLS3XGZxi7cBVTzEE4Sim9UuNKnUJq9Vkh&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo


// ALL Playlist item for top news recent news and world news

// setImmediate(() => {

//   axios.all([

//     // Playlist BBC

//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLS3XGZxi7cBVTzEE4Sim9UuNKnUJq9Vkh&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL6XRrncXkMaVGQM7ra02ystnTt_PExEgr&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLzGHKb8i9vTwGUsrdmC7Kk7JmRbJ1OCIh&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL_ZjvsqAkdjK2ymfwebxk_jQOK8vJAGWk&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLlpG3KtmKKzx7NG334Ufa3HiVgDR_o-xB&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo'),
//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLAHVDBLW1GY6MKibxwq5_Q62vh6k7jHBU&key=AIzaSyArIMJl_hkaookErOeKCOiT8V85U2Lt_uo')
//     ]).then(axios.spread((response1,response2,response3,response4,response5,response6) => {
//   // ]).then(axios.spread((response1, response2, response3) => {

//     var axiosResponses = [response1,response2,response3,response4,response5,response6];
//     // var axiosResponses = [response1, response2, response3];
//     // var axiosResponses = [response1];
//     var extractedChannelResponses = [];
//     console.log(response1.data.items.length);
//     console.log(axiosResponses[0].data.items[0].snippet.publishedAt)

//     for (i = 0; i < axiosResponses.length; i++) {
//       extractedChannelResponses.push(axiosResponses[i].data);
//       console.log(i)
//     }

//     console.log(extractedChannelResponses[0].items[0].snippet.publishedAt)

//     extractedChannelResponses.forEach(function (playlist, i) {
//       playlist.items.forEach(function (item, j) {

//         var channelName = item.snippet.channelTitle;
//         var title = item.snippet.title;
//         var videoId = item.contentDetails.videoId
//         var publishedAt = new Date(item.contentDetails.videoPublishedAt);
//         console.log(typeof publishedAt);
//         const tempChannel = { channelName, title, videoId, publishedAt };
//         const queryByVideoId = { videoId: tempChannel.videoId }
//         const update = { publishedAt: tempChannel.publishedAt, title: item.snippet.title, channelName: item.snippet.channelTitle }

//         var timestamp = Date.parse(item.contentDetails.videoPublishedAt);
//         if (isNaN(timestamp) == false) {
//           PlaylistVideo.findOneAndUpdate(queryByVideoId, update, { upsert: true }, function (err, result) {
//             if (err) {
//               console.log("Erro in finding or saving videos in db", i, "  ccc ", j)
//               console.log(tempChannel)
//               console.log(err)
//             }
//             else {
//               // console.log("succesfully saved/updated playlist vdos bro");
//               console.log("value of i is---", i, " ==", tempChannel.channelName, "Vid: --", j);
//             }
//           });
//         }
//       })

//     })
//   })
//   ).catch(error => {
//     console.log("Problem in the process man")
//     console.log(error)
//   });
// })