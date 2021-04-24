import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './SidebarDesktop.css';

export const SidebarDesktop = () => {
   return (
      <>
         <nav className='sidebar-nav-md'>
            <ul className='sidebar-links'>
               {SidebarData.map((item) => (
                  <Link key={item.index} to={item.link}>
                     <li className='sidebar-item-link'>
                        <i className={item.iconClassName}></i>
                        <span className='sidebar-link'>{item.title}</span>
                     </li>
                  </Link>
               ))}
            </ul>
         </nav>
      </>
   );
};
