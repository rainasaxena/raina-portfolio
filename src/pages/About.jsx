import React, { useEffect } from 'react'
import './../styles/About.scss';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: false
    });


  },[]);

  return (
    <div id="about-container">
      <div className="about-left" data-aos="slide-up">
        <h4>As a third year Bachelor of Technology student in Computer Science at Vellore Institute of Technology, Chennai, I am passionate about building innovative solutions that address complex problems. With a particular interest in information security, database management systems, OS, front-end and back-end development, UI designing, and C/C++ programming.

In addition, I am also fascinated by aerospace and aviation technology, which reflects my curiosity and desire to explore various domains. I believe that combining my passion for technology with other fields can lead to innovative solutions and meaningful impact.

I am excited about the opportunities that lie ahead, and I am always looking for new challenges and experiences that will help me grow both personally and professionally.</h4>
      </div>

      <hr/>

      <div className="about-right" data-aos="fade-right">
        <h1>ABOUT ME</h1>
      </div>

    </div>
  )
}

export default About


// As a third year Bachelor of Technology student in Computer Science at Vellore Institute of Technology, Chennai, I am passionate about building innovative solutions that address complex problems. With a particular interest in information security, database management systems, OS, front-end and back-end development, UI designing, and C/C++ programming.

//             In addition, I am also fascinated by aerospace and aviation technology, which reflects my curiosity and desire to explore various domains. I believe that combining my passion for technology with other fields can lead to innovative solutions and meaningful impact.

//             I am excited about the opportunities that lie ahead, and I am always looking for new challenges and experiences that will help me grow both personally and professionally.