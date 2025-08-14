import React from 'react'
import '../css/user.css';
import { Link, useNavigate } from 'react-router-dom';
const User = () => {

    const navigate = useNavigate();

  const handleJoinClick = () => {
    alert("수정이 완료되었습니다.");
    navigate("/Mypage");
  };



  return (
    <>
    
    
     <div className="U-j">
        <h1>회원정보</h1>
         
          <div className="U-info">

            <div className="U-name">

            <div className="name">
              <p>이름</p>
              {/* <p>사용자</p> */}
               <input type="text" className="U-name2" id="U-name2" autoFocus />
            </div>

            </div>
            <div className="U-number">
              <p>휴대전화</p>
              <div className="number-box">
                <input type="text" className="U-number2" autoFocus />-
                <input type="text" className="U-number2" autoFocus />-
                <input type="text" className="U-number2" autoFocus />
                
                  
              {/* <p className='U-number2'>010-7777-8888</p>           */}
              </div>
            </div>

            <div className="U-number">
              <p>생년월일</p>
              <div className="number-box">
                <input type="text" className="U-number2" autoFocus />년
                <input type="text" className="U-number2" autoFocus />월
                <input type="text" className="U-number2" autoFocus />일
            
              </div>
            </div>
              
            <div className="U-email">
              <p>이메일</p>
              <input type="text" className="email" id="email" autoFocus />
            </div>
            
         
            <div className="U-password">
              <p>비밀번호</p>
              <input type="text" className="U-pw" id="U-pw" autoFocus />
            </div>
            <div className="U-password">
              <p>비밀번호 확인</p>
              <input type="text" className="U-pw" id="U-pw" autoFocus />
            
            </div>

            <div className="U-post">
              <p>우편번호</p>
              <input type="text" className="Upost" id="Upost" autoFocus />
            </div>
            <div className="U-address">
              <p>주소</p>
              <input type="text" className="address" id="address" autoFocus />
            </div>
            <div className="U-address">
              <p>상세주소</p>
              <input type="text" className="address" id="address" autoFocus />
            </div>
          
          </div>


        </div>

            {/* <div className="submit-btn-wrapper2">
                                            <Link to="/" className="submit-btn-link2">
                                                <p>수정완료</p>
                                            </Link>
                                        </div> */}


                                            <div className="submit-btn-wrapper2">
        <button className="submit-btn-link2"  onClick={handleJoinClick}>
          수정완료
        </button>
      </div>
      </>
  )
}

export default User