// import React from 'react';
// import '../css/cart.css';
// import { useLocation, useNavigate, Link } from 'react-router-dom';

// const cart = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product } = location.state || {};

//   // 기본 장바구니 아이템
//   const defaultCartData = [
//     {
//       date: "3개",
//       title: "범고래 인형",
//       no: "50,000 원",
//       img: "/img/범고래.jpg"
//     },
//     {
//       date: "1개",
//       title: "알락꼬리마도요인형",
//       no: "30,000 원",
//       img: "/img/알락꼬리마도요인형.jpg"
//     },
//     {
//       date: "2개",
//       title: "해마키링",
//       no: "30,000 원",
//       img: "/img/해마인형@1.5x.jpg"
//     }
//   ];

//   // 전달된 product가 있으면 cart에 추가
//   const mergedCartData = product
//     ? [
//         ...defaultCartData,
//         {
//           date: "1개",
//           title: product.title,
//           no: product.price + " 원",
//           img: product.img
//         }
//       ]
//     : defaultCartData;

//   const handleOrder = () => {
//     // 주문 페이지로 product 정보와 함께 이동
//     if (product) {
//       navigate("/Order", { state: { product } });
//     } else {
//       navigate("/Order");
//     }
//   };

//   return (
//     <div className="cart-box">
//       <div className="c-title">
//         <h1>장바구니</h1>
//       </div>

//       {mergedCartData.map((cart, index) => (
//         <div className="product" key={index}>
//           <div className="product-box">
//             <p className="tag"><strong>제품명:</strong> {cart.title}</p>
//             <p><strong>개수:</strong> {cart.date}</p>
//             <p><strong>총가격:</strong> {cart.no}</p>
//             <img src={cart.img} alt="제품" className="pro" />
//             <button className="cart-btn">삭제하기</button>
//           </div>
//         </div>
//       ))}
  
//       <button
//         className="order-btn"
        
//         style={{
//           marginTop: '30px',
//           width: '500px',
//           height: '50px',
//           borderRadius: '8px',
//           backgroundColor: '#1B3A4B',
//           color: '#fff',
//           fontSize: '20px',
//           cursor: 'pointer',
//           display: 'flex',
//           textAlign: 'center',
//           alignItems: 'center',
//           justifyContent: 'center',
//           listStyle: 'none'
//         }}
//       >
//         주문하기
//       </button>
//     </div>
//   );
// };

// export default cart;






import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const stored = JSON.parse(localStorage.getItem('cartProduct'));

  if (!stored) return <div className="cart-box"><h1>장바구니가 비어있습니다.</h1></div>;

  const handleOrder = () => navigate('/Order2');

  return (
    <div className="cart-box">
      <div className="c-title"><h1>장바구니</h1></div>
      <div className="product">
        <div className="product-box">
          <p><strong>제품명:</strong> {stored.title}</p>
          <p><strong>수량:</strong> {stored.quantity || 1}개</p>
          <p><strong>크기: 15cm</strong></p>
          <p><strong>총가격:</strong> {stored.price} 원</p>
          <img src={stored.img} alt={stored.title} className='pro'  style={{marginBottom: '30px'}}    />
          <button className="cart-btn">삭제하기</button>
        </div>
      </div>
      <button className="order-btn"   style={{
          marginTop: '30px', width: '500px', height: '50px',
         borderRadius: '8px', backgroundColor: '#1B3A4B',
          color: '#fff', fontSize: '20px', cursor: 'pointer'
     }} onClick={handleOrder}>주문하기</button>
    </div>
  );
};

export default Cart;