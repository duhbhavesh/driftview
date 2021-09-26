import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { handleToggleLike } from '../../utils/requests';
import { checkLikes } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

export const LikeButton = ({ video }) => {
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
                  ? handleToggleLike({
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
                  checkLikes(state, video).length === 0
                     ? 'far fa-heart'
                     : 'fas fa-heart'
               }></i>
         </button>
      </>
   );
};
