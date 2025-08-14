import { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer'; // ✅ Footer import

import Main from './pages/Main';
import Story from './pages/Story';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Campaign from './pages/Campaign';
import Donation from './pages/Donation';
import Login from './pages/Login';

import Donationinfo from './pages/Donationinfo';
import Donationsuccess from './pages/Donationsuccess';
import Join from './pages/join';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Shop from './pages/shop';
import Order from './pages/Order';
import Order2 from './pages/Order2';
import OrderDetaile from './pages/OrderDetaile';
import Receipt from './pages/Receipt';
import DNS from './pages/DNS';
import Nuser from './pages/Nuser';
import DonationCheck from './pages/DonationCheck';
import Mypage from './pages/Mypage';
import User from './pages/User';
import Cart2 from './pages/Cart2';
import OrderDetaile_2 from './pages/OrderDetaile_2';




function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        
        <Route path="/Story" element={<Story />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/OrderDetaile" element={<OrderDetaile />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/DNS" element={<DNS />} />
        <Route path="/Nuser" element={<Nuser />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Mypage/User" element={<User />} />
        <Route path="/Cart2" element={<Cart2 />} />
        <Route path="/OrderDetaile_2" element={<OrderDetaile_2 />} />

        <Route path="/Campaign" element={<Campaign />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donationinfo" element={<Donationinfo />} />
        <Route path="/Donationsuccess" element={<Donationsuccess />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/detail" element={<ProductDetail/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Order2" element={<Order2 />} />
        <Route path="/DonationCheck" element={<DonationCheck />} />


        
      

        <Route path="/" element={<Main />} />
      </Routes>

      <Footer /> {/* ✅ 항상 하단에 뜨도록 Routes 바깥에 위치 */}
    </BrowserRouter>
  );
}

export default App;
