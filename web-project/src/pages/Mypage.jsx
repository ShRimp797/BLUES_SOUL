// import React from 'react'
// import '../css/mypage.css';
// import { Link } from 'react-router-dom';
// const Mypage = () => {
//   return (
//     <div className="mypage">
//         <p className='mypage-title'>마이페이지</p>
//         {/* <p className='maypage-subtitle'>어서오세요!</p> */}
//         <div className="mypage-box">
          
//           <div className="mypage-info-box">

//             <Link to="/OrderDetaile" className='icon-link'>
           
//             <div className="icon-box">
//               <div className="icon-box-con">
//                   <img src="../img/bag.png" alt="아이콘" />
//                   <p>주문내역</p>

//               </div>
//             </div>
//              </Link>

//             <Link to ="/Mypage/User" className='icon-link'>
          
//             <div className="icon-box">
//               <div className="icon-box-con">
//                   <img src="../img/user.png" alt="아이콘" />
//                   <p>회원정보</p>

//               </div>
//             </div>
//               </Link>

//             <Link to="/Donationsuccess" className='icon-link'>
           
//             <div className="icon-box">
//               <div className="icon-box-con">
//                   <img src="../img/donation.png" alt="아이콘" />
//                   <p>후원내역</p>

//               </div>
//             </div>

//              </Link>
          
//           </div>

//         </div>
//          <div className="mypage-box">
          
//           <div className="mypage-info-box">
            
//             <div className="icon-box">
//               <div className="icon-box-con">
//                   <img src="../img/information.png" alt="아이콘" />
//                   <p>문의내역</p>

//               </div>
//             </div>
//             <div className="icon-box">
//               <div className="icon-box-con">
//                   <img src="../img/delivery.png" alt="아이콘" />
//                   <p>배송관리</p>

//               </div>
//             </div>
//             <div className="icon-box">
//               <div className="icon-box-con">
//                   <img src="../img/credit-card.png" alt="아이콘" />
//                   <p>결제정보</p>

//               </div>
//             </div>
          
//           </div>

//         </div>
//     </div>
//   )
// }

// export default Mypage

import React, { useEffect, useState } from 'react';
import '../css/mypage.css';
import { Link, useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // localStorage에서 로그인 사용자 정보 가져오기
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      alert('로그인이 필요합니다.');
      navigate('/login'); // 로그인 페이지로 이동
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  // 로그인이 확인되면 화면 렌더링
  if (!user) return null;

  return (
    <div className="mypage">
      <p className='mypage-title'>마이페이지</p>
      
      <div className="mypage-box">
        <div className="mypage-info-box">
          <Link to="/OrderDetaile" className='icon-link'>
            <div className="icon-box">
              <div className="icon-box-con">
                <img src="../img/bag.png" alt="아이콘" />
                <p>주문내역</p>
              </div>
            </div>
          </Link>

          <Link to="/Mypage/User" className='icon-link'>
            <div className="icon-box">
              <div className="icon-box-con">
                <img src="../img/user.png" alt="아이콘" />
                <p>회원정보</p>
              </div>
            </div>
          </Link>

          <Link to="/Donationsuccess" className='icon-link'>
            <div className="icon-box">
              <div className="icon-box-con">
                <img src="../img/donation.png" alt="아이콘" />
                <p>후원내역</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mypage-box">
        <div className="mypage-info-box">
          <div className="icon-box">
            <div className="icon-box-con">
              <img src="../img/information.png" alt="아이콘" />
              <p>문의내역</p>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon-box-con">
              <img src="../img/delivery.png" alt="아이콘" />
              <p>배송관리</p>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon-box-con">
              <img src="../img/credit-card.png" alt="아이콘" />
              <p>결제정보</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
