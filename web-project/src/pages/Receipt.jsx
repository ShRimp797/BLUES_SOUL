import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Receipt.css';

const cartData = [
  {
    date: "123456-78910",
    title: "범고래 인형",
    no: "50,000 원",
    img: "/img/범고래.jpg"
  },
  {
    date: "123456-78910",
    title: "알락꼬리마도요인형",
    no: "30,000 원",
     img: "/img/알락꼬리마도요인형.jpg"
    
  },
  {
    date: "123456-78910",
    title: "해마키링",
    no: "30,000 원",
     img: "/img/해마인형@1.5x.jpg"
  }
];





const Receipt = () => {
  return (
    <div className="cart-box">
      <div className="c-title">
        <h1>주문내역</h1>
      </div>

      {cartData.map((cart, index) => (
        <div className="product" key={index}>
          <div className="product-box">
            <p className='tag'><strong>제품명:</strong> {cart.title}</p>
            <p><strong>주문번호:</strong> {cart.date}</p>
            <p><strong>개수 : 1개</strong></p>
            <p><strong>크기 : 15cm</strong></p>
            <p><strong>총가격:</strong> {cart.no}</p>
           <img src={cart.img} alt="제품" className='pro'  />
              <button className="Receipt-btn" onClick={() => {
            // localStorage.removeItem('cartData');
            window.location.reload();
          }}>주문취소</button>
              <button className="Receipt-btn" onClick={() => {
            // localStorage.removeItem('cartData');
            window.location.reload();
          }}>배송조회</button>

             
          </div>
       
        </div>

          

      ))}

         <Link to="/">
        <button className="order-btn" style={{
          marginTop: '30px', width: '500px', height: '50px',
           borderRadius: '8px', backgroundColor: '#1B3A4B',
          color: '#fff', fontSize: '20px', cursor: 'pointer'
        }}>홈으로 가기</button>
      </Link>


    </div>
  );
};

export default Receipt