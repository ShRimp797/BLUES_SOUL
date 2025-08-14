// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Order = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product } = location.state || {};

//   const handleNext = () => {
//     navigate("/Order2", { state: { product } });
//   };

//   if (!product) return <div>주문할 상품이 없습니다.</div>;

//   return (
//     <div className="cart-box">
//       <div className="c-title">
//         <h1>주문하기</h1>
//       </div>

//       <div className="product">
//         <div className="product-box">
//           <p><strong>구매날짜:</strong> {new Date().toISOString().slice(0, 10)}</p>
//           <p className="tag"><strong>제품명:</strong> {product.title}</p>
//           <p><strong>총가격:</strong> {product.price}</p>
//           <img src={product.img} alt="제품" className="pro" />
//           <button className="cart-btn">삭제하기</button>
//         </div>
//       </div>

//       <button className='order-btn' onClick={handleNext}
//         style={{
//           marginTop: '30px', width: '500px', height: '50px',
//           borderRadius: '8px', backgroundColor: '#1B3A4B',
//           color: '#fff', fontSize: '20px', cursor: 'pointer'
//         }}>
//         결제하기
//       </button>
//     </div>
//   );
// };

// export default Order;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  const stored = JSON.parse(localStorage.getItem('cartProduct'));

  if (!stored) return <div>주문할 상품이 없습니다.</div>;

  const handleNext = () => navigate('/Order2');
  const handleNext2 = () => navigate('/shop');

  return (
    <div className="cart-box" >
      <div className="c-title" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'

      }} ><h1 style={{margin: '20px', padding: '0'}}>주문정보</h1>
      <p>선택하신 제품과 수량이 맞는지 확인해주세요</p></div>
      <div className="product">
        <div className="product-box">
          <p><strong>제품명:</strong> {stored.title}</p>
          <p><strong>수량: 1</strong> </p>
          <p><strong>크기: 10cm</strong> </p>
          <p><strong>총가격:</strong> {stored.price}</p>
          <img src={stored.img} alt="제품" className="pro"  style={{marginBottom: '30px'}}  />
        </div>
      </div>
      <button className='order-btn'   style={{
          marginTop: '30px', width: '300px', height: '50px',
          borderRadius: '8px', backgroundColor: '#1B3A4B',
         color: '#fff', fontSize: '20px', cursor: 'pointer', margin: '20px'
      }}           onClick={handleNext}>결제하기</button>
      <button className='order-btn'   style={{
          marginTop: '30px', width: '300px', height: '50px',
          borderRadius: '8px', backgroundColor: '#1B3A4B',
         color: '#fff', fontSize: '20px', cursor: 'pointer'
      }}           onClick={handleNext2}>취소하기</button>
    </div>
  );
};

export default Order;