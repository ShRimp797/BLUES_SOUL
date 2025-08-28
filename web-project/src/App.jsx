

// // 수정

// import { useState } from 'react';
// import Header from '../src/components/Header';
// import Footer from '../src/components/Footer';

// import Main from './pages/Main';
// import Story from './pages/Story';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Campaign from './pages/Campaign';
// import Donation from './pages/Donation';
// import Login from './pages/Login';

// import Donationinfo from './pages/Donationinfo';
// import Donationsuccess from './pages/Donationsuccess';
// import Join from './pages/join';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Shop from './pages/shop';
// import Order from './pages/Order';
// import Order2 from './pages/Order2';
// import OrderDetaile from './pages/OrderDetaile';
// import Receipt from './pages/Receipt';
// import DNS from './pages/DNS';
// import Nuser from './pages/Nuser';
// import DonationCheck from './pages/DonationCheck';
// import Mypage from './pages/Mypage';
// import User from './pages/User';
// import Cart2 from './pages/Cart2';
// import OrderDetaile_2 from './pages/OrderDetaile_2';




// function App() {
//   // user 상태: localStorage에서 초기값 가져오기
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem('user')) || null
//   );

//   return (
//     <BrowserRouter>
//       {/* Header에 user 전달 */}
//       <Header user={user} setUser={setUser} />

//       <Routes>
//         <Route path="/Story" element={<Story />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/Shop" element={<Shop />} />
//         <Route path="/OrderDetaile" element={<OrderDetaile />} />
//         <Route path="/Receipt" element={<Receipt />} />
//         <Route path="/DNS" element={<DNS />} />
//         <Route path="/Nuser" element={<Nuser />} />
//         <Route path="/Mypage" element={<Mypage />} />
//         <Route path="/Mypage/User" element={<User />} />
//         <Route path="/Cart2" element={<Cart2 />} />
//         <Route path="/OrderDetaile_2" element={<OrderDetaile_2 />} />

//         <Route path="/Campaign" element={<Campaign />} />
//         <Route path="/Donation" element={<Donation />} />
//         {/* Login에 setUser 전달 */}
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/donationinfo" element={<Donationinfo />} />
//         <Route path="/Donationsuccess" element={<Donationsuccess />} />
//         <Route path="/Join" element={<Join />} />
//         <Route path="/detail" element={<ProductDetail/>} />
//         <Route path="/Order" element={<Order/>} />
//         <Route path="/Order2" element={<Order2 />} />
//         <Route path="/DonationCheck" element={<DonationCheck />} />

//         <Route path="/" element={<Main />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Main from './pages/Main';
import Story from './pages/Story';
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

// ScrollToTop 컴포넌트 App.js 안에 정의
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동시 맨 위로 이동
  }, [pathname]);

  return null;
}

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  return (

    
    




    <BrowserRouter>
      {/* 페이지 이동 시 항상 스크롤 맨 위로 */}
      <ScrollToTop />

      <Header user={user} setUser={setUser} />

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
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/donationinfo" element={<Donationinfo />} />
        <Route path="/Donationsuccess" element={<Donationsuccess />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/detail" element={<ProductDetail/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Order2" element={<Order2 />} />
        <Route path="/DonationCheck" element={<DonationCheck />} />

        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </BrowserRouter>


   
  );
}

export default App;
