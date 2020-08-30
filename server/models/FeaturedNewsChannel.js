const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// channel name, timestamp, videoId

const featuredNewsChannelSchema = new Schema({
    channelName: {
       type: String,
       require: true
    },
    videoId:{
        type: String,
        require: true
     }
},  { timestamps: true});

const FeaturedNewsChannel = mongoose.model("FeaturedNewsChannel", featuredNewsChannelSchema);

module.exports = FeaturedNewsChannel