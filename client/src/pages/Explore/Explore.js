import { Link } from 'react-router-dom';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { VideoCard } from '../../components/Cards/VideoCard/VideoCard';
import { useData } from '../../context/DataContext';
import './Explore.css';

export const Explore = () => {
   const { state } = useData();
   const { videos } = state;
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               {videos.map((video) => {
                  return (
                     <div key={video.id} className='video-card'>
                        <Link to={`/watch/${video.videoId}`}>
                           <VideoCard key={video.id} video={video} />
                        </Link>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};
