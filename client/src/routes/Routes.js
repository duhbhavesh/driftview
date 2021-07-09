import { Routes as Routing, Route } from 'react-router-dom';
import { Explore } from '../pages/Explore/Explore';
import { VideoDetail } from '../pages/VideoDetail/VideoDetail';
import { Liked } from '../pages/Liked/Liked';
import { History } from '../pages/History/History';
import { Playlists } from '../pages/Playlists/Playlists';
import { WatchLater } from '../pages/WatchLater/WatchLater';
import { Library } from '../pages/Library/Library';
import { SignIn } from '../pages/Auth/SignIn/SignIn';
import { SignUp } from '../pages/Auth/SignUp/SignUp';
import { PrivateRoute } from '../pages/Auth/PrivateRoute';
import { Account } from '../pages/Account/Account';

export const Routes = () => {
   return (
      <Routing>
         <Route path='/' element={<Explore />} />
         <Route path='/signin' element={<SignIn />} />
         <Route path='/signup' element={<SignUp />} />
         <Route path='/home' element={<Explore />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/watch/:videoID' element={<VideoDetail />} />
         <Route path='/account' element={<Account />} />
         <PrivateRoute path='/liked' element={<Liked />} />
         <PrivateRoute path='/history' element={<History />} />
         <PrivateRoute path='/playlist' element={<Playlists />} />
         <PrivateRoute path='/watchlater' element={<WatchLater />} />
         <PrivateRoute path='/library' element={<Library />} />
      </Routing>
   );
};
