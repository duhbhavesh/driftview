import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import '../Auth.css';

const isValidEmail = (email) => {
   const emailRegex = new RegExp('[a-z][0-9]*@gmail.com');
   return emailRegex.test(email);
};

const isValidPassword = (password) => {
   const passwordRegex = new RegExp('[0-9]+');
   return password.length > 6 && passwordRegex.test(password);
};

export const SignUp = () => {
   const { handleUserSignUp } = useAuth();
   const { state } = useLocation();
   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });
   const [error, setError] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });

   const [serverError, setServerError] = useState('');
   const notify = (message) => toast.success(message);
   const navigateToPath = state?.from ? state.from : '/signin';

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormValidate = () => {
      setError({ firstName: '', lastName: '', email: '', password: '' });
      let successValidation = true;
      if (!user.firstName) {
         setError((error) => ({
            ...error,
            firstName: 'Please enter a valid name',
         }));
         successValidation = false;
      }

      if (!user.lastName) {
         setError((error) => ({
            ...error,
            lastName: 'Please enter a valid name',
         }));
         successValidation = false;
      }

      if (!user.email || !isValidEmail(user.email)) {
         setError((error) => ({
            ...error,
            email: 'Please enter a valid email',
         }));
         successValidation = false;
      }

      if (!user.password || !isValidPassword(user.password)) {
         setError((error) => ({
            ...error,
            password:
               'Password must be 6 characters long & must contain Numbers',
         }));
         successValidation = false;
      }

      return successValidation;
   };

   const handleFormSubmit = async () => {
      if (handleFormValidate()) {
         const response = await handleUserSignUp(user, navigateToPath, notify);

         if (response.status === 201) {
            console.log('User Signed Up');
         }

         if (response.status !== 201) {
            setServerError(response.response.data.error);
         }
      }
   };

   return (
      <>
         <div className='container'>
            <div className='container-auth'>
               <div className='card-auth'>
                  <h3 className='title-auth'>Sign Up</h3>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-first-name'>
                        First Name
                     </label>
                     <input
                        className='input-box input-auth'
                        id='input-first-name'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={user.firstName}
                        onChange={handleOnChangeInput}
                     />
                     {error.firstName && <small>*{error.firstName}</small>}
                  </div>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-last-name'>
                        Last Name
                     </label>
                     <input
                        className='input-box input-auth'
                        id='input-last-name'
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={user.lastName}
                        onChange={handleOnChangeInput}
                     />
                     {error.lastName && <small>*{error.lastName}</small>}
                  </div>
                  <div className='input-group'>
                     <label className='input-label' htmlFor='input-email'>
                        E-mail
                     </label>
                     <input
                        className='input-box input-auth'
                        id='input-email'
                        type='email'
                        placeholder='name@gmail.com'
                        name='email'
                        value={user.email}
                        onChange={handleOnChangeInput}
                     />
                     {error.email && <small>*{error.email}</small>}
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
                     {error.password && <small>*{error.password}</small>}
                  </div>
                  <button
                     className='btn btn-primary btn-auth'
                     onClick={handleFormSubmit}>
                     Sign up
                  </button>
                  <small>
                     {serverError && (
                        <span className='server-error'>{serverError}</span>
                     )}
                  </small>
                  <Link className='auth-link' to='/signin'>
                     <small className='account-option'>
                        Existing User? Login
                     </small>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
