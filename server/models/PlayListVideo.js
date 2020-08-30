const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// channel name, timestamp, videoId

const playlistVideoSchema = new Schema({
    channelName: {
       type: String,
       require: true
    },
    title: {
        type: String,
        require: true
    },
    videoId:{
        type: String,
        require: true
     },
     publishedAt:{
        type: Date,
        require: true
     }

},  { timestamps: true});

const PlaylistVideo = mongoose.model("PlaylistVideo", playlistVideoSchema);

module.exports = PlaylistVideo