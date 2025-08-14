import React from 'react'
import '../css/Main.css';
import Section from './Section';  
import Section2 from './Section2'; 
import Section3 from './Section3';  



const Main = () => {
  return (
    <>
    <div className='banner'>
        <p className='text1'>푸른 마음 하나가 바다를 살립니다. 지금<br />
        당신의 마음을 전해주세요.</p>
        <p className='text2'>A little heart for a great ocean</p>
        {/* <button className='btn'><h2>More</h2></button> */}

        <a href="/Story" className="btn">
          <h2>More</h2>
        </a>



        <div className="overlay"></div>
        <img src="/img/배너 고래.jpg" className='banner1' alt="banner" />
         
    </div>
      <div className='section1'>
        <Section />
      </div>
      <div className='section2'>
        <Section2 />
      </div>
      <div className='section3'>
        <Section3 />
      </div>
    
     
    </>
  );
}

export default Main