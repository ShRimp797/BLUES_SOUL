// import React from 'react';
// import Card from './Card.jsx';
// import { Link } from 'react-router-dom';

// const Shop = () => {
//   const cardData = [
//     { no: 1, title: '해마 키링', animal: '해마', content: '해마에게 기부하기',  price: '8,000', img: '/img/해마키링@1.5x.jpg' },
//     { no: 2, title: '바다거북 키링', animal: '바다거북', content: '바다거북에게 기부하기',  price: '8,000', img: '/img/바다거북 키링.jpg' },
//     { no: 3, title: '도요새 인형', animal: '도요새', content: '도요새에게 기부하기',    price: '13,000', img: '/img/도요새인형.jpg' },
//     { no: 4, title: '검은머리갈매기 인형', animal: '검은머리갈매기', content: '검은머리갈매기에게 기부하기', price: '15,000', img: '/img/갈매기인형.jpg' },
//     { no: 5, title: '알락꼬리마도요 인형', animal: '알락꼬리마도요', content: '알락꼬리마도요 인형',  price: '15,000', img: '/img/알락꼬리마도요인형-배경.jpg' },
//     { no: 6, title: '범고래 인형', content: '범고래에게 기부하기', animal: '범고래',     price: '20,000', img: '/img/범고래.jpg' },
//     { no: 7, title: '바다거북 인형', content: '바다거북에게 기부하기', animal: '바다거북',  price: '15,000', img: '/img/바다거북인형.jpg' },
//     { no: 8, title: '해마 인형', content: '해마에게 기부하기',  animal: '해마',  price: '15,000', img: '/img/해마인형@1.5x.jpg' },
//     { no: 9, title: '바다사자 인형', content: '바다사자에게 기부하기', animal: '바다사자', price: '16,000', img: '/img/바다사자 인형.jpg' }
//   ];

//   return (
//     <div style={{ maxWidth: '2000px', margin: '0 auto', padding: '20px', textDecoration: 'none' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>상품 목록</h1>
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         gap: '20px',
//         // backgroundColor: '#ddd',
//         padding: '80px',
//         borderRadius: '10px',
//       }}>
//         {cardData.map(card => (
//           // <Link to = "/detail"><Card key={card.no} card={card} /></Link>

//           <Link to="/detail" state={{ product: card }}  style={{textDecoration: 'none'}}     key={card.no}>
//   <Card card={card} />
// </Link>

//         )) 
        
  
        
        
//         }
//       </div>
//     </div>
//   );
// };

// export default Shop;

/* jsx, css 분리 */

import React from 'react';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
import './Shop.css'; // CSS 파일 import

const Shop = () => {
  const cardData = [
    { no: 1, title: '해마 키링', animal: '해마', content: '해마에게 기부하기',  price: '8,000', img: '/img/해마키링@1.5x.jpg' },
    { no: 2, title: '바다거북 키링', animal: '바다거북', content: '바다거북에게 기부하기',  price: '8,000', img: '/img/바다거북 키링.jpg' },
    { no: 3, title: '도요새 인형', animal: '도요새', content: '도요새에게 기부하기',    price: '13,000', img: '/img/도요새인형.jpg' },
    { no: 4, title: '검은머리갈매기 인형', animal: '검은머리갈매기', content: '검은머리갈매기에게 기부하기', price: '15,000', img: '/img/갈매기인형.jpg' },
    { no: 5, title: '알락꼬리마도요 인형', animal: '알락꼬리마도요', content: '알락꼬리마도요 인형',  price: '15,000', img: '/img/알락꼬리마도요인형-배경.jpg' },
    { no: 6, title: '범고래 인형', content: '범고래에게 기부하기', animal: '범고래',     price: '20,000', img: '/img/범고래.jpg' },
    { no: 7, title: '바다거북 인형', content: '바다거북에게 기부하기', animal: '바다거북',  price: '15,000', img: '/img/바다거북인형.jpg' },
    { no: 8, title: '해마 인형', content: '해마에게 기부하기',  animal: '해마',  price: '15,000', img: '/img/해마인형@1.5x.jpg' },
    { no: 9, title: '바다사자 인형', content: '바다사자에게 기부하기', animal: '바다사자', price: '16,000', img: '/img/바다사자 인형.jpg' }
  ];

  return (
    <div className="shop-container">
      <h1 className="shop-title">SHOP</h1>
      <div className="shop-grid">
        {cardData.map(card => (
          <Link to="/detail" state={{ product: card }} className="card-link" key={card.no}>
            <Card card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

