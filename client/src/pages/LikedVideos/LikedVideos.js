import { useData } from '../../context/DataContext';
import { Card } from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import './LikedVideos.css';

export const LikedVideos = () => {
   const { state } = useData();
   const { videoLiked } = state;
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
                        {videoLiked.map((video) => {
                           return (
                              <div key={video.id} className='video-card'>
                                 <Link to={`/watch/${video.id}`}>
                                    <Card key={video.id} video={video} />
                                 </Link>
                              </div>
                           );
                        })}
                     </div>
                  ) : (
                     <div className='empty'>
                        You haven't liked any video yet.
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
