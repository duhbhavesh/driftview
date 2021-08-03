import { useLocation } from 'react-router';
import { useData } from '../../context/DataContext';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { VideoCard } from '../../components/Cards/VideoCard/VideoCard';
import { Link } from 'react-router-dom';
import './SearchResults.css';

export const SearchResults = () => {
   const query = new URLSearchParams(useLocation().search).get('query');
   const { state } = useData();
   const { videos } = state;

   const searchResults = videos.filter(
      (item) =>
         item.title.toLowerCase().includes(query.toLowerCase()) ||
         item.channelName.toLowerCase().includes(query.toLowerCase()),
   );
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               {searchResults.map((video) => {
                  return (
                     <div key={video.id} className='video-card search-card'>
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
