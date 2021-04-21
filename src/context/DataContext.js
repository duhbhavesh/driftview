import data from '../data/data';
import { createContext, useContext, useReducer } from 'react';
import { DataReducer } from '../reducer/DataReducer';

export const DataContext = createContext();

const initialState = {
   videos: data,
   videoLiked: [],
   videoPlaylist: [],
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
