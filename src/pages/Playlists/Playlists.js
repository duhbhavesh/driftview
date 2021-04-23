import { Playlist } from '../../components/Playlist/Playlist';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { useData } from '../../context/DataContext';
import './Playlists.css';

export const Playlists = () => {
   const { state } = useData();
   const { videoPlaylist } = state;

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarDesktop />
            </div>
            <div className='wrapper-videos'>
               <div className='wrapper-playlist'>
                  <div className='title'>Playlists</div>
                  <div className='playlist-video'>
                     {videoPlaylist.map((video) => {
                        return <Playlist key={video.id} current={video} />;
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
