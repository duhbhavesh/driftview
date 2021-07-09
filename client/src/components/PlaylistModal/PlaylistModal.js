import { useState } from 'react';
import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import {
   handleAddNewPlaylist,
   handleAddVideoToPlaylist,
   handleRemoveVideoFromPlaylist,
} from '../../utils/requests';
import { checkPlaylistVideosId } from '../../utils/utils';
import './PlaylistModal.css';

export const PlaylistModal = ({ video, showModal, setShowModal }) => {
   const {
      state: { playlists },
      dispatch,
   } = useData();
   const {
      authState: { token },
   } = useAuth();
   const [inputValue, setInputValue] = useState('');

   const notify = (message) => toast.success(message);

   const handleCheckBox = (item) => {
      if (checkPlaylistVideosId(item, video.id) === true) {
         handleRemoveVideoFromPlaylist({ dispatch, item, video, token });
         notify(`Removed from the ${item.playlistName} Playlist`);
      } else {
         handleAddVideoToPlaylist({ dispatch, item, video, token });
         notify(`Added to the ${item.playlistName} Playlist`);
      }
   };

   return (
      <>
         <div
            onClick={() => setShowModal(false)}
            className={showModal ? 'modal-overlay open' : 'modal-overlay'}
            id='modal-overlay'></div>
         <div className={showModal ? 'modal open' : 'modal'} id='modal'>
            <div className='modal-header'>
               <h3 className='modal-title'>Add to Playlist</h3>
               <button
                  onClick={() => setShowModal(false)}
                  type='button'
                  className='btn btn-link btn-close'>
                  &times;
               </button>
            </div>
            <div className='modal-options'>
               {playlists?.map((item, index) => {
                  return (
                     <div className='modal-option' key={index}>
                        <label
                           className='modal-label'
                           htmlFor={`checkbox${index}`}>
                           <input
                              className='modal-checkbox'
                              onChange={() => handleCheckBox(item)}
                              type='checkbox'
                              name='checkbox'
                              id={`checkbox${index}`}
                              checked={checkPlaylistVideosId(item, video.id)}
                           />
                           {item?.playlistName}
                        </label>
                     </div>
                  );
               })}
            </div>
            <form
               className='modal-form'
               onSubmit={(e) =>
                  handleAddNewPlaylist({
                     e,
                     dispatch,
                     token,
                     setInputValue,
                     inputValue,
                  })
               }>
               <input
                  className='modal-input'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type='text'
                  placeholder='Create a new playlist'
               />
               <button className='modal-btn' type='submit'>
                  Create
               </button>
            </form>
         </div>
      </>
   );
};
