import './styles.css';
import { useData } from './context/DataContext';
import { useEffect } from 'react';
import { Routes } from './routes/Routes';
import { Toast } from './components/Toast/Toast';
import { Header } from './components/Header/Header';
import {
   handleGetUserData,
   handleGetPlaylistData,
   handleGetUserDetails,
} from './utils/requests';
import { useAuth } from './context/AuthContext';

function App() {
   const { dispatch } = useData();
   const {
      authState: { token },
      authDispatch,
   } = useAuth();

   useEffect(() => {
      (async function () {
         if (token) {
            handleGetUserData(dispatch, token);
            handleGetPlaylistData(dispatch, token);
            handleGetUserDetails(authDispatch, token);
         }
      })();
   }, [dispatch, authDispatch, token]);

   return (
      <div className='App'>
         <Header />
         <Toast />
         <Routes />
      </div>
   );
}

export default App;
