import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react"; 

function Contact(){

const [formData, setFormData] = useState({ 
  name: "",
  email: "",
  message: ""
});

const handleChange = (e) => { 
  setFormData({...formData, [e.target.name]: e.target.value});
}

const handleSubmit = async (e) => { 
  e.preventDefault();
  try {
    const res = await fetch("https://portfolio-frontend-6gis.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    alert("Message Sent Successfully!");
    setFormData({name: "", email: "", message: ""}); 
  } catch (err) {
    console.log(err);
    alert("Error sending message");
  }
}

return(
<section className="contact" id="contact">
    <h1>Contact Me</h1>
    <p>Have a project in mind? Let's work together.</p>

    <motion.form 
      onSubmit={handleSubmit}
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
    >
        <input 
          type="text"
          name="name" 
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input 
          type="email"
          name="email" 
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
            Send Message
        </button>
    </motion.form>

</section>
)
}

export default Contact;