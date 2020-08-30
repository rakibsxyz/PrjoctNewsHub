const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// channel name, timestamp, videoId

const worldNewsChannelSchema = new Schema({
    channelName: {
       type: String,
       require: true
    },
    videoId:{
        type: String,
        require: true
     }
},  { timestamps: true});

const WorldNewsChannel = mongoose.model("WorldNewsChannel", worldNewsChannelSchema);

module.exports = WorldNewsChannel