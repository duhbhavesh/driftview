import { useData } from '../../context/DataContext';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { checkLikes, checkWatchLater, checkHistory } from '../../utils/utils';
import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal';
import './VideoDetailCard.css';
import { useState } from 'react';

export const VideoDetailCard = () => {
   const { state, dispatch } = useData();
   const { videos } = state;
   const { videoID } = useParams();

   const video = videos.find((item) => item.id === videoID);

   const [showModal, setShowModal] = useState(false);

   const handleLikedVideo = () => {
      if (checkLikes(state, video).length === 0) {
         return dispatch({ type: 'ADD_TO_LIKED', payload: video });
      } else {
         return dispatch({ type: 'REMOVE_FROM_LIKED', payload: video });
      }
   };

   const handlePlaylist = () => setShowModal(true);

   const handleWatchLater = () => {
      if (checkWatchLater(state, video).length === 0) {
         return dispatch({ type: 'ADD_TO_WATCHLATER', payload: video });
      } else {
         return null;
      }
   };

   const handleHistory = () => {
      if (checkHistory(state, video)) {
         return null;
      } else {
         return dispatch({ type: 'ADD_TO_HISTORY', payload: video });
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
                  playing={true}
                  url={`https://www.youtube.com/watch?v=${video.id}`}
                  onPlay={() => handleHistory()}
               />
            </div>
            <div className='video-player-details'>
               <div className='video-detail-title'>{video.title}</div>
               <div className='video-detail-stats'>
                  <div className='video-detail-date'>{video.publishedDate}</div>
                  <div className='video-detail-actions'>
                     <button
                        onClick={() => handleLikedVideo()}
                        className='video-action'>
                        <i
                           className={
                              checkLikes(state, video).length === 0
                                 ? 'far fa-heart'
                                 : 'fas fa-heart'
                           }></i>
                     </button>
                     <button
                        onClick={() => handlePlaylist()}
                        className='video-action'>
                        <i className='fas fa-list'></i>
                     </button>
                     <button
                        onClick={() => handleWatchLater()}
                        className='video-action'>
                        <i className='fas fa-clock'></i>
                     </button>
                     <PlaylistModal
                        video={video}
                        showModal={showModal}
                        setShowModal={setShowModal}
                     />
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
