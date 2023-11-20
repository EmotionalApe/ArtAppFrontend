import './App.css';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtDetails from './pages/ArtDetails';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/artdetail/:id" element={<ArtDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
