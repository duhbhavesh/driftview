import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { handleRemoveFromHistory } from '../../utils/requests';
import { Card } from '../Cards/Card/Card';

export const HistoryVideos = () => {
   const { state, dispatch } = useData();
   const { videosHistory } = state;

   const handleHistory = () => {
      return dispatch({ type: 'DELETE_HISTORY' });
   };

   return (
      <>
         <div className='wrapper-video-list'>
            <div className='title'>History</div>
            {videosHistory.length === 0 ? (
               <div></div>
            ) : (
               <div onClick={handleHistory} className='history-clear'>
                  Clear History
               </div>
            )}
            {videosHistory.length > 0 ? (
               <div className='video-list'>
                  {videosHistory.map((video) => (
                     <div key={video.id} className='video-card'>
                        <div
                           onClick={() =>
                              handleRemoveFromHistory({ dispatch, video })
                           }
                           className='video-remove'>
                           &times;
                        </div>
                        <Link to={`/watch/${video.watchID}`}>
                           <Card key={video.id} video={video} />
                        </Link>
                     </div>
                  ))}
               </div>
            ) : (
               <div className='empty'>This list has no videos.</div>
            )}
         </div>
      </>
   );
};
