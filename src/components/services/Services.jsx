import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      title: "Web Development",
      description:
        "I build scalable applications using modular design and component-based architecture, ensuring flexibility, efficiency, and easy maintenance as your business grows.",
      tech: ["React.js", "HTML5", "CSS3"],
    },
    {
      title: "UX/UI Designing",
      description:
        "I specialize in designing wireframes and prototypes to create intuitive, user-centered interfaces that are optimized for both engagement and accessibility.",
      tech: ["Figma", "AdobeXD", "InVision"],
    },
    {
      title: "Responsive Design",
      description:
        "I specialize in creating responsive web designs that adapt seamlessly to different screen sizes, ensuring a consistent & engaging user experience across desktops, tablets, smartphones.",
      tech: ["CSS3", "Tailwind", "Bootstrap"],
    },
  ];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>

      <div className="section-title mx-auto mbltitle">SERVICES I DO</div>       
       <p>
          An enthusiastic Frontend Developer
          <br /> and UI/UX Designer
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <button className="frt-btn">SERVICES</button>
          <h1>
            <motion.b whileHover={{ color: "#fa6400" }}>Unique</motion.b> mix of technical
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#ff944d" }}>expertise </motion.b> and creativity.
          </h1>
          <button>I DO?</button>
        </div>
      </motion.div>

       {/* Mobile view */}
       <motion.div className="listContainer mobile-view">
        <div className="buttons">
          {services.map((service, index) => (
            <button
              key={index}
              className={`service-btn ${index === activeService ? "active" : ""}`}
              onClick={() => setActiveService(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
        <div className="box">
          <h2 className="section-title max-auto">{services[activeService].title}</h2>
          <p>{services[activeService].description}</p>
          <div className="tech">
            {services[activeService].tech.map((techItem, idx) => (
              <button key={idx}>{techItem}</button>
            ))}
          </div>
        </div>
        
      </motion.div>

      {/* Desktop View */}
      <motion.div className="listContainer">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="box"
            whileHover={{ boxShadow: "0 0 1rem #fa6400" }}
          >
            <h2 className="section-title max-auto">{service.title}</h2>
            <p>{service.description}</p>
            <div className="tech">
              {service.tech.map((techItem, idx) => (
                <button key={idx}>{techItem}</button>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      
    </motion.div>
  );
};

export default Services;
