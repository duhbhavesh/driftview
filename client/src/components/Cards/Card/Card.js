import './Card.css';

export const Card = ({ video }) => {
   return (
      <>
         <div className='video'>
            <div className='video-thumb'>
               <img src={video.thumbnail} alt={video.title} />
            </div>
            <div className='video-details'>
               <div className='video-info'>
                  <div className='video-title'>{video.title}</div>
                  <div className='video-channel-name'>{video.channelName}</div>
               </div>
            </div>
         </div>
      </>
   );
};
