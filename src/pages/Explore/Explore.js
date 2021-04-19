import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import './Explore.css';

export const Explore = () => {
   return (
      <>
         <div className='wrapper-videolist'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'></div>
         </div>
      </>
   );
};
