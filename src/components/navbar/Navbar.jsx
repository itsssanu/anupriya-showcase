import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SHOWCASE.
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/hey_dis_is_anu">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/anupriya-p/"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.behance.net/anupriya1523"><i className="fa-brands fa-behance"></i></a>
          <a href="https://github.com/itsssanu"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
