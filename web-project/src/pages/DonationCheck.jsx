// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../css/DonationCheck.css';


// const donationData = [
//   {
//     date: "2025-07-01",
//     title: "검은머리갈매기 지켜주기 캠페인",
//     no: "1234567897-548521",
//     money: "100,000",
//     season: "정기"
    
//   },
//   {
//     date: "2025-06-15",
//     title: "플라스틱 없는 바다 만들기 캠페인",
//     no: "9876543210-112233",
//      money: "50,000",
//      season: "정기"
//   },
//   {
//     date: "2025-05-30",
//     title: "해양 생물 보호 후원",
//     no: "5678901234-778899",
//      money: "10,000",
//      season: "일시"
//   }
// ];

// const DonationCheck = () => {
//   return (
//     <div className="Dn-box">
//       <div className="dn-title">
//         <h1>결제확인</h1>
//         <p>※ 후원한 캠페인과 금액을 확인해 주세요.</p>
//       </div>

//       {donationData.map((donation, index) => (
//         <div className="Donation2" key={index}>
//           <div className="DoNation-box">
//             <p className='tag'><strong>기부캠페인:</strong> {donation.title}</p>
//             <p><strong>후원일자: </strong> {donation.date}</p>
//             <p><strong>후원번호: </strong> {donation.no}</p>
//             <p><strong>후원주기: </strong> {donation.season}</p>
//             <p><strong>후원금액: </strong> {donation.money} 원</p>
//               <button className="cart-btn" onClick={() => {
//             // localStorage.removeItem('cartProduct');
//             window.location.reload();
//           }}>후원취소</button>
      
//           </div>
       
//         </div>

          

//       ))}

//          <Link to="/Donationsuccess">
//         <button className="order-btn" style={{
//           marginTop: '30px', width: '500px', height: '50px',
//            borderRadius: '8px', backgroundColor: '#1B3A4B',
//           color: '#fff', fontSize: '20px', cursor: 'pointer'
//         }}>후원내역으로 가기</button>
//       </Link>


//     </div>
//   );
// };

// export default DonationCheck

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/DonationCheck.css';

const initialDonationData = [
  {
    date: "2025-07-01",
    title: "검은머리갈매기 지켜주기 캠페인",
    no: "1234567897-548521",
    money: "100,000",
    season: "정기"
  },
  {
    date: "2025-06-15",
    title: "플라스틱 없는 바다 만들기 캠페인",
    no: "9876543210-112233",
    money: "50,000",
    season: "정기"
  },
  {
    date: "2025-05-30",
    title: "해양 생물 보호 후원",
    no: "5678901234-778899",
    money: "10,000",
    season: "일시"
  }
];

const DonationCheck = () => {
  const [donations, setDonations] = useState(initialDonationData);

  const handleCancel = (indexToRemove) => {
    const updated = donations.filter((_, index) => index !== indexToRemove);
    setDonations(updated);
  };

  return (
    <div className="Dn-box">
      <div className="dn-title">
        <h1>결제확인</h1>
        <p>※ 후원한 캠페인과 금액을 확인해 주세요.</p>
      </div>

      {donations.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>후원 내역이 없습니다.</p>
      ) : (
        donations.map((donation, index) => (
          <div className="Donation2" key={index}>
            <div className="DoNation-box">
              <p className='tag'><strong>기부캠페인:</strong> {donation.title}</p>
              <p><strong>후원일자: </strong> {donation.date}</p>
              <p><strong>후원번호: </strong> {donation.no}</p>
              <p><strong>후원주기: </strong> {donation.season}</p>
              <p><strong>후원금액: </strong> {donation.money} 원</p>
              <button className="cart-btn" onClick={() => handleCancel(index)}>후원취소</button>
            </div>
          </div>
        ))
      )}

      <Link to="/Donationsuccess">
        <button className="order-btn" style={{
          marginTop: '30px',
          marginRight: '50px',
          width: '300px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#1B3A4B',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer'
        }}>
          후원내역으로 가기
        </button>
      </Link>

      <Link to="/">
        <button className="order-btn" style={{
          marginTop: '30px',
          width: '300px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#1B3A4B',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer'
        }}>
         홈으로 가기
        </button>
      </Link>
    </div>
  );
};

export default DonationCheck;
