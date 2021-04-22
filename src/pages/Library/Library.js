import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import './Library.css';

export const Library = () => {
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
