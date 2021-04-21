import { useData } from '../../context/DataContext';
import { Card } from '../../components/Card/Card';
import './LikedVideos.css';
import { Link } from 'react-router-dom';

export const LikedVideos = () => {
   const { state } = useData();
   const { videoLiked } = state;
   return (
      <>
         <div className='title'>Liked Videos</div>
         <div className='liked-videos'>
            {videoLiked.map((video) => {
               return (
                  <>
                     <div className='video-card'>
                        <Link to={`/watch/${video.id}`}>
                           <Card key={video.id} video={video} />
                        </Link>
                     </div>
                  </>
               );
            })}
         </div>
      </>
   );
};
