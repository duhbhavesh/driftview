import { useState } from 'react';
import { useData } from '../../../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { LikeButton } from '../../Buttons/LikeButton';
import { WatchLaterButton } from '../../Buttons/WatchLaterButton';
import { PlaylistModal } from '../../PlaylistModal/PlaylistModal';
import { handleAddToHistory } from '../../../utils/requests';
import './VideoDetailCard.css';
import { useAuth } from '../../../context/AuthContext';

export const VideoDetailCard = () => {
   const { state, dispatch } = useData();
   const { videos } = state;
   const {
      authState: { token },
   } = useAuth();

   const { videoID } = useParams();
   const [showModal, setShowModal] = useState(false);
   const navigate = useNavigate();
   const video = videos.find((item) => item.videoId === videoID);

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
                  url={`https://www.youtube.com/watch?v=${video.videoId}`}
                  onPlay={() =>
                     token &&
                     handleAddToHistory({ state, dispatch, video, token })
                  }
               />
            </div>
            <div className='video-player-details'>
               <div className='video-detail-title'>{video.title}</div>
               <div className='video-detail-stats'>
                  <div className='video-detail-date'>{video.publishedDate}</div>
                  <div className='video-detail-actions'>
                     <LikeButton video={video} />
                     <button
                        onClick={() =>
                           token ? handlePlaylist() : navigate('/signin')
                        }
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
