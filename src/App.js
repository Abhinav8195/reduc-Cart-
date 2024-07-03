
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Index from './components/Header/Index';

function App() {
  return (
    <div>
     <Index/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
     </Routes>
    </div>
  );
}

export default App;
