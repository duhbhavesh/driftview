import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { VideoDetailCard } from '../../components/VideoDetailCard/VideoDetailCard';

export const VideoDetail = () => {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos wrapper-video'>
               <VideoDetailCard />
            </div>
         </div>
      </>
   );
};
