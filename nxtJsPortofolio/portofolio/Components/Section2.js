import React from "react";
import styles from "../styles/Landing.module.scss";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import Service from "./Service";
const Services = [
  {
    title: "Frontend",
    tech: "React , Angular , Html ,Css, Javascript,Typescript",
    icon: "/Assets/frontend.mp4",
  },
  {
    title: "Backend",
    tech: "React , Angular , Html ,Css, Javascript,Typescript",
    icon: "/Assets/backend.mp4",
  },
  {
    title: "Devops",
    tech: "React , Angular , Html ,Css, Javascript,Typescript",
    icon: "/Assets/devops.mp4",
  },
];
function Section2() {
  return (
    <div className={styles.section2}>
      <Fade>
        <h1 className={styles.section2Header}>
          <span>Services</span> Offered By Us
        </h1>
      </Fade>
      <div className={styles.serviceWrapper}>
        {Services.map((item, index) => {
          return <Service item={item} key={index} />;
        })}
      </div>
      <Pulse>
        <p className={styles.section2Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </Pulse>
    </div>
  );
}

export default Section2;
