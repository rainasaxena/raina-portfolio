import React, { useState, useEffect } from "react";
import "./../styles/Skills.scss"
import Aos from 'aos';
import "aos/dist/aos.css";
import react from "../assets/backgrounds/react.png"
import cpp from "../assets/backgrounds/c++.png"
import c from "../assets/backgrounds/c.png"
import py from "../assets/backgrounds/python.png"
import css from "../assets/backgrounds/css.png"
import java from "../assets/backgrounds/java.png"
import html from "../assets/backgrounds/html.png"
import js from "../assets/backgrounds/js.png"
import sass from "../assets/backgrounds/sass.png"
import lr from "../assets/backgrounds/lr.png"
import ps from "../assets/backgrounds/ps.png"
import sql from "../assets/backgrounds/mysql.png"
import tw from "../assets/backgrounds/tailwind.png"
import git from "../assets/backgrounds/git.png"
import github from "../assets/backgrounds/github.png"
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (

    <div id="skill-container">
    <Marquee ><div id="skill-container-left" data-aos="fade" >
      <h1 >SKILLS</h1>

      <div className="logos">
        <div className="logo-container">
          <img src={react} alt="" />
          {/* <p>React</p> */}
        </div>

        <div className="logo-container">
          <img src={sass} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={tw} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={js} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={html} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={css} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={java} alt="" />
          {/* <p></p> */}
        </div>

        </div>
        </div>
        </Marquee>


        <Marquee speed={50} direction={"right"} ><div id="skill-container-right" data-aos="fade">
        <h1 >SKILLS</h1>
        <div className="logos">

        <div className="logo-container">
          <img src={py} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={cpp} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={c} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={sql} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={git} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={github} alt="" />
          {/* <p></p> */}
        </div>


        <div className="logo-container">
          <img src={lr} alt="" />
          {/* <p></p> */}
        </div>

        <div className="logo-container">
          <img src={ps} alt="" />
          {/* <p></p> */}
        </div>

        </div>
    </div>
</Marquee>
</div>

  )
}

export default Skills