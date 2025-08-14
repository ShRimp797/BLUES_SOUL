import React from 'react'
import '../css/campaing.css';
const Campaign = () => {
  return (
    <>
        <div className="text-box-c">
            <h1>CAMPAIGN</h1>
        </div>
        
        <div className="donation">
            <div className="text-box-b">
             <h1>"당신의 마음이 그들의 작은 날개가 됩니다."</h1>
                <p>단 3천마리 우리가 지키지 않으면 사라집니다.</p>
            <div className="d-button">

            <a href="/Donation" className='donation-button'>
                <p className='done' >후원하기</p>
            </a>
            </div>
            </div>

            <div className="overlay"></div>

            <img src="/img/검은머리갈매기 배너.jpeg"  alt="갈매기배너" />
           
        </div>

            <div className="donation-box">
                <div className="imgbox3">
                    <img src="/img/검은머리갈매기2.jpg" alt="검머리갈매기" />
                </div>
                <div className="subgroup2">
                    <div className="sub6">
                    <h3>우리나라에서 만 번식하는 갈매기가 있다는걸 알고 계시나요?</h3>
                    <p>검은머리갈매기는 전 세계 개체수 약 3천마리 남짓한, 극심한 멸종위기에<br/>
                    처한 한국의 고유 바닷새입니다.</p><br/>
                    <p>도시개발과 해안 훼손, 해양 쓰래기로 인해 검은머리갈매기의 번식지는<br/>
                   점점 줄어들고 있습니다. 지금 우리가 함께 지켜야할 마지막 순간일지도<br/>
                   모릅니다.</p><br/>
                    <p>지금 검은머리갈매기를 위한 MD캠페인을 시작하고 있어요.<br />
                   MD 수익금은 모두 검은머리갈매기 서식지 보호 및 연구 지원에 사용됩니다.</p><br/>
                   
                </div>

                </div>
                
            </div>



    </>
  )
}

export default Campaign