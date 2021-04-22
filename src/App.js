import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Explore } from './pages/Explore/Explore';
import { VideoDetail } from './pages/VideoDetail/VideoDetail';
import { LikedVideos } from './pages/LikedVideos/LikedVideos';
import { History } from './pages/History/History';
import { Playlists } from './pages/Playlists/Playlists';
import { WatchLater } from './pages/WatchLater/WatchLater';
import { Library } from './pages/Library/Library';

function App() {
   return (
      <div className='App'>
         <Header />
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
