import { useData } from '../../context/DataContext';
import { Card } from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './LikedVideos.css';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';

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
               <div className='wrapper-liked'>
                  <div className='title'>Liked Videos</div>
                  <div className='liked-videos'>
                     {videoLiked.map((video) => {
                        return (
                           <>
                              <div className='video-card'>
                                 <Link to={`/watch/${video.id}`}>
                                    <Card key={video.id} video={video} />
                                 </Link>
                              </div>
                           </>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
