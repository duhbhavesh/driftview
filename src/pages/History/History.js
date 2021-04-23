import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './History.css';

export const History = () => {
   const { state } = useData();
   const { videoHistory } = state;

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <div className='wrapper-video-list'>
                  <div className='title'>History</div>
                  {videoHistory.length > 0 ? (
                     <div className='video-list'>
                        {videoHistory.map((video) => (
                           <div key={video.id} className='video-card'>
                              <Link to={`/watch/${video.id}`}>
                                 <Card key={video.id} video={video} />
                              </Link>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className='empty'>This list has no videos.</div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
