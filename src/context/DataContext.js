import { createContext, useContext, useReducer } from 'react';
import { DataReducer } from '../reducer/DataReducer';

export const DataContext = createContext();

const initialState = {
   videoList: [],
   videoLiked: [],
   videoPlaylist: [],
   sidebar: false,
};

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(DataReducer, initialState);

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);
