import React from 'react'
import '../css/donation.css'
import { Link } from 'react-router-dom'; 
const Donation = () => {
 return (
    <>
            <div className="title2">
                 <p>후원안내</p>
                 <p className='sub3'>정기후원 / 캠페인후원</p>
                  <div className="overlay3"></div>
                <img src="/img/파도배너.jpg" alt="파도배너" />
                
                
            </div>
            
                <div className="sub4">
                    <div className="sub5">
                    <p>바다를 위한 약속, 매달 이어지는 마음</p>
                    <p className='sub3-1'>정기후원은 바다보호를 위한 가장 안정적인 힘 입니다.<br/>
                    당신의 꾸준한 후원은 바다친구들의 서식지를 지키고 구조 활동과<br />
                    연구활동을 이어가게 합니다.</p>
                    <a href="/donationinfo" className='btn2'>
                        <h3>후원 바로가기</h3>
                    </a>
                    </div>
                </div>   


                <div className="donation">
                    <div className="text-box3">
                        <h1>후원 플랜</h1>
                    </div>


                    <div className="card-box2">
                               <div className="card3">
                        <div className="D">
                            <img src="/img/바다씨앗.png" alt="" />
                            <h5>바다씨앗</h5>
                            <p>월 3,000</p>
                            <p>작은 시작, 기초 연구<br />
                            교육지원</p>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="D">
                            <img src="/img/파도플랜.png" alt="" />
                            <h5>파도플랜</h5>
                            <p>월 10,000</p>
                            <p>구조 / 보호 활동<br />
                            직접 지원</p>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="D">
                            <img src="/img/블루가디언.png" alt="" />
                            <h5>블루가디언</h5>
                            <p>월 30,000</p>
                            <p>장기 서식지 보존 및<br />
                            캠페인 운영 후원</p>
                        </div>
                    </div>
                    </div>
                    
                 



                </div>

                <div className="donation2">
                    <div className="md">
                         <div className="overlay"></div>
                        <img src="/img/MD이미지.jpg" alt="" />
                        <p>후원 MD 지급</p>
                    </div>
                    <div className="news">
                         <div className="overlay"></div>
                        <img src="/img/News.jpg" alt="" />
                        <p>후원자 전용 뉴스레터</p>
                    </div>
                    <div className="email">
                         <div className="overlay"></div>
                        <img src="/img/campaing.jpg" alt="" />
                        <p>캠페인 소식 이메일</p>
                    </div>
                </div>
                    <Link to = "/Campaign" className="camp-link">
                    
                        <div className="camp">
                    <div className="bird">
                        <div className="overlay"></div>
                        <img src="/img/검은머리갈매기.jpg" alt="검은머리갈매기" />
                        <p>검은머리 갈매기 <br/>
                                캠페인</p>
                        
                    </div>
                    <div className="trash">
                         <div className="overlay"></div>
                        <img src="/img/바다쓰래기.jpg" alt="바다쓰래기" />
                        <p>플라스틱 없는 해안<br/>
                                캠페인</p>
                       
                    </div>
                </div>


                    </Link>
                                

                </>
  )
}

export default Donation