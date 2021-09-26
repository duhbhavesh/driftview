import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import '../Auth.css';

export const SignIn = () => {
   const { handleUserSignIn, authDispatch } = useAuth();
   const { state } = useLocation();

   const [user, setUser] = useState({
      email: '',
      password: '',
   });

   const [serverError, setServerError] = useState('');
   const notify = (message) => toast.success(message);
   const navigateToPath = state?.from ? state.from : '/';

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormSubmit = async () => {
      setServerError('');
      const response = await handleUserSignIn(
         user,
         authDispatch,
         navigateToPath,
         notify,
      );

      if (response.status === 200) {
         console.log('Logged in Successfully!');
      }

      if (response.status !== 200) {
         setServerError(response.response.data.error);
      }
   };

   return (
      <>
         <div className='container'>
            <div className='container-auth'>
               <div className='card-auth'>
                  <h3 className='title-auth'>Log in to Driftview</h3>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-email'>
                        E-mail
                     </label>
                     <input
                        className='input-box input-auth'
                        id='input-email'
                        type='text'
                        placeholder='name@example.com'
                        name='email'
                        value={user.email}
                        onChange={handleOnChangeInput}
                     />
                  </div>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-password'>
                        Password
                     </label>
                     <input
                        className='input-box input-auth'
                        id='input-password'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={user.password}
                        onChange={handleOnChangeInput}
                     />
                  </div>
                  <button
                     className='btn btn-primary btn-auth'
                     onClick={handleFormSubmit}>
                     Log In
                  </button>
                  <small>
                     {serverError && (
                        <span className='server-error'>{serverError}</span>
                     )}
                  </small>
                  <Link className='auth-link' to='/signup'>
                     <small className='account-option'>
                        New to Driftview? Create an account
                     </small>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
