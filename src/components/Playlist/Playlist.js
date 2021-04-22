import { useData } from '../../context/DataContext';
import { PlaylistCard } from '../PlaylistCard/PlaylistCard';
import './Playlist.css';

export const Playlist = ({ current }) => {
   const { dispatch } = useData();
   return (
      <>
         <div className='playlist'>
            <div className='playlist-header'>
               <div className='playlist-title'>{current.name}</div>
               <button
                  className='btn btn-playlist'
                  onClick={() =>
                     dispatch({ type: 'DELETE_PLAYLIST', payload: current })
                  }>
                  <i className='fas fa-trash-alt'></i>
               </button>
            </div>
            <div className='playlist-box'>
               {current.id.length === 0 && (
                  <div className='playlist-empty'>Playlist is Empty</div>
               )}
               <div className='playlist-videos'>
                  {current.id.length !== 0 && (
                     <div className='playlist-lists'>
                        {current.id.map((playlist) => {
                           return (
                              <div className='playlist-card' key={playlist}>
                                 <PlaylistCard current={playlist} />
                              </div>
                           );
                        })}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
