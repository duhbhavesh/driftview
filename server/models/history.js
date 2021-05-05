const mongoose = require('mongoose');
const { Schema } = mongoose;

const videosHistoryItemSchema = new Schema({
   _id: { type: Schema.Types.ObjectId, ref: 'Video' },
});

const VideoHistoryItem = mongoose.model(
   'VideoHistoryItem',
   videosHistoryItemSchema,
);

module.exports = { VideoHistoryItem };
