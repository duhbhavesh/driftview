import './VideoCard.css';

export const VideoCard = ({ video }) => {
   return (
      <>
         <div className='video'>
            <div className='video-thumb'>
               <img src={video.thumbnail} alt='' />
            </div>
            <div className='video-details'>
               <div className='video-avatar'>
                  <img
                     className='video-avatar-img'
                     src={video.channelAvatar}
                     alt=''
                  />
               </div>
               <div className='video-info'>
                  <div className='video-title'>{video.title}</div>
                  <div className='video-channel-name'>{video.channelName}</div>
                  <div className='video-published-date'>
                     {video.publishedDate}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
