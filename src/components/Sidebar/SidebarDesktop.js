import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './SidebarDesktop.css';

export const SidebarDesktop = () => {
   return (
      <>
         <nav className='sidebar-nav-md'>
            <ul className='sidebar-links'>
               {SidebarData.map((item) => (
                  <li key={item.index} className='sidebar-item-link'>
                     <Link to={item.link}>
                        <i className={item.iconClassName}></i>
                        <span className='sidebar-link'>{item.title}</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
};
