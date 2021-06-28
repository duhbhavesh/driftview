import { createContext, useReducer } from 'react';
import { AuthReducer } from '../reducer/AuthReducer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const { token: tokenDetail } = JSON.parse(
      localStorage?.getItem('session'),
   ) || { token: '' };

   const initialState = {
      token: tokenDetail,
   };

   const [state, dispatch] = useReducer(AuthReducer, initialState);

   return (
      <AuthContext.Provider value={{ state, dispatch }}>
         {children}
      </AuthContext.Provider>
   );
};
