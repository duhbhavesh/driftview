import { useState } from 'react/cjs/react.development';
import { useData } from '../../context/DataContext';
import { checkyPlaylistVideosID } from '../../utils/utils';
import './PlaylistModal.css';

export const PlaylistModal = ({ video, showModal, setShowModal }) => {
   const { state, dispatch } = useData();
   const { videoPlaylist } = state;
   const [inputValue, setInputValue] = useState('');

   const handleNewPlaylist = (e) => {
      e.preventDefault();
      if (inputValue.trim().length === 0) {
         return;
      } else {
         dispatch({ type: 'ADD_NEW_PLAYLIST', payload: inputValue });
         setInputValue('');
      }
   };

   const handleCheckBox = (item) => {
      if (checkyPlaylistVideosID(item.id, video.id) === true) {
         dispatch({
            type: 'REMOVE_FROM_PLAYLIST',
            payload: { name: item.name, id: video.id },
         });
      } else {
         dispatch({
            type: 'ADD_TO_PLAYLIST',
            payload: { name: item.name, id: video.id },
         });
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
               <h3 class='modal-title'>Add to Playlist</h3>
               <button
                  onClick={() => setShowModal(false)}
                  type='button'
                  className='btn btn-link btn-close'>
                  &times;
               </button>
            </div>
            <div className='modal-options'>
               {videoPlaylist.map((item, index) => {
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
                              checked={checkyPlaylistVideosID(
                                 item.id,
                                 video.id,
                              )}
                           />
                           {item.name}
                        </label>
                     </div>
                  );
               })}
            </div>
            <form className='modal-form' onSubmit={(e) => handleNewPlaylist(e)}>
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
