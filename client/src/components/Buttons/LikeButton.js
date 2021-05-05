import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { handleAddRemoveLike } from '../../utils/requests';
import { checkLikes } from '../../utils/utils';

export const LikeButton = ({ video }) => {
   const { state, dispatch } = useData();
   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleAddRemoveLike({ state, dispatch, video, notify })
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
