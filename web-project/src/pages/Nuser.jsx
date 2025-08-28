// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../css/Nuser.css';

// const Nuser = () => {
//   return (
//     <>
//        <div className="j-j">
//         <h1>비회원 정보</h1>
//           <p>비회원 정보</p>
//           <p>상품구매 및 후원 시 필요한 정보입니다.</p>

//           <div className="j-info">

//             <div className="j-name">

//             <div className="name">
//               <p>이름</p>
//               <input type="text" className="j-name2" id="j-name2" autoFocus />
//             </div>

//             </div>
//             <div className="j-number">
//               <p>휴대전화</p>
//               <div className="number-box">
//                 <input type="text" className="j-number2" autoFocus />
//                 <input type="text" className="j-number2" autoFocus />
//                 <input type="text" className="j-number2" autoFocus />
//               </div>
//             </div>

//             <div className="j-number">
//               <p>생년월일</p>
//               <div className="number-box">
//                 <input type="text" className="j-number2" autoFocus />년
//                 <input type="text" className="j-number2" autoFocus />월
//                 <input type="text" className="j-number2" autoFocus />일
            
//               </div>
//             </div>
              
//             <div className="j-email">
//               <p>이메일</p>
//               <input type="text" className="email" id="email" autoFocus />
//             </div>
            
//             <div className="j-id">
//               <p>아이디</p>
//               <input type="text" className="j-id" id="j-id" autoFocus />
//             </div>
           
//             <div className="j-password">
//               <p>비밀번호</p>
//               <input type="text" className="j-pw" id="j-pw" autoFocus />
//             </div>

//             <div className="j-post">
//               <p>우편번호</p>
//               <input type="text" className="jpost" id="jpost" autoFocus />
//             </div>
//             <div className="j-address">
//               <p>주소</p>
//               <input type="text" className="address" id="address" autoFocus />
//             </div>
//             <div className="j-address">
//               <p>상세주소</p>
//               <input type="text" className="address" id="address" autoFocus />
//             </div>
//             <div className="j-delivery">
//               <p>배송요청사항</p>
//               <input type="text" className="delivery" id="delivery" autoFocus />
//             </div>
//           </div>


//         </div>
        

//                                          <div className="submit-btn-wrapper2">
//                                             <Link to="/" className="submit-btn-link2">
//                                                 <p>입력완료</p>
//                                             </Link>
//                                             <Link to="/Login" className="submit-btn-link2">
//                                                 <p>취소하기</p>
//                                             </Link>
//                                         </div>


// </>
//   )
// }

// export default Nuser
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Nuser.css';

const Nuser = () => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    alert("비회원가입이 완료되었습니다.");
    navigate("/Login");
  };

  return (
    <div className="form-container">
      <div className="j-j">
        <h1>비회원</h1>
        <div className="j-j-info">
        <p>비회원 정보</p>
        <p>서비스 이용 시 꼭 필요한 정보입니다.</p>
  </div>
        <div className="j-info">
          {/* 이름 */}
          <div className="j-name">
            <div className="name">
              <p>이름</p>
              <input type="text" className="j-name2" id="j-name2" autoFocus />
            </div>
          </div>

          {/* 휴대전화 */}
          <div className="j-number">
            <p>휴대전화</p>
            <div className="number-box">
              <input type="text" className="j-number2" />
              <input type="text" className="j-number2" />
              <input type="text" className="j-number2" />
            </div>
          </div>

          {/* 생년월일 */}
          <div className="j-number">
            <p>생년월일</p>
            <div className="number-box">
              <input type="text" className="j-number2" />년
              <input type="text" className="j-number2" />월
              <input type="text" className="j-number2" />일
            </div>
          </div>

          {/* 이메일 */}
          <div className="j-email">
            <p>이메일</p>
            <input type="text" className="email" />
          </div>

          {/* 아이디 */}
          <div className="j-id">
            <p>아이디</p>
            <input type="text" className="j-id-input" />
          </div>

          {/* 비밀번호 */}
          <div className="j-password">
            <p>비밀번호</p>
            <input type="password" className="j-pw" />
          </div>

          {/* 우편번호 */}
          <div className="j-post">
            <p>우편번호</p>
            <input type="text" className="j-post-input" />
          </div>

          {/* 주소 */}
          <div className="j-address">
            <p>주소</p>
            <input type="text" className="j-address-input" />
          </div>
          <div className="j-address">
            <p>상세주소</p>
            <input type="text" className="j-address-detail" />
          </div>

          {/* 배송 요청사항 */}
          <div className="j-delivery">
            <p>배송요청사항</p>
            <input type="text" className="j-delivery-input" />
          </div>
        </div>

        {/* 가입 버튼 */}
        <div className="submit-btn-wrapper2">
          <button
            className="submit-btn-link2-1"
            onClick={handleNavigateClick}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nuser;
