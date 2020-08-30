const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// channel name, timestamp, videoId

const newsChannelSchema = new Schema({
    channelName: {
       type: String,
       require: true
    },
    videoId:{
        type: String,
        require: true
     }
},  { timestamps: true});

const NewsChannel = mongoose.model("Newschannel", newsChannelSchema);

module.exports = NewsChannel