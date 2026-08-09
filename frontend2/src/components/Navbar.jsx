import { nav } from "framer-motion/client";
import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            <div className="logo">
                <h2>Asish.</h2>

            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          
        </nav>
    );
}
export default Navbar;