import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleDeletePlaylist } from '../../utils/requests';
import { PlaylistCard } from '../Cards/PlaylistCard/PlaylistCard';
import './Playlist.css';

export const Playlist = ({ playlist }) => {
   const { dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();
   const notify = (message) => toast.success(message);

   return (
      <>
         <div className='playlist'>
            <div className='playlist-header'>
               <div className='playlist-title'>{playlist.playlistName}</div>
               <button
                  className='btn btn-playlist'
                  onClick={() => {
                     handleDeletePlaylist({ dispatch, token, playlist });
                     notify('Playlist Deleted');
                  }}>
                  <i className='fas fa-trash-alt'></i>
               </button>
            </div>
            <div className='playlist-box'>
               {playlist.videos.length > 0 ? (
                  <div className='playlist-videos'>
                     <div className='playlist-lists'>
                        {playlist.videos.map((playlist) => {
                           return (
                              <div className='playlist-card' key={playlist}>
                                 <PlaylistCard playlistCard={playlist} />
                              </div>
                           );
                        })}
                     </div>
                  </div>
               ) : (
                  <div className='playlist-empty'>Playlist is Empty</div>
               )}
            </div>
         </div>
      </>
   );
};
