import React from 'react'
import '../css/mypage.css';
import { Link } from 'react-router-dom';
const Mypage = () => {
  return (
    <div className="mypage">
        <p className='mypage-title'>마이페이지</p>
        {/* <p className='maypage-subtitle'>어서오세요!</p> */}
        <div className="mypage-box">
          
          <div className="mypage-info-box">

            <Link to="/OrderDetaile" className='icon-link'>
           
            <div className="icon-box">
              <div className="icon-box-con">
                  <img src="../img/bag.png" alt="아이콘" />
                  <p>주문내역</p>

              </div>
            </div>
             </Link>

            <Link to ="/Mypage/User" className='icon-link'>
          
            <div className="icon-box">
              <div className="icon-box-con">
                  <img src="../img/user.png" alt="아이콘" />
                  <p>회원정보</p>

              </div>
            </div>
              </Link>

            <Link to="/Donationsuccess" className='icon-link'>
           
            <div className="icon-box">
              <div className="icon-box-con">
                  <img src="../img/donation.png" alt="아이콘" />
                  <p>후원내역</p>

              </div>
            </div>

             </Link>
          
          </div>

        </div>
         <div className="mypage-box">
          
          <div className="mypage-info-box">
            
            <div className="icon-box">
              <div className="icon-box-con">
                  <img src="../img/information.png" alt="아이콘" />
                  <p>문의내역</p>

              </div>
            </div>
            <div className="icon-box">
              <div className="icon-box-con">
                  <img src="../img/delivery.png" alt="아이콘" />
                  <p>배송관리</p>

              </div>
            </div>
            <div className="icon-box">
              <div className="icon-box-con">
                  <img src="../img/credit-card.png" alt="아이콘" />
                  <p>결제정보</p>

              </div>
            </div>
          
          </div>

        </div>
    </div>
  )
}

export default Mypage