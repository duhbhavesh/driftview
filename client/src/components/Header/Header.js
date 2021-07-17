import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileNavData, DesktopNavData } from '../Header/HeaderData';
import './Header.css';
import { SidebarMobile } from '../Sidebar/SidebarMobile';
import Logo from '../../logo.svg';

export const Header = () => {
   const [showSidebar, setShowSidebar] = useState(false);
   const handleSidebar = () => setShowSidebar(true);

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
               <form className='form-inline'>
                  <input
                     className='input-box form-control'
                     type='search'
                     placeholder='Search'
                     aria-label='Search'
                  />
                  <button className='btn btn-search' type='submit'>
                     <i className='fas fa-search'></i>
                  </button>
               </form>
            </nav>

            <nav className='navbar navbar-md'>
               <Link className='navbar-brand navbar-link nav-item-link' to='/'>
                  <img src={Logo} alt='Driftkart logo' id='navbar-logo' />

                  <span>Driftview</span>
               </Link>

               <form className='form-inline'>
                  <input
                     className='input-box form-control'
                     type='search'
                     placeholder='Search'
                     aria-label='Search'
                  />
                  <button className='btn btn-search' type='submit'>
                     <i className='fas fa-search'></i>
                  </button>
               </form>
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
