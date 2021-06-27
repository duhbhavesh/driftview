const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoWatchLaterItemSchema = new Schema({
   _id: { type: Schema.Types.ObjectId, ref: 'Video' },
});

const VideoWatchLaterItem = mongoose.model(
   'VideoWatchLaterItem',
   videoWatchLaterItemSchema,
);

module.exports = { VideoWatchLaterItem };
