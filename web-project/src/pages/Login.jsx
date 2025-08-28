// import React from 'react'
// import '../css/login.css';
// import { Link } from 'react-router-dom';
// const Login = () => {
//   return (
//    <div className="Login-box">
    
//         <h1 id='login_title'>로그인</h1>
    
//      <form className="loginForm">
                   
//                     <div className='login-box2'>
//                         <div className="input">
//                             <input type="text" className="userId" id="userId" placeholder="아이디" autoFocus></input><br/>
//                             <input type="password" className="password" id="password" placeholder="비밀번호"></input><br/>
//                             <a href="/" className="loginBut"><p>로그인</p></a>

//                              <div className="about">
//                                     <Link to="/">아이디 찾기</Link>
//                                     <span>&nbsp;|&nbsp;</span>
//                                     <Link to="/">비밀번호 찾기</Link>
//                                     <span>&nbsp;|&nbsp;</span>
//                                     <Link to="/join">회원가입</Link>
//                                     <span>&nbsp;|&nbsp;</span>
//                                     <Link to="/Nuser" style={{fontWeight: 'bold'}}>비회원</Link>
//                             </div>
//                         </div>
//                         </div>

                        
                        
//             </form>


            
               
//    </div>
//   )
// }

// export default Login;

// import React, { useState } from 'react';
// import '../css/login.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!userId || !password) {
//       alert('아이디와 비밀번호를 입력해주세요.');
//       return;
//     }

//     // 페이크 사용자 데이터
//     const fakeUser = {
//       id: 'SHY0313',
//       name: '송하영',
//       email: 'hayoung0313@naver.com',
//       phone: '010-1234-5678'
//     };

//     // 로컬스토리지에 저장
//     localStorage.setItem('user', JSON.stringify(fakeUser));

//     alert('로그인 성공!');
//     navigate('/'); // 로그인 후 이동
//   };

//   return (
//     <div className="Login-box">
//       <h1 id='login_title'>로그인</h1>
//       <form className="loginForm" onSubmit={handleLogin}>
//         <div className='login-box2'>
//           <div className="input">
//             <input
//               type="text"
//               className="userId"
//               id="userId"
//               placeholder="아이디"
//               value={userId}
//               onChange={e => setUserId(e.target.value)}
//               autoFocus
//             /><br/>
//             <input
//               type="password"
//               className="password"
//               id="password"
//               placeholder="비밀번호"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//             /><br/>
//             <button type="submit" className="loginBut"><p>로그인</p></button>

//             <div className="about">
//               <Link to="/">아이디 찾기</Link>
//               <span>&nbsp;|&nbsp;</span>
//               <Link to="/">비밀번호 찾기</Link>
//               <span>&nbsp;|&nbsp;</span>
//               <Link to="/join">회원가입</Link>
//               <span>&nbsp;|&nbsp;</span>
//               <Link to="/Nuser" style={{fontWeight: 'bold'}}>비회원</Link>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login;


// // 수정 후


import React, { useState } from 'react';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userId || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const fakeUser = {
      id: 'KHI0313',
      name: '김해일',
      email: 'haeil0313@naver.com',
      phone: '010-1234-5678',
      birth: '1980-03-13'  // YYYY-MM-DD 형식
    };
    localStorage.setItem('user', JSON.stringify(fakeUser));

    // localStorage와 App 상태 모두 업데이트
    localStorage.setItem('user', JSON.stringify(fakeUser));
    setUser(fakeUser);

    alert('로그인 성공!');
    navigate('/');
  };

  return (
    <div className="Login-box">
      <form className="loginForm" onSubmit={handleLogin}>
        <div className='login-box2'>
      <h1 id='login_title'>로그인</h1>
          <div className="input-9">
            <input
              type="text"
              className="userId"
              id="userId"
              placeholder="아이디"
              value={userId}
              onChange={e => setUserId(e.target.value)}
              autoFocus
            /><br/>
            <input
              type="password"
              className="password"
              id="password"
              placeholder="비밀번호"
              value={password}
              onChange={e => setPassword(e.target.value)}
            /><br/>
            <button type="submit" className="loginBut"><p>로그인</p></button>

            <div className="about">
              <Link to="/">아이디 찾기</Link>
              <span>&nbsp;|&nbsp;</span>
              <Link to="/">비밀번호 찾기</Link>
              <span>&nbsp;|&nbsp;</span>
              <Link to="/join">회원가입</Link>
              <span>&nbsp;|&nbsp;</span>
              <Link to="/Nuser" style={{fontWeight: 'bold'}}>비회원</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
