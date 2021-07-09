import { Playlist } from '../../components/Playlist/Playlist';
import { SidebarDesktop } from '../../components/Sidebar/SidebarDesktop';
import { useData } from '../../context/DataContext';

export const Playlists = () => {
   const { state } = useData();
   const { playlists } = state;

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
                     {console.log('playlists', playlists)}
                     {playlists?.map((playlist) => {
                        return (
                           <Playlist key={playlist.id} playlist={playlist} />
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
