import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const PrivateRoute = ({ path, ...props }) => {
   const {
      authState: { token },
   } = useAuth();

   return token ? (
      <Route {...props} path={path} />
   ) : (
      <Navigate state={{ from: path }} replace to='/signin' />
   );
};
