import { Link } from 'react-router-dom';
import '../Auth.css';

export const SignUp = () => {
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
                     />
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
                     />
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
                     />
                  </div>
                  <button className='btn btn-primary btn-auth'>Sign up</button>
                  <Link className='auth-link' to='/signin'>
                     <small>Existing User? Login</small>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
