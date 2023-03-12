import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import foto from "./foto1.png";
import foto1 from "./img/1.jfif";
import foto2 from "./img/2.jfif";
import foto3 from "./img/3.jfif";
import foto4 from "./img/4.jpg";

const About = () => {

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={foto}
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <p
className="p-text"
> Hi, I'm <span>Guillermo</span>, A full-stack web developer <span>javascript</span>. I develop beautiful and easy-to-use websites. I like what I'm currently doing (Web Development!...) and I'm very interested in <span>Machine Learning & AI</span>. Challenge myself to learn new things and expand my skill set, my driving force. Speaking of my personality, I describe myself as a person <span>results-oriented</span>; Great <span>team player</span> but competent lone worker and an efficient individual. You can imagine me as a <span>diligent</span> and <span>calm</span> person with a good sense of humor.
</p>
          {/* <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div> */}
        </div>
      </div>

      <div className="app__profiles">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
          >
            <img src={foto1} alt={""} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
            Fullstack Developer
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
            fullstack, extensive knowledge in React.js, Redux, Node.js, Express, Php, PostgreSQL y Sequelize. Framework such as Tailwind Css, Bootstrap and Material iu
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
          >
            <img src={foto2} alt={""} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
            Tech Enthusiast
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
            Love new technologies and like to explore the field of Machine Learning, AI and Image Processing.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
          >
            <img src={foto3} alt={""} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
            Problem Solver
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
            Equipped with good analytical and problem solving skills. Creative thinker and love to take up any challenges or puzzles.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
          >
            <img src={foto4} alt={""} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
            Visionary
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
            A visionary with commendable leadership qualities. Aiming to reach new heights. Tend to recover quickly from setbacks and learn from failures.
            </h2>
          </motion.div>
      
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
