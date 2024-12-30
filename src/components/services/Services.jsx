import { useRef } from "react";
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
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

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
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ boxShadow: "0 0 1rem #fa6400" }}
        >
          <h2 className="section-title max-auto">Web Development</h2>
          <p>
          I build scalable applications using modular design and component-based architecture, ensuring flexibility, efficiency, and easy maintenance as your business grows.
          </p>
          {/* <button>Go</button> */}
          <div className="tech">
            <button>React.js</button>
            <button>HTML5</button>
            <button>CSS3</button>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ boxShadow: "0 0 1rem #ff944d" }}
        >
          <h2 className="section-title max-auto">UX/UI Desgining</h2>
          <p>
          I specialize in designing wireframes and prototypes to create intuitive, user-centered interfaces
          that are optimized for both engagement and accessibility.
          </p>
          <div className="tech">
            <button><span class="tech-item">Figma</span></button>
            <button><span class="tech-item">AdobeXD</span></button>
            <button><span class="tech-item">InVision</span></button>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ boxShadow: "0 0 1rem #fa6400" }}
        >
          <h2 className="section-title max-auto">Responsive Design</h2>
          <p>
          I specialize in creating responsive web designs that adapt seamlessly to different screen sizes,
          ensuring a consistent & engaging user experience across desktops, tablets, smartphones.
          </p>
          <div className="tech">
            <button><span class="tech-item">CSS3</span></button>
            <button><span class="tech-item">Tailwind</span></button>
            <button><span class="tech-item">Bootstrap</span></button>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
