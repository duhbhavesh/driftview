import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import './WatchLater.css';

export const WatchLater = () => {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'></div>
         </div>
      </>
   );
};
