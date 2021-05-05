const mongoose = require('mongoose');
const { Schema } = mongoose;

const childSchema = new Schema({
   video: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
   },
});

const playlistItemSchema = new Schema({
   name: {
      type: String,
      required: 'Cannot create a playlist without name.',
      trim: true,
   },
   videos: [childSchema],
});

const PlaylistItem = mongoose.model('PlaylistItem', playlistItemSchema);

module.exports = { PlaylistItem };
