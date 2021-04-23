export const checkLikes = (state, video) => {
   return state.videoLiked.filter((item) => item.id === video.id);
};

export const checkyPlaylistVideosID = (itemID, videoID) => {
   if (itemID.filter((listVideoID) => listVideoID === videoID).length === 0) {
      return false;
   } else {
      return true;
   }
};

export const checkWatchLater = (state, video) => {
   return state.videoWatchLater.filter((item) => item.id === video.id);
};

export const checkHistory = (state, video) => {
   return !!state.videoHistory.find((item) => item.id === video.id);
};
