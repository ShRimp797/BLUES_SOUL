import React from 'react'
import '../css/login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
   <div className="Login-box">
    
        <h1 id='login_title'>로그인</h1>
    
     <form className="loginForm">
                   
                    <div className='login-box2'>
                        <div className="input">
                            <input type="text" className="userId" id="userId" placeholder="아이디" autoFocus></input><br/>
                            <input type="password" className="password" id="password" placeholder="비밀번호"></input><br/>
                            <a href="/" className="loginBut"><p>로그인</p></a>

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

export default Login