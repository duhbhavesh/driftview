import './styles.css';
import { useData } from './context/DataContext';
import { useEffect } from 'react';
import { Routes } from './routes/Routes';
import { Toast } from './components/Toast/Toast';
import { Header } from './components/Header/Header';
import { handleFetchVideos } from './utils/requests';

function App() {
   const { dispatch } = useData();

   useEffect(() => {
      (async () => {
         try {
            const {
               data: { videosLiked },
            } = await handleFetchVideos(
               'https://driftview-backend.duhbhavesh.repl.co/liked',
            );
            dispatch({ type: 'SET_VIDEOS_LIKED', payload: videosLiked });
         } catch (err) {
            console.log(err);
         }
      })();

      (async () => {
         try {
            const {
               data: { videosWatchLater },
            } = await handleFetchVideos(
               'https://driftview-backend.duhbhavesh.repl.co/watchlater',
            );
            dispatch({
               type: 'SET_VIDEOS_WATCHLATER',
               payload: videosWatchLater,
            });
         } catch (err) {
            console.log(err);
         }
      })();

      (async () => {
         try {
            const {
               data: { videosHistory },
            } = await handleFetchVideos(
               'https://driftview-backend.duhbhavesh.repl.co/history',
            );
            dispatch({ type: 'SET_VIDEOS_HISTORY', payload: videosHistory });
         } catch (err) {
            console.log(err);
         }
      })();
   }, [dispatch]);

   return (
      <div className='App'>
         <Header />
         <Toast />
         <Routes />
      </div>
   );
}

export default App;
