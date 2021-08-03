import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MobileNavData, DesktopNavData } from '../Header/HeaderData';
import './Header.css';
import { SidebarMobile } from '../Sidebar/SidebarMobile';
import Logo from '../../logo.svg';
import { SearchBarDesktop } from '../SearchBar/SearchBarDesktop';
import { SearchBarMobile } from '../SearchBar/SearchBarMobile';

export const Header = () => {
   const [showSidebar, setShowSidebar] = useState(false);
   const handleSidebar = () => setShowSidebar(true);

   const [searchInput, setSearchInput] = useState('');
   const navigate = useNavigate();

   return (
      <>
         <div className='container-nav'>
            <nav className='navbar-sm'>
               <div className='navbar'>
                  <ul className='nav-items'>
                     <li className='nav-item navbar-link' id='nav-item-sidebar'>
                        <button
                           onClick={handleSidebar}
                           className='btn btn-link btn-bars'
                           id='sidebarCollapse'>
                           <i className='fas fa-bars'></i>
                        </button>
                     </li>
                     <li className='nav-item navbar-link'>
                        <Link className='navbar-brand nav-item-link' to='/'>
                           <img
                              src={Logo}
                              alt='Driftkart logo'
                              id='navbar-logo'
                           />
                           <span>DriftView</span>
                        </Link>
                     </li>
                  </ul>
                  <ul className='nav-items'>
                     {MobileNavData.map((item) => (
                        <li key={item.index} className='nav-item navbar-link'>
                           <Link className='nav-item-link' to={item.link}>
                              <i className={item.iconClassName}></i>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <SearchBarMobile
                  setSearchInput={setSearchInput}
                  searchInput={searchInput}
                  navigate={navigate}
               />
            </nav>

            <nav className='navbar navbar-md'>
               <Link className='navbar-brand navbar-link nav-item-link' to='/'>
                  <img src={Logo} alt='Driftkart logo' id='navbar-logo' />

                  <span>Driftview</span>
               </Link>
               <SearchBarDesktop
                  setSearchInput={setSearchInput}
                  searchInput={searchInput}
                  navigate={navigate}
               />
               <ul className='nav-items'>
                  {DesktopNavData.map((item) => (
                     <li key={item.index} className='nav-item navbar-link'>
                        <Link className='nav-item-link' to={item.link}>
                           <i className={item.iconClassName}></i>
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>

         <SidebarMobile
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
         />
      </>
   );
};
