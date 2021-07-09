export const checkLikes = (state, video) => {
   return state.videosLiked.filter((item) => item.id === video.id);
};

export const checkPlaylistVideosId = (item, videoId) => {
   if (item.videos?.find((listVideoId) => listVideoId.id === videoId)) {
      return true;
   } else {
      return false;
   }
};

export const checkWatchLater = (state, video) => {
   return state.videosWatchLater.filter((item) => item.id === video.id);
};

export const checkHistory = (state, video) => {
   return state.videosHistory.find((item) => item.id === video.id);
};

export const API_ENDPOINT = 'https://driftview-backend-1.duhbhavesh.repl.co';
