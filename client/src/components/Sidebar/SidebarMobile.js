import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { SidebarData } from './SidebarData';
import './SidebarMobile.css';

export const SidebarMobile = ({ showSidebar, setShowSidebar }) => {
   const {
      authState: { token },
      authDispatch,
      handleUserSignOut,
   } = useAuth();

   const notify = (message) => toast.success(message);

   return (
      <>
         <div
            onClick={() => setShowSidebar(false)}
            className={
               showSidebar ? 'sidebar-overlay active' : 'sidebar-overlay'
            }></div>
         <nav className={showSidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
            <div className='sidebar-header'>
               <div className='container-sidebar'>
                  <div className='sidebar-top'>
                     <div className='sidebar-login'>
                        {token ? (
                           <button
                              onClick={() =>
                                 handleUserSignOut(authDispatch, notify)
                              }
                              className='btn btn-primary'>
                              Log Out
                           </button>
                        ) : (
                           <Link className='btn btn-primary' to='/signin'>
                              <i className='fas fas-sidebar fas-sidebar-user fa-user'></i>
                              Log In
                           </Link>
                        )}
                     </div>
                     <div className='sidebar-close'>
                        <button
                           onClick={() => setShowSidebar(false)}
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
