

//팝업 수정

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/order2.css';

const Order2 = () => {
  const [selectedCycle, setSelectedCycle] = useState(null);         // 정기/일시
  const [selectedAmount, setSelectedAmount] = useState(null);       // 금액
  const [selectedPayment, setSelectedPayment] = useState(null);     // 결제수단
  const [selectedDon, setSelectedDon] = useState(null);             // 결제수단

  const location = useLocation();
  const navigate = useNavigate();
  const product = JSON.parse(localStorage.getItem('cartProduct'));

  const [formData, setFormData] = useState({
    name: '',
    phone1: '',
    phone2: '',
    phone3: '',
    email: '',
    postcode: '',
    address: '',
    detailAddress: '',
    request: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//  const handleSubmit = () => {
//   // 필수 정보 확인
//   if (
//     !formData.name.trim() ||
//     !formData.phone1.trim() ||
//     !formData.phone2.trim() ||
//     !formData.phone3.trim() ||
//     !formData.email.trim() ||
//     !formData.postcode.trim() ||
//     !formData.address.trim() ||
//     !formData.detailAddress.trim()
//   ) {
//     alert("정보를 입력해주세요.");
//     return;
//   }

//   // 결제 수단 확인
//   if (!selectedPayment) {
//     alert("결제방식을 선택해주세요.");
//     return;
//   }

//   // 통과 시 주문 완료 처리
//   alert("주문이 완료되었습니다. 주문내역을 꼭 확인하세요!");
//   navigate("/OrderDetaile", { state: { product } });
// };

const handleSubmit = () => {
  // 필수 정보 확인
  if (
    !formData.name.trim() ||
    !formData.phone1.trim() ||
    !formData.phone2.trim() ||
    !formData.phone3.trim() ||
    !formData.email.trim() ||
    !formData.postcode.trim() ||
    !formData.address.trim() ||
    !formData.detailAddress.trim()
  ) {
    alert("정보를 입력해주세요.");
    return;
  }

  // 결제 수단 확인
  if (!selectedPayment) {
    alert("결제방식을 선택해주세요.");
    return;
  }

  // 날짜 + 시간
  const now = new Date();
  const formattedDateTime = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0") + " " +
    String(now.getHours()).padStart(2, "0") + ":" +
    String(now.getMinutes()).padStart(2, "0") + ":" +
    String(now.getSeconds()).padStart(2, "0");

  // 12자리 주문번호 생성
  const orderNumber = Math.floor(100000000000 + Math.random() * 900000000000);

  // 저장할 데이터
  const orderData = {
    ...product,
    date: formattedDateTime,
    orderNumber,
    paymentMethod: selectedPayment
  };

  // 로컬스토리지 저장
  localStorage.setItem('orderData', JSON.stringify(orderData));

  alert("주문이 완료되었습니다. 주문내역을 꼭 확인하세요!");
  navigate("/OrderDetaile", { state: { orderData } });
};


  return (
  <>
    <div className="j-j">

      <h1>결제하기</h1>

      {product && (
        <div className="product-summary">
          <img src={product.img} alt={product.title} style={{ width: '100px' }} />
          <p><strong>상품명:</strong> {product.title}</p>
          <p><strong>수량:</strong> {product.quantity}개</p>
          <p><strong>크기:</strong> {product.size}cm</p>
          <p><strong>총 가격:</strong> {product.totalPrice}</p>
        </div>
      )}

      <div className="line2"></div>

      <div className="j-info">
        <div className="j-name">
          <div className="name">
            <p>이름</p>
            <input type="text" className="j-name2" name="name" value={formData.name} onChange={handleChange} />
          </div>
        </div>

        <div className="j-number">
          <p>휴대전화</p>
          <div className="number-box" style={{marginLeft: ' 60px'}}>
            <input type="text" className="j-number2" name="phone1" value={formData.phone1} onChange={handleChange} />-
            <input type="text" className="j-number2" name="phone2" value={formData.phone2} onChange={handleChange} />-
            <input type="text" className="j-number2" name="phone3" value={formData.phone3} onChange={handleChange} />
          </div>
        </div>

        <div className="j-email">
          <p>이메일</p>
          <input type="text" className="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="j-post">
          <p>우편번호</p>
          <input type="text" className="jpost" name="postcode" value={formData.postcode} onChange={handleChange} />
        </div>

        <div className="j-address">
          <p>주소</p>
          <input type="text" className="address" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="j-address">
          <p>상세주소</p>
          <input type="text" className="address" name="detailAddress" value={formData.detailAddress} onChange={handleChange} />
        </div>

        <div className="j-delivery">
          <p>배송요청사항</p>
          <input type="text" className="delivery" name="request" value={formData.request} onChange={handleChange} />
        </div>
      </div>

      {/* 결제 정보 */}
      <div className="pay">
        <p>결제 정보</p>
        <div className="pay-btn">
          <button
            className={`pay-button ${selectedPayment === '카드' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('카드')}
          >
            신용/체크카드
          </button>
          <button
            className={`pay-button ${selectedPayment === '계좌이체' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('계좌이체')}
          >
            실시간 계좌이체
          </button>
        </div>
      </div>

      <button
        className="order-btn"
        onClick={handleSubmit}
        style={{
          marginTop: '30px',
          width: '500px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#1B3A4B',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          listStyle: 'none'
        }}
      >
        주문하기
      </button>

    </div>  {/* <-- j-j 닫는 태그 */}
  </>
);
};


export default Order2;







