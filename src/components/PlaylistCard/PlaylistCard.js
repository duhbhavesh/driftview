import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import './PlaylistCard.css';

export const PlaylistCard = ({ current }) => {
   const { state } = useData();
   const { videos } = state;

   const currentVideo = videos.find((item) => item.id === current);

   return (
      <>
         <div className='video-playlist-card'>
            <Link to={`/watch/${currentVideo.id}`} key={currentVideo.id}>
               <div className='video-thumb'>
                  <img src={currentVideo.thumbnail} alt='' />
               </div>
               <div className='video-title'>{currentVideo.title}</div>
            </Link>
         </div>
      </>
   );
};
