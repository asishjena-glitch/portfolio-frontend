
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from"./components/Hero";
import About from"./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from"./components/Contact";
import Footer from"./components/Footer";
 function app(){
  useEffect(()=>{
    fetch("http://localhost:5000/")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    });

  },[]);
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
    
  );
 }
 export default app;