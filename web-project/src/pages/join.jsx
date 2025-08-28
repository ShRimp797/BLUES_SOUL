import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/join.css';





const Join = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    alert("회원가입이 완료되었습니다.");
    navigate("/Login");
  };





  return (
    <>
       <div className="j-j">
        <h1>회원가입</h1>
        <div className="j-j-info">
          <p>회원가입 정보</p>
          <p>주문내역 확인 등 마이페이지 이용 시 꼭 필요한 정보입니다.</p>
    </div>
          <div className="j-info">

            <div className="j-name">

            <div className="name">
              <p>이름</p>
              <input type="text" className="j-name2" id="j-name2" autoFocus />
            </div>

            </div>
            <div className="j-number">
              <p>휴대전화</p>
              <div className="number-box">
                <input type="text" className="j-number2" autoFocus />
                <input type="text" className="j-number2" autoFocus />
                <input type="text" className="j-number2" autoFocus />
              </div>
            </div>

            <div className="j-number">
              <p>생년월일</p>
              <div className="number-box">
                <input type="text" className="j-number2" autoFocus />년
                <input type="text" className="j-number2" autoFocus />월
                <input type="text" className="j-number2" autoFocus />일
            
              </div>
            </div>
              
            <div className="j-email">
              <p>이메일</p>
              <input type="text" className="email" id="email" autoFocus />
            </div>
            
            <div className="j-id">
              <p>아이디</p>
              <input type="text" className="j-id" id="j-id" autoFocus />
            </div>
           
            <div className="j-password">
              <p>비밀번호</p>
              <input type="text" className="j-pw" id="j-pw" autoFocus />
            </div>

            <div className="j-post">
              <p>우편번호</p>
              <input type="text" className="jpost" id="jpost" autoFocus />
            </div>
            <div className="j-address">
              <p>주소</p>
              <input type="text" className="address" id="address" autoFocus />
            </div>
            <div className="j-address">
              <p>상세주소</p>
              <input type="text" className="address" id="address" autoFocus />
            </div>
            <div className="j-delivery">
              <p>배송요청사항</p>
              <input type="text" className="delivery" id="delivery" autoFocus />
            </div>
          </div>


        </div>
        
{/* 
                                         <div className="submit-btn-wrapper2">
                                            <Link to="/Login" className="submit-btn-link2">
                                                <p>가입하기</p>
                                            </Link>
                                        </div> */}



          {/* 가입 버튼 */}
      <div className="submit-btn-wrapper2-1">
        <button className="submit-btn-link2-1"  onClick={handleJoinClick}>
          가입하기
        </button>
      </div>



</>
  )
}

export default Join;
