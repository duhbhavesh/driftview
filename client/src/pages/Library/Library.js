import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import './Library.css';
import {
   handleRemoveWatchLater,
   handleRemoveFromHistory,
   handleRemoveLike,
} from '../../utils/requests';

export const Library = () => {
   const { state, dispatch } = useData();
   const { videosLiked, videosWatchLater, videosHistory } = state;

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <div className='wrapper-video-list'>
                  <div className='title'>Liked Videos</div>
                  {videosLiked.length > 0 ? (
                     <div className='video-list'>
                        {videosLiked.map((video) => (
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
                        ))}
                     </div>
                  ) : (
                     <div className='empty'>
                        You haven't liked any video yet.
                     </div>
                  )}
               </div>

               <div className='wrapper-video-list'>
                  <div className='title'>Watch Later</div>
                  {videosWatchLater.length > 0 ? (
                     <div className='video-list'>
                        {videosWatchLater.map((video) => (
                           <div key={video.id} className='video-card'>
                              <div
                                 onClick={() =>
                                    handleRemoveWatchLater({
                                       dispatch,
                                       video,
                                    })
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

               <div className='wrapper-video-list'>
                  <div className='title'>History</div>
                  {videosHistory.length > 0 ? (
                     <div className='video-list'>
                        {videosHistory.map((video) => (
                           <div key={video.id} className='video-card'>
                              <div
                                 onClick={() =>
                                    handleRemoveFromHistory({ dispatch, video })
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
            </div>
         </div>
      </>
   );
};
