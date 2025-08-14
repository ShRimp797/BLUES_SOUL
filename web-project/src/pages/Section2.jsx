import React from 'react'
import '../css/section2.css';
const Section2 = () => {
  return (
        <div className="info">
            <div className='img'>
                    <img src="/img/바다거북섹션.jpg" width="960px" height="1078px"   alt="바다거북이" />               
            </div>
            <div className='text-box1'>
                <h1>무슨일을 하나요?</h1>
                <p>블루소울은 기부를 통해 바다친구들이 숨 쉴 수 있도록 작은 마음을 모아 바다에게 
                    전달해요
                </p>
                <p>오염으로 위협받는 바다거북, 고래, 산호초 등 해양동물들을 
                    지키는 다양한 해양 보호 단체와 협력해, 기부금이 직접보호 활동에
                    쓰이도록 돕고 있어요.
                </p>
            </div>
        </div>
  )
}

export default Section2