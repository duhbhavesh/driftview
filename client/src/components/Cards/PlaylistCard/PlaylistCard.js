import { Link } from 'react-router-dom';
import './PlaylistCard.css';

export const PlaylistCard = ({ playlistCard }) => {
   return (
      <>
         <div className='video-playlist-card'>
            <Link to={`/watch/${playlistCard?.videoId}`} key={playlistCard?.id}>
               <div className='video-thumb'>
                  <img src={playlistCard.thumbnail} alt={playlistCard?.title} />
               </div>
               <div className='video-title'>{playlistCard?.title}</div>
            </Link>
         </div>
      </>
   );
};
