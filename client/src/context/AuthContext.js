import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthReducer } from '../reducer/AuthReducer';
import { API_ENDPOINT } from '../utils/utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();

   const { token: tokenDetail } = JSON.parse(
      localStorage?.getItem('session'),
   ) || { token: '' };

   const initialState = {
      token: tokenDetail,
      email: '',
      firstName: '',
      lastName: '',
   };

   const [authState, authDispatch] = useReducer(AuthReducer, initialState);

   const handleUserSignUp = async (user, from, notify) => {
      try {
         const response = await axios.post(`${API_ENDPOINT}/api/signup`, user);
         notify('User Signed Up');
         navigate(from);
         return response;
      } catch (error) {
         return error;
      }
   };

   const handleUserSignIn = async (user, authDispatch, from, notify) => {
      try {
         const response = await axios.post(`${API_ENDPOINT}/api/signin`, user);
         if (response.status === 200) {
            localStorage.setItem(
               'session',
               JSON.stringify({ token: response.data.token }),
            );
            notify('Logged In Successfully!');
            authDispatch({
               type: 'SET_USER_SIGNIN',
               payload: response.data.token,
            });
            navigate(from);
         }
         return response;
      } catch (error) {
         console.log(error);
         return error;
      }
   };

   const handleUserSignOut = async (authDispatch, notify) => {
      setTimeout(() => {
         localStorage.removeItem('session');
         notify('Logged Out Successfully!');
         authDispatch({ type: 'SET_USER_SIGNOUT' });
      }, 1000);
   };

   return (
      <AuthContext.Provider
         value={{
            authState,
            authDispatch,
            handleUserSignUp,
            handleUserSignIn,
            handleUserSignOut,
         }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
