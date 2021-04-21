import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useData } from '../../context/DataContext';
import './VideoDetailCard.css';

export const VideoDetailCard = () => {
   const { state } = useData();
   const { videos } = state;
   const { videoID } = useParams();

   const video = videos.find((one) => one.id === videoID);

   return (
      <>
         <div className='video-detail-card'>
            <div className='video-player'>
               <ReactPlayer
                  width='100%'
                  height='360px'
                  controls
                  url={`https://www.youtube.com/watch?v=${video.id}`}
               />
            </div>
            <div className='video-player-details'>
               <div className='video-detail-title'>{video.title}</div>
               <div className='video-detail-stats'>
                  <div className='video-detail-date'>{video.publishedDate}</div>
                  <div className='video-detail-actions'>
                     <button className='video-action'>
                        <i className='far fa-heart'></i>
                     </button>
                     <button className='video-action'>
                        <i className='fas fa-list'></i>
                     </button>
                     <button className='video-action'>
                        <i className='fas fa-clock'></i>
                     </button>
                  </div>
               </div>
               <div className='video-detail-channel'>
                  <div className='video-channel-info'>
                     <div className='video-avatar'>
                        <img
                           className='video-avatar-img'
                           src={video.channelAvatar}
                           alt=''
                        />
                     </div>
                     <div className='video-channel-name'>
                        {video.channelName}
                     </div>
                  </div>
                  <div className='video-channel-desc'>{video.description}</div>
               </div>
            </div>
         </div>
      </>
   );
};
