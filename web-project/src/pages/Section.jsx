import React from 'react'
import '../css/section.css';


const Section = () => {
  return (
    <div className="card">
      <div className="text-box">
        <h1>멸종위기 해양동물</h1>
        <p className='text'>이 동물들 외 에도 많은 동물들이 멸종위기 종 이에요.</p>

      </div>

        <div className="card2">
            <div className="A">
              <img src="/img/넓적부리도요.png" alt="넓적부리도요" />  
              <h3>넓적부리도요</h3>
            </div>    
            <div className="A">
              <img src="/img/붉은바다거북.jpg" alt="붉은바다거북" />  
              <h3>붉은바다거북</h3>
            </div>    
            <div className="A">
              <img src="/img/상괭이.jpg" alt="상괭이" />  
              <h3>상괭이</h3>
            </div>    
            <div className="A">
              <img src="/img/바다사자.jpg" alt="바다사자" />  
              <h3>바다사자</h3>
            </div>    
        
        </div>

    </div>
  )
}

export default Section