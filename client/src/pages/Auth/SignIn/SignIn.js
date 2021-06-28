import { Link } from 'react-router-dom';
import '../Auth.css';

export const SignIn = () => {
   return (
      <>
         <div className='container'>
            <div className='container-auth'>
               <div className='card-auth'>
                  <h3 className='title-auth'>Log In to Driftview</h3>
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
                  <button className='btn btn-primary btn-auth '>Log In</button>
                  <Link className='auth-link' to='/signup'>
                     <small>New to Driftview? Create an account</small>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
