import React, { useState, useEffect } from "react";
import "./../styles/Home.scss"
import Aos from 'aos';
import "aos/dist/aos.css";

const words = ["RAINA SAXENA"];

const Home = () => {
  

      const [index, setIndex] = useState(0);
      const [subIndex, setSubIndex] = useState(0);
      const [blink, setBlink] = useState(true);
      const [reverse, setReverse] = useState(false);
      useEffect(()=>{
        Aos.init({
          duration: 1000
        });
      })

     
      // typeWriter
      useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
          return;
        }

        if (
          subIndex === words[index].length + 1 && 
          index !== words.length - 1 && 
          !reverse 
        ) {
          setReverse(true);
          return;
        }

        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }

        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                    150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse]);




  return (
    <div id='home-container'>
        <div className="home-content">
              <h4>Hello, I'm</h4>
              <h3>{`${words[index].substring(0, subIndex)}`}</h3>
        </div>

    </div>
  )
}

export default Home