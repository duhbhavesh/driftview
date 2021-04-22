const ADD_TO_LIKED = 'ADD_TO_LIKED';
const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED';
const ADD_NEW_PLAYLIST = 'ADD_NEW_PLAYLIST';
const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';

export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case ADD_TO_LIKED:
         return { ...state, videoLiked: [...state.videoLiked, payload] };
      case REMOVE_FROM_LIKED:
         return {
            ...state,
            videoLiked: state.videoLiked.filter(
               (item) => item.id !== payload.id,
            ),
         };
      case ADD_NEW_PLAYLIST:
         return {
            ...state,
            videoPlaylist: [...state.videoPlaylist, { name: payload, id: [] }],
         };
      case ADD_TO_PLAYLIST:
         return {
            ...state,
            videoPlaylist: state.videoPlaylist.map((playlist) => {
               if (playlist.name === payload.name) {
                  return { ...playlist, id: [...playlist.id, payload.id] };
               }
               return playlist;
            }),
         };
      case REMOVE_FROM_PLAYLIST:
         return {
            ...state,
            videoPlaylist: state.videoPlaylist.map((playlist) => {
               if (playlist.name === payload.name) {
                  return {
                     ...playlist,
                     id: playlist.id.filter((item) => item !== payload.id),
                  };
               } else {
                  return playlist;
               }
            }),
         };
      case DELETE_PLAYLIST:
         return {
            ...state,
            videoPlaylist: state.videoPlaylist.filter(
               (playlist) => playlist.name !== payload.name,
            ),
         };
      default:
         return state;
   }
};
