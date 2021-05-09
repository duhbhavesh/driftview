import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { handleRemoveWatchLater } from '../../utils/requests';
import { Card } from '../Cards/Card/Card';

export const WatchLaterVideos = () => {
   const { state, dispatch } = useData();
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
                              handleRemoveWatchLater({ dispatch, video })
                           }
                           className='video-remove'>
                           &times;
                        </div>
                        <Link to={`/watch/${video.watchID}`}>
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
