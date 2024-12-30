import "./hero.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-350%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 30,
    },
  },
};


const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js on the element
    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Developer", "Web Designer", "UX/UI Designer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup to destroy Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANUPRIYA</motion.h2>
          <motion.h1 variants={textVariants}>
          And I'm a <span ref={typedElement} className="multiple-text"></span>
          </motion.h1>
          <motion.p variants={textVariants}>
          Fueled by creativity and a splash of code magic, I create experiences that marry beauty with brains, turning ideas into digital adventures that wow and work!
          </motion.p>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          {/* <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          /> */}
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Designer Developer Dreamer
      </motion.div>
      <div className="imageContainer">
        <img src="/header.svg" alt="" />
      </div>
      <div className="mblimageContainer">
        <img src="/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
