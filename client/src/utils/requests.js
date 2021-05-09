import axios from 'axios';
import { checkHistory, checkLikes, checkWatchLater } from './utils';

export const handleFetchVideos = async (url) => {
   const response = await axios({ method: 'GET', url: url });

   if (response.status === 200 || response.status === 201) {
      return response;
   } else {
      throw new Error('Failed to fetch videos');
   }
};

export const handleAddRemoveLike = async ({
   state,
   dispatch,
   video,
   notify,
}) => {
   if (checkLikes(state, video).length === 0) {
      try {
         await axios({
            method: 'POST',
            url: `https://driftview-backend.duhbhavesh.repl.co/liked`,
            data: {
               _id: video.id,
            },
         });

         dispatch({ type: 'ADD_TO_LIKED', payload: video });
         notify('Added to Liked Videos');
      } catch (err) {
         console.log(err);
      }
   } else {
      try {
         await axios({
            method: 'DELETE',
            url: `https://driftview-backend.duhbhavesh.repl.co/liked/${video.id}`,
         });

         dispatch({ type: 'REMOVE_FROM_LIKED', payload: video });
         notify('Removed from Liked Videos');
      } catch (err) {
         console.log(err);
      }
   }
};

export const handleRemoveLike = async ({ dispatch, video }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `https://driftview-backend.duhbhavesh.repl.co/liked/${video.id}`,
      });

      dispatch({ type: 'REMOVE_FROM_LIKED', payload: video });
   } catch (err) {
      console.log(err);
   }
};

export const handleAddRemoveWatchLater = async ({
   state,
   dispatch,
   video,
   notify,
}) => {
   if (checkWatchLater(state, video).length === 0) {
      try {
         await axios({
            method: 'POST',
            url: `https://driftview-backend.duhbhavesh.repl.co/watchlater`,
            data: {
               _id: video.id,
            },
         });

         dispatch({ type: 'ADD_TO_WATCHLATER', payload: video });
         notify('Added to Watch Later');
      } catch (err) {
         console.log(err);
      }
   } else {
      try {
         const { status } = await axios({
            method: 'DELETE',
            url: `https://driftview-backend.duhbhavesh.repl.co/watchlater/${video.id}`,
         });

         if (status === 200 || status === 201) {
            dispatch({ type: 'REMOVE_FROM_WATCHLATER', payload: video });
         }
         notify('Removed from Watch Later');
      } catch (err) {
         console.log(err);
      }
   }
};

export const handleRemoveWatchLater = async ({ dispatch, video }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `https://driftview-backend.duhbhavesh.repl.co/watchlater/${video.id}`,
      });

      dispatch({ type: 'REMOVE_FROM_WATCHLATER', payload: video });
   } catch (err) {
      console.log(err);
   }
};

export const handleAddToHistory = async ({ state, dispatch, video }) => {
   if (checkHistory(state, video)) {
      return null;
   } else {
      try {
         await axios({
            method: 'POST',
            url: `https://driftview-backend.duhbhavesh.repl.co/history`,
            data: {
               _id: video.id,
            },
         });

         dispatch({ type: 'ADD_TO_HISTORY', payload: video });
      } catch (err) {
         console.log(err);
      }
   }
};

export const handleRemoveFromHistory = async ({ dispatch, video }) => {
   try {
      await axios({
         method: 'DELETE',
         url: `https://driftview-backend.duhbhavesh.repl.co/history/${video.id}`,
      });

      dispatch({ type: 'REMOVE_FROM_HISTORY', payload: video });
   } catch (err) {
      console.log(err);
   }
};
