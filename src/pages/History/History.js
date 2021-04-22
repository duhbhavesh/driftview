import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import './History.css';

export const History = () => {
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
