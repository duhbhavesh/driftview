import { Routes as Routing, Route } from 'react-router-dom';
import { Explore } from '../pages/Explore/Explore';
import { VideoDetail } from '../pages/VideoDetail/VideoDetail';
import { Liked } from '../pages/Liked/Liked';
import { History } from '../pages/History/History';
import { Playlists } from '../pages/Playlists/Playlists';
import { WatchLater } from '../pages/WatchLater/WatchLater';
import { Library } from '../pages/Library/Library';

export const Routes = () => {
   return (
      <Routing>
         <Route path='/' element={<Explore />} />
         <Route path='/home' element={<Explore />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/watch/:videoID' element={<VideoDetail />} />
         <Route path='/liked' element={<Liked />} />
         <Route path='/history' element={<History />} />
         <Route path='/playlist' element={<Playlists />} />
         <Route path='/watchlater' element={<WatchLater />} />
         <Route path='/library' element={<Library />} />
      </Routing>
   );
};
