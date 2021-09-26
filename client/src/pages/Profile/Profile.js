import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';
import toast from 'react-hot-toast';

export const Profile = () => {
   const {
      authState: { email, firstName, lastName },
      authDispatch,
      handleUserSignOut,
   } = useAuth();

   const notify = (message) => toast.success(message);

   return (
      <>
         <div className='container'>
            <div className='container-profile'>
               <div className='card-profile'>
                  <h3 className='title-profile'>Profile Details</h3>
                  <div className='input-group profile-info'>
                     <div className='profile-label'>E-mail : </div>
                     <div className='profile-email'>{email}</div>
                  </div>
                  <div className='input-group profile-info'>
                     <div className='profile-label'>First Name : </div>
                     <div className='profile-email'>{firstName}</div>
                  </div>
                  <div className='input-group profile-info'>
                     <div className='profile-label'>Last Name : </div>
                     <div className='profile-email'>{lastName}</div>
                  </div>
                  <button
                     className='btn btn-primary btn-auth'
                     onClick={() => handleUserSignOut(authDispatch, notify)}>
                     Log Out
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};
