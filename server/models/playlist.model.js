const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaylistItemSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   playlistName: {
      type: String,
      required: true,
   },
   videos: [{ type: Schema.Types.Mixed, ref: 'Video' }],
});

const PlaylistItem = mongoose.model('PlaylistItem', PlaylistItemSchema);

module.exports = { PlaylistItem };
