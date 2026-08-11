import profile from "../assets/profile.jpeg";
import { useEffect, useState } from "react";
import "./Hero.css";
function Hero() {
  const roles=[
    "Full Stack Developer",
    "React Developer",
    "Java developer"
  ];
   const[index,setIndex]=useState(0);
   const[text,setText]=useState("");
   const[charIndex,setCharIndex]=useState(0);
 useEffect(()=>{
  if(charIndex<roles[index].length){
    const timeout=setTimeout(()=>{
      setText((prev)=>prev + roles[index][charIndex]);
      setCharIndex((prev)=>prev + 1);
    },100);
    return ()=>clearTimeout(timeout);
  }
  else{
    const timeout=setTimeout(()=>{
      setText("");
      setCharIndex(0);
      setIndex((prev)=>(prev + 1) % roles.length);
    },1500);
    return ()=>clearTimeout(timeout);
  }
 },[charIndex,index])

  return (
    <section id="home" className="hero">

      <div className="hero-left">
        <h3>Hello, I'm</h3>

        <h1>Asish Kumar Jena</h1>

        <h2>{text}<span>|</span>
        </h2>

        <p>
          I build modern, responsive and interactive web
          applications using React, Node.js and MongoDB.
        </p>

        <div className="buttons">
          <button className="hire">Hire Me</button>
          <button className="resume">Download Resume</button>
          </div>
          </div>

      <div className="hero-right">
       
      <div className="circle">
    <img src={profile} alt="Profile"/>
</div>
</div>

    </section>
  );
}


export default Hero;