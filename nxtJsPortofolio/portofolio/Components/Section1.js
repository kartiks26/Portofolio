import React from "react";
import TypeAnimation from "react-type-animation";
import styles from "../styles/Landing.module.scss";

function Section1() {
  return (
    <div className={styles.section1Component}>
      <h1> We code your vision</h1>
      <div className={styles.typeAnimation}>
        <TypeAnimation
          cursor={false}
          sequence={["Web Development", 2000, "Devops", 2000]}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>
      <p>
        Highly Skilled Developer That will help you to ship Your Product In
        Months with High efficiency and skills.
      </p>
      <button
        onClick={() => {
          window.open(
            `https://wa.me/+918275752355?text=Hi%20KodeClub%20I%20am%20interested%20in%20your%20services.`,
            "_blank"
          );
        }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default Section1;
