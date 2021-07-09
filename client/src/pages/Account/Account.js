import { useAuth } from '../../context/AuthContext';
import { SignIn } from '../Auth/SignIn/SignIn';
import { Profile } from '../Profile/Profile';

export const Account = () => {
   const {
      authState: { token },
   } = useAuth();

   return <>{token ? <Profile /> : <SignIn />}</>;
};
