import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { handleAddRemoveWatchLater } from '../../utils/requests';
import { checkWatchLater } from '../../utils/utils';

export const WatchLaterButton = ({ video }) => {
   const { state, dispatch } = useData();
   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleAddRemoveWatchLater({ state, dispatch, video, notify })
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
