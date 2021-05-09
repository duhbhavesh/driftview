import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { handleRemoveLike } from '../../utils/requests';
import { Card } from '../Cards/Card/Card';

export const LikedVideos = () => {
   const { state, dispatch } = useData();
   const { videosLiked } = state;

   return (
      <>
         <div className='wrapper-video-list'>
            <div className='title'>Liked Videos</div>
            {videosLiked.length > 0 ? (
               <div className='video-list'>
                  {videosLiked.map((video) => {
                     return (
                        <div key={video.id} className='video-card'>
                           <div
                              onClick={() =>
                                 handleRemoveLike({ dispatch, video })
                              }
                              className='video-remove'>
                              &times;
                           </div>
                           <Link to={`/watch/${video.watchID}`}>
                              <Card key={video.id} video={video} />
                           </Link>
                        </div>
                     );
                  })}
               </div>
            ) : (
               <div className='empty'>You haven't liked any video yet.</div>
            )}
         </div>
      </>
   );
};
