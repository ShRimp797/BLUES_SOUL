import React from 'react'
import '../css/story.css';
const Story = () => {
  return (

    <div className="story">
            
            <div className="title">
                 <p>OUR STORY</p>
                  <div className="overlay2"></div>
                <img src="/img/파도배너.jpg" alt="파도배너" />
               
            </div>

            <div className="box1">
                <div className="imgbox">
                    <img src="/img/바다쓰래기.jpg" alt="바다쓰래기" />
                </div>
                <div className="subgroup">
                    <div className="sub">
                    <h3>"푸른 마음이 바다를 지킵니다."</h3>
                    <p>바다는 우리의 삶과 더 깊이 연결되어 있습니다. 하지만 고래, 바다거북,<br/>
                    점박이물범은 지금도 인간의 무관심과 오염으로 부터 점점 사라지고 있습니다.</p><br/>
                    <p>BLUE SOUL은 "기부는 어렵지 않아도 괜찮다." 라는 마음으로 시작됐습니다.<br/>
                    우리는 작은 소비 하나로도 큰 마음을 전할 수 있다고 믿습니다.</p><br/>
                    <p>기부와 소비 사이의 벽을 허물고, MD를 통해 따뜻한 마음을 담아 <br />
                    바다로 보내는 길을 만들고 싶었습니다.</p><br/>
                    <p>우리는 물결처럼 퍼지는 마음을 믿습니다. 당신의 작은 행동이<br />
                    하나의 파도가 되어 바다를 살릴 수 있습니다.</p><br/>
                </div>

                </div>
                
            </div>

             <div className="box2">
                <div className="subgroup">
                          <div className="sub2">
                    <h3>우리가 바라는 세상  (WHY WE DO THIS)</h3>
                    <p>플라스틱을 삼키는 고래가 더 이상 없기를.</p><br/>
                    <p>뜨거워진 바다에서 방향을 잃는 바다거북이 줄어들기를.</p><br/>
                    <p>누구나 작은 소비로도 생명을 지키는 일에 참여 할 수 있기를.</p><br />
                  <p>BLUE SOUL 은 당신의 마음이 닿는 곳에 바다가 있기를 바랍니다.<br />
                  우리의 물결은 아직 작지만, 함께라면 바다를 지킬 수 있습니다</p><br/>
                </div>


                </div>
              

                <div className="imgbox2">
                    <img src="/img/물범.jpg" alt="물범" />
                </div>
            </div>
    </div>
  )
}

export default Story