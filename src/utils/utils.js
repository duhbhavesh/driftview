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
