import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import { MobileNavData, DesktopNavData } from '../Header/HeaderData';
import './Header.css';

export const Header = () => {
   const [sidebar, setSidebar] = useState(false);
   const handleSidebar = () => setSidebar(!sidebar);

   return (
      <>
         <div className='container-nav'>
            {/* Mobile Nav */}
            <nav className='navbar-sm'>
               <div className='navbar'>
                  <ul className='nav-items'>
                     <li className='nav-item navbar-link'>
                        <button
                           onClick={handleSidebar}
                           className='btn btn-link btn-bars'
                           id='sidebarCollapse'>
                           <i className='fas fa-bars'></i>
                        </button>
                     </li>
                     <li className='nav-item navbar-link'>
                        <a className='navbar-brand nav-item-link' href='/'>
                           DriftView
                        </a>
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
                     placeholder='Search for products...'
                     aria-label='Search'
                  />
                  <button className='btn btn-search' type='submit'>
                     <i className='fas fa-search'></i>
                  </button>
               </form>
            </nav>

            {/* Desktop Nav */}
            <nav className='navbar navbar-md'>
               <Link to='/'>
                  <a
                     className='navbar-brand navbar-link nav-item-link'
                     href='/'>
                     DriftView
                  </a>
               </Link>
               <form className='form-inline'>
                  <input
                     className='input-box form-control'
                     type='search'
                     placeholder='Search for products...'
                     aria-label='Search'
                  />
                  <button className='btn btn-search' type='submit'>
                     <i className='fas fa-search'></i>
                  </button>
               </form>
               <ul className='nav-items'>
                  {DesktopNavData.map((item) => (
                     <li className='nav-item navbar-link'>
                        <Link className='nav-item-link' to={item.link}>
                           <i className={item.iconClassName}></i>
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>

         {/* Mobile Sidebar */}
         <div
            onClick={() => setSidebar(false)}
            className={
               sidebar ? 'sidebar-overlay active' : 'sidebar-overlay'
            }></div>
         <nav className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
            <div className='sidebar-header'>
               <div className='container-sidebar'>
                  <div className='sidebar-top'>
                     <div className='sidebar-login'>
                        <a className='btn btn-primary' href='/'>
                           <i className='fas fas-sidebar fas-sidebar-user fa-user'></i>
                           Log In
                        </a>
                     </div>

                     <div className='sidebar-close'>
                        <button
                           onClick={handleSidebar}
                           type='button'
                           id='sidebarCollapseX'
                           className='btn btn-link btn-close'>
                           <i className='fas fa-times'></i>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

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
