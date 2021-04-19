import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Explore } from './pages/Explore/Explore';

function App() {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/explore' element={<Explore />} />
         </Routes>
      </div>
   );
}

export default App;
