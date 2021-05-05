import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { LikeButton } from '../Buttons/LikeButton';
import { WatchLaterButton } from '../Buttons/WatchLaterButton';
import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal';
import { handleAddToHistory } from '../../utils/requests';
import './VideoDetailCard.css';

export const VideoDetailCard = () => {
   const { state, dispatch } = useData();
   const { videoID } = useParams();
   const [showModal, setShowModal] = useState(false);
   const { videos } = state;

   const video = videos.find((item) => item.watchID === videoID);

   const handlePlaylist = () => setShowModal(true);

   return (
      <>
         <div className='video-detail-card'>
            <div className='video-player'>
               <ReactPlayer
                  width='100%'
                  height='360px'
                  controls
                  playing={true}
                  url={`https://www.youtube.com/watch?v=${video.watchID}`}
                  onPlay={() => handleAddToHistory({ state, dispatch, video })}
               />
            </div>
            <div className='video-player-details'>
               <div className='video-detail-title'>{video.title}</div>
               <div className='video-detail-stats'>
                  <div className='video-detail-date'>{video.publishedDate}</div>
                  <div className='video-detail-actions'>
                     <LikeButton video={video} />
                     <button
                        onClick={() => handlePlaylist()}
                        className='video-action'>
                        <i className='fas fa-list'></i>
                     </button>
                     <WatchLaterButton video={video} />
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
