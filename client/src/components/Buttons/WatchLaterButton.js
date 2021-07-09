import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleToggleWatchLater } from '../../utils/requests';
import { checkWatchLater } from '../../utils/utils';

export const WatchLaterButton = ({ video }) => {
   const { state, dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();
   const notify = (message) => toast.success(message);
   const navigate = useNavigate();

   return (
      <>
         <button
            onClick={() =>
               token
                  ? handleToggleWatchLater({
                       state,
                       dispatch,
                       video,
                       notify,
                       token,
                    })
                  : navigate('/signin')
            }
            className='video-action'>
            <i
               className={
                  checkWatchLater(state, video).length === 0
                     ? 'far fa-clock'
                     : 'fas fa-clock'
               }></i>
         </button>
      </>
   );
};
