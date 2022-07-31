import React, { useEffect, useState } from "react";
import styles from "../styles/Landing.module.scss";
import TextLoop from "react-text-loop";
import Section1 from "./Section1";

function Landing() {
  return (
    <div className={styles.landingWrapper}>
      <section className={styles.section1}>
        <Section1 />
      </section>
      {/* <section className={styles.section1}>Hello World</section> */}
    </div>
  );
}

export default Landing;
