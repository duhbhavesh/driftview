import { useData } from '../../context/DataContext';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VideoDetailCard.css';

export const VideoDetailCard = () => {
   const { state, dispatch } = useData();
   const { videos, videoLiked } = state;
   const { videoID } = useParams();

   const video = videos.find((one) => one.id === videoID);

   const searchLikes = videoLiked.filter((item) => item.id === video.id);

   const handleLikedVideo = (video) => {
      if (searchLikes.length === 0) {
         return dispatch({ type: 'ADD_TO_LIKED', payload: video });
      } else {
         return dispatch({ type: 'REMOVE_FROM_LIKED', payload: video });
      }
   };

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
                     <button
                        onClick={() => handleLikedVideo(video)}
                        className='video-action'>
                        <i
                           className={
                              searchLikes.length === 0
                                 ? 'far fa-heart'
                                 : 'fas fa-heart'
                           }></i>
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
