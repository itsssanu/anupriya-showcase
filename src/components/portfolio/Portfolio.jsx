import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Insight Health",
    img: "/Insighthealth.jpg",
    desc: "Worked on Insight Health, a web app for hospital appointment booking. Integrated LumiChat, an AI chatbot for medical inquiries. Built and optimized responsive UI components using React and Tailwind CSS for a smooth user experience on both mobile and desktop. Implemented Playwright for automated UI testing, ensuring the stability and quality of the application's user interface.",
  },
  {
    id: 2,
    title: "PSB Academy",
    img: "/PSB.jpg",
    desc: "Developed a comprehensive platform to manage and track attendance for local and international students. The frontend leverages React.js with Tailwind CSS and SASS for a responsive and modern UI, while the backend, built with Python and PostgreSQL, ensures robust data handling and scalability. Designed for seamless user experience and efficient administrative operations.",
  },
  {
    id: 3,
    title: "Rental Management",
    img: "/Hostel.jpg",
    desc: "A comprehensive web application for managing properties, tenants, and payments with ease. Designed with a mobile-responsive layout for optimal functionality across devices, including tablets and desktops. Built using React.js and Tailwind CSS for a modern and dynamic frontend, and a backend powered by Python and PostgreSQL, ensuring secure and scalable data management.",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p >{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
