import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { LikedVideos } from '../../components/Sections/LikedVideos';
import { WatchLaterVideos } from '../../components/Sections/WatchLaterVideos';
import { HistoryVideos } from '../../components/Sections/HistoryVideos';

export const Library = () => {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <LikedVideos />
               <WatchLaterVideos />
               <HistoryVideos />
            </div>
         </div>
      </>
   );
};
