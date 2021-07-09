const SET_VIDEOS = 'SET_VIDEOS';
const SET_USER_DATA = 'SET_USER_DATA';
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
const SET_USER_PLAYLIST = 'SET_USER_PLAYLIST';

export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case SET_VIDEOS:
         return { ...state, videos: payload };

      case SET_USER_DATA:
         return {
            ...state,
            videosLiked: payload.videosLiked,
            videosWatchLater: payload.videosWatchLater,
            videosHistory: payload.videosHistory,
         };

      case SET_USER_PLAYLIST:
         return { ...state, playlists: payload };

      case ADD_TO_LIKED:
         return { ...state, videosLiked: [...state.videosLiked, payload] };

      case REMOVE_FROM_LIKED:
         return {
            ...state,
            videosLiked: state.videosLiked.filter(
               (item) => item.id !== payload.id,
            ),
         };

      case ADD_NEW_PLAYLIST:
         return {
            ...state,
            playlists: [
               ...state.playlists,
               {
                  id: payload.id,
                  playlistName: payload.playlistName,
                  videos: [],
               },
            ],
         };

      case ADD_TO_PLAYLIST:
         return {
            ...state,
            playlists: state.playlists.map((playlist) => {
               if (playlist.id === payload.playlistId) {
                  return {
                     ...playlist,
                     videos: [...playlist.videos, payload.video],
                  };
               } else {
                  return playlist;
               }
            }),
         };

      case REMOVE_FROM_PLAYLIST:
         return {
            ...state,
            playlists: state.playlists.map((playlist) => {
               if (playlist.id === payload.playlistId) {
                  return {
                     ...playlist,
                     videos: playlist.videos.filter(
                        (item) => item.id !== payload.video.id,
                     ),
                  };
               } else {
                  return playlist;
               }
            }),
         };

      case DELETE_PLAYLIST:
         return {
            ...state,
            playlists: state.playlists.filter(
               (playlist) => playlist.id !== payload.playlist.id,
            ),
         };

      case ADD_TO_HISTORY:
         return { ...state, videosHistory: [...state.videosHistory, payload] };

      case REMOVE_FROM_HISTORY:
         return {
            ...state,
            videosHistory: state.videosHistory.filter(
               (item) => item.id !== payload.id,
            ),
         };

      case DELETE_HISTORY:
         return { ...state, videosHistory: [] };

      case ADD_TO_WATCHLATER:
         return {
            ...state,
            videosWatchLater: [...state.videosWatchLater, payload],
         };

      case REMOVE_FROM_WATCHLATER:
         return {
            ...state,
            videosWatchLater: state.videosWatchLater.filter(
               (item) => item.id !== payload.id,
            ),
         };
      default:
         return state;
   }
};
