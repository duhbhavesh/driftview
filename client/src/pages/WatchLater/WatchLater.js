import { WatchLaterVideos } from '../../components/Sections/WatchLaterVideos';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';

export const WatchLater = () => {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <WatchLaterVideos />
            </div>
         </div>
      </>
   );
};
