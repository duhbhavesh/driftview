import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleRemoveWatchLater } from '../../utils/requests';
import { Card } from '../Cards/Card/Card';

export const WatchLaterVideos = () => {
   const { state, dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();
   const { videosWatchLater } = state;
   return (
      <>
         <div className='wrapper-video-list'>
            <div className='title'>Watch Later</div>
            {videosWatchLater.length > 0 ? (
               <div className='video-list'>
                  {videosWatchLater.map((video) => (
                     <div key={video.id} className='video-card'>
                        <div
                           onClick={() =>
                              handleRemoveWatchLater({ dispatch, video, token })
                           }
                           className='video-remove'>
                           &times;
                        </div>
                        <Link to={`/watch/${video.videoId}`}>
                           <Card key={video.id} video={video} />
                        </Link>
                     </div>
                  ))}
               </div>
            ) : (
               <div className='empty'>This list has no videos.</div>
            )}
         </div>
      </>
   );
};
