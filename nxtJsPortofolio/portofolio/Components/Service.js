import React, { useState } from "react";
import { Fade } from "react-reveal";
import styles from "../styles/Landing.module.scss";

function Service({ item }) {
  const [mousePosition, setMousePosition] = useState({
    clientWidth: 0,
    rotateX: 0,
    rotateY: 0,
  });

  return (
    <div
      className={styles.serviceMainComp}
      onMouseMove={(e) => {
        const THRESHOLD = 8;

        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } =
          currentTarget;
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateY = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(5);
        const rotateX = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(1);
        setMousePosition({
          clientWidth,
          rotateX,
          rotateY,
        });
      }}
      onMouseLeave={(e) => {
        setMousePosition({
          clientWidth: e.currentTarget.clientWidth,
          rotateX: 0,
          rotateY: 0,
        });
      }}
    >
      <Fade>
        <div className={styles.serviceComponent}>
          {" "}
          <Fade duration={3000} ssrFadeout>
            <video autoPlay loop muted playsInline>
              <source src={item.icon} type="video/mp4" />
            </video>
          </Fade>
          <Fade top cascade>
            <h1
              style={{
                transform: `perspective(${mousePosition.clientWidth}px) rotateX(${mousePosition.rotateY}deg) rotateY(${mousePosition.rotateX}deg) scale3d(1, 1, 1)`,
              }}
            >
              {item.title}
            </h1>
          </Fade>
          <Fade bottom cascade>
            <p>{item.tech}</p>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}

export default Service;
