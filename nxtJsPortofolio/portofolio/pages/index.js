import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Landing from "../Components/Landing";
import PartialBackground from "../Components/PartialBackground";
import styles from "../styles/Home.module.css";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const [splashScreen, setSplashScreen] = useState(true);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.5 },
    config: { duration: 2000 },
  });
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <>
      {splashScreen ? (
        <video autoPlay muted loop className={styles.video}>
          <source src="/loading.mp4" />
        </video>
      ) : (
        <animated.div style={props}>
          <PartialBackground />
          <Header />
          <Landing />
        </animated.div>
      )}
    </>
  );
}
