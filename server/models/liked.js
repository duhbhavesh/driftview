const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoLikedItemSchema = new Schema({
   _id: { type: Schema.Types.ObjectId, ref: 'Video' },
});

const VideoLikedItem = mongoose.model('VideoLikedItem', videoLikedItemSchema);

module.exports = { VideoLikedItem };
