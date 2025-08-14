import React from 'react';
import { Link } from 'react-router-dom';  // ✅ 링크 이동을 위한 import
import '../css/section3.css';

const cardData = [
  {
    img: "/img/해마인형.jpg",
    title: "해마인형",
    subtitle: "해마에게 기부하기",
    price: "15,000원"
  },
  {
    img: "/img/범고래.jpg",
    title: "범고래 인형",
    subtitle: "범고래에게 기부하기",
    price: "15,000원"
  },
  {
    img: "/img/알락꼬리마도요인형.jpg",
    title: "알락꼬리마도요 인형",
    subtitle: "알락꼬리마도요에게 기부하기",
    price: "15,000원"
  },
  {
    img: "/img/갈매기인형.jpg",
    title: "검은머리갈매기 인형",
    subtitle: "검은머리갈매기에게 기부하기",
    price: "15,000원"
  },
  {
    img: "/img/도요새인형.jpg",
    title: "도요새 인형",
    subtitle: "도요새에게 기부하기",
    price: "15,000원"
  },
];

const Section3 = () => {
  return (
    <div className="slider-container">
      <div className="text-box">
        <h1>MD로 함께하기</h1>
        <p className="text">MD를 통해 다양한 친구들도 만나보고 기부도 해봐요!</p>
      </div>

      <div className="card-box">
        {cardData.map((item, i) => (
          <Link to="/shop" key={i} className="card-link">
            <div className="B">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="text-box2">
                <h3>{item.title}</h3>
                <h5>{item.subtitle}</h5>
                <h3>{item.price}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section3;
