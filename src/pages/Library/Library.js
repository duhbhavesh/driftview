import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import './Library.css';

export const Library = () => {
   const { state } = useData();
   const { videoLiked, videoWatchLater } = state;

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <div className='wrapper-video-list'>
                  <div className='title'>Liked Videos</div>
                  {videoLiked.length > 0 ? (
                     <div className='video-list'>
                        {videoLiked.map((video) => (
                           <div key={video.id} className='video-card'>
                              <Link to={`/watch/${video.id}`}>
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
                  {videoWatchLater.length > 0 ? (
                     <div className='video-list'>
                        {videoWatchLater.map((video) => (
                           <div key={video.id} className='video-card'>
                              <Link to={`/watch/${video.id}`}>
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
