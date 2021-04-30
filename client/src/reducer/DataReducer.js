const ADD_TO_LIKED = 'ADD_TO_LIKED';
const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED';
const ADD_NEW_PLAYLIST = 'ADD_NEW_PLAYLIST';
const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';
const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
const REMOVE_FROM_HISTORY = 'REMOVE_FROM_HISTORY';
const DELETE_HISTORY = 'DELETE_HISTORY';
const ADD_TO_WATCHLATER = 'ADD_TO_WATCHLATER';
const REMOVE_FROM_WATCHLATER = 'REMOVE_FROM_WATCHLATER';

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
      case ADD_TO_HISTORY:
         return { ...state, videoHistory: [...state.videoHistory, payload] };
      case REMOVE_FROM_HISTORY:
         return {
            ...state,
            videoHistory: state.videoHistory.filter(
               (item) => item.id !== payload.id,
            ),
         };
      case DELETE_HISTORY:
         return { ...state, videoHistory: [] };
      case ADD_TO_WATCHLATER:
         return {
            ...state,
            videoWatchLater: [...state.videoWatchLater, payload],
         };
      case REMOVE_FROM_WATCHLATER:
         return {
            ...state,
            videoWatchLater: state.videoWatchLater.filter(
               (item) => item.id !== payload.id,
            ),
         };
      default:
         return state;
   }
};
