const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
   firstName: {
      type: String,
      trim: true,
      required: true,
   },
   lastName: {
      type: String,
      trim: true,
      required: true,
   },
   email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
   },
   password: {
      type: String,
      trim: true,
      required: true,
   },
   videosLiked: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Video',
      },
   ],
   videosHistory: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Video',
      },
   ],
   videosWatchLater: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Video',
      },
   ],
   playlists: [
      {
         type: Schema.Types.ObjectId,
         ref: 'PlaylistItem',
      },
   ],
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
