import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { LikedVideos } from '../../components/Sections/LikedVideos';

export const Liked = () => {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <LikedVideos />
            </div>
         </div>
      </>
   );
};
