import axios from 'axios';
import {
   API_ENDPOINT,
   checkHistory,
   checkLikes,
   checkWatchLater,
} from './utils';

export const handleGetUserData = async (dispatch, token) => {
   try {
      const {
         data: { user },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user`,
         headers: {
            Authorization: token,
         },
      });
      dispatch({ type: 'SET_USER_DATA', payload: user });
   } catch (error) {
      console.log(error);
   }
};

export const handleGetUserDetails = async (authDispatch, token) => {
   try {
      const {
         data: { user },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user`,
         headers: {
            Authorization: token,
         },
      });

      authDispatch({
         type: 'SET_USER_DETAILS',
         payload: user,
      });
   } catch (error) {
      console.log(error.response);
   }
};

export const handleGetPlaylistData = async (dispatch, token) => {
   try {
      const {
         data: { response },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/playlist`,
         headers: {
            Authorization: token,
         },
      });

      dispatch({ type: 'SET_USER_PLAYLIST', payload: response });
   } catch (error) {
      console.log(error.response);
   }
};

export const handleToggleLike = async ({
   state,
   dispatch,
   video,
   notify,
   token,
}) => {
   if (checkLikes(state, video).length === 0) {
      try {
         await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/liked`,
            data: {
               videoId: video.id,
            },
            headers: {
               Authorization: token,
            },
         });

         dispatch({ type: 'ADD_TO_LIKED', payload: video });
         notify('Added to Liked Videos');
      } catch (error) {
         console.log(error);
      }
   } else {
      try {
         await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/liked`,
            data: {
               videoId: video.id,
            },
            headers: {
               Authorization: token,
            },
         });

         dispatch({ type: 'REMOVE_FROM_LIKED', payload: video });
         notify('Removed from Liked Videos');
      } catch (error) {
         console.log(error);
      }
   }
};

export const handleRemoveLike = async ({ dispatch, video, token }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `${API_ENDPOINT}/api/liked`,
         data: {
            videoId: video.id,
         },
         headers: {
            Authorization: token,
         },
      });

      dispatch({ type: 'REMOVE_FROM_LIKED', payload: video });
   } catch (error) {
      console.log(error);
   }
};

export const handleToggleWatchLater = async ({
   state,
   dispatch,
   video,
   notify,
   token,
}) => {
   if (checkWatchLater(state, video).length === 0) {
      try {
         await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/watchlater`,
            data: {
               videoId: video.id,
            },
            headers: {
               Authorization: token,
            },
         });

         dispatch({ type: 'ADD_TO_WATCHLATER', payload: video });
         notify('Added to Watch Later');
      } catch (error) {
         console.log(error);
      }
   } else {
      try {
         await axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/api/watchlater`,
            data: {
               videoId: video.id,
            },
            headers: {
               Authorization: token,
            },
         });

         dispatch({ type: 'REMOVE_FROM_WATCHLATER', payload: video });
         notify('Removed from Watch Later');
      } catch (error) {
         console.log(error);
      }
   }
};

export const handleRemoveWatchLater = async ({ dispatch, video, token }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `${API_ENDPOINT}/api/watchlater`,
         data: {
            videoId: video.id,
         },
         headers: {
            Authorization: token,
         },
      });

      dispatch({ type: 'REMOVE_FROM_WATCHLATER', payload: video });
   } catch (error) {
      console.log(error);
   }
};

export const handleAddToHistory = async ({ state, dispatch, video, token }) => {
   if (checkHistory(state, video)) {
      return null;
   } else {
      try {
         await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/history`,
            data: {
               videoId: video.id,
            },
            headers: {
               Authorization: token,
            },
         });

         dispatch({ type: 'ADD_TO_HISTORY', payload: video });
      } catch (err) {
         console.log(err);
      }
   }
};

export const handleRemoveFromHistory = async ({ dispatch, video, token }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `${API_ENDPOINT}/api/history`,
         data: {
            videoId: video.id,
         },
         headers: {
            Authorization: token,
         },
      });

      dispatch({ type: 'REMOVE_FROM_HISTORY', payload: video });
   } catch (error) {
      console.log(error);
   }
};

export const handleAddNewPlaylist = async ({
   e,
   dispatch,
   inputValue,
   setInputValue,
   token,
}) => {
   try {
      e.preventDefault();
      const {
         data: { response },
      } = await axios({
         method: 'POST',
         url: `${API_ENDPOINT}/api/playlist`,
         data: {
            playlistName: inputValue,
         },
         headers: {
            Authorization: token,
         },
      });

      dispatch({
         type: 'ADD_NEW_PLAYLIST',
         payload: { playlistName: inputValue, id: response.id },
      });
      setInputValue('');
   } catch (error) {
      console.log(error);
   }
};

export const handleAddVideoToPlaylist = async ({
   dispatch,
   video,
   item,
   token,
}) => {
   try {
      await axios({
         method: 'POST',
         url: `${API_ENDPOINT}/api/playlist/${item.id}`,
         data: {
            videoId: video.id,
         },
         headers: {
            Authorization: token,
         },
      });

      dispatch({
         type: 'ADD_TO_PLAYLIST',
         payload: { playlistId: item.id, video: video },
      });
   } catch (error) {
      console.log(error);
   }
};

export const handleRemoveVideoFromPlaylist = async ({
   dispatch,
   video,
   item,
   token,
}) => {
   try {
      await axios({
         method: 'DELETE',
         url: `${API_ENDPOINT}/api/playlist/${item.id}`,
         data: {
            videoId: video.id,
         },
         headers: {
            Authorization: token,
         },
      });

      dispatch({
         type: 'REMOVE_FROM_PLAYLIST',
         payload: { playlistId: item.id, video: video },
      });
   } catch (error) {
      console.log({ error });
   }
};

export const handleDeletePlaylist = async ({ dispatch, token, playlist }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `${API_ENDPOINT}/api/playlist`,
         headers: {
            Authorization: token,
         },
         data: {
            playlistId: playlist.id,
         },
      });
      dispatch({ type: 'DELETE_PLAYLIST', payload: { playlist: playlist } });
   } catch (error) {
      console.log({ error });
   }
};
