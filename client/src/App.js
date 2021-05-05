import './styles.css';
import { useData } from './context/DataContext';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Toast } from './components/Toast/Toast';
import { Header } from './components/Header/Header';
import { Explore } from './pages/Explore/Explore';
import { VideoDetail } from './pages/VideoDetail/VideoDetail';
import { LikedVideos } from './pages/LikedVideos/LikedVideos';
import { History } from './pages/History/History';
import { Playlists } from './pages/Playlists/Playlists';
import { WatchLater } from './pages/WatchLater/WatchLater';
import { Library } from './pages/Library/Library';
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
   }, [dispatch]);

   useEffect(() => {
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
   }, [dispatch]);

   useEffect(() => {
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
         <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/home' element={<Explore />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/watch/:videoID' element={<VideoDetail />} />
            <Route path='/liked' element={<LikedVideos />} />
            <Route path='/history' element={<History />} />
            <Route path='/playlist' element={<Playlists />} />
            <Route path='/watchlater' element={<WatchLater />} />
            <Route path='/library' element={<Library />} />
         </Routes>
      </div>
   );
}

export default App;
