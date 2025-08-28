// import React, { useState } from 'react';
// // 좋아요 아이콘 쓸거면 아래 주석 해제하고 MUI 설치 필요
// import { Favorite, FavoriteBorder } from '@mui/icons-material';

// const Card = ({ card }) => {
//   const { no, title, content, likes, img, price } = card;

//   const [like, setLike] = useState(false);
//   const [count, setCount] = useState(likes);

//   const handleLike = () => {
//     setLike(!like);
//     setCount(!like ? count + 1 : count - 1);
//   };

//   return (
//     <div style={{
//       width: '530px',
//       height: '650px',
//       boxSizing: 'border-box',
//       border: '1px solid #ddd',
//       borderRadius: '10px',
//       overflow: 'hidden',
//       boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
//       margin: '10px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       cursor: 'pointer',
//       textDecoration: 'none',
//       listStyle: 'none'
      
//     }}>
//       <img
//         src={img}
//         alt="상품이미지"
//         style={{
//           width: '450px',
//           height: '450px',
//           objectFit: 'contain',
//           // border: '1px solid #aaa',
//           borderRadius: '8px',
//           marginTop: '20px'
//         }}
//       />

//       <div style={{ padding: '10px', width: '100%' }}>
//         <h3 style={{
//           fontSize: "35px",
//           fontWeight: "bold",
//           marginLeft: '20px',
//            textDecoration: 'none',
//            listStyle: 'none',
//            color: '#000'
//         }}>{title}</h3>

//         <p style={{
//           color: "#ACACAC",
//           marginLeft: '20px',
//           fontSize: '28px',
//         textDecoration: 'none',
//         listStyle: 'none'
//         }}>
//           {content}
//         </p>

//           <h3 style={{
//           fontSize: "35px",
//           fontWeight: "bold",
//           marginLeft: '20px',
//            textDecoration: 'none',
//            listStyle: 'none',
//            color: '#000'
//         }}>{price}</h3>
          



       
//       </div>
//     </div>
//   );
// };

// export default Card;


/*jsx , css 분리*/

import React, { useState } from 'react';
// 좋아요 기능 관련 MUI 아이콘
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import './Card.css'; // 스타일 파일 import

const Card = ({ card }) => {
  const { no, title, content, likes, img, price } = card;

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(likes);

  const handleLike = () => {
    setLike(!like);
    setCount(!like ? count + 1 : count - 1);
  };

  return (
    <div className="cardog">
      <img src={img} alt="상품이미지" className="card-image" />

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        <h3 className="card-price">{price} 원</h3>
        
        
      </div>
    </div>
  );
};

export default Card;
