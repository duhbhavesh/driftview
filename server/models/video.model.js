const mongoose = require('mongoose');
const { Schema } = mongoose;
const videoList = require('../data/videoList');

const videoSchema = new Schema({
   videoId: String,
   title: String,
   description: String,
   thumbnail: String,
   categories: { type: Array },
   channelName: String,
   channelAvatar: String,
   publishedDate: String,
});

const Video = mongoose.model('Video', videoSchema);

const PopulateVideos = async () => {
   try {
      videoList.forEach(async (video) => {
         const newVideo = new Video(video);
         const savedVideo = await newVideo.save();
         console.log(savedVideo);
      });
   } catch (err) {
      console.log(err);
   }
};

module.exports = { Video, PopulateVideos };
