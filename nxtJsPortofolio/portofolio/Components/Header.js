import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../styles/Header.module.scss";
function Header() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScrolledFromTop(true);
    } else {
      setScrolledFromTop(false);
    }
  });

  return (
    <animated.div style={props}>
      <div className={styles.header}>
        <h2>KodeClub</h2>
        <div>
          {/* <h3>Home</h3>
          <h3>About</h3>
          <h3>Testimonial</h3>
          <h3>Contact</h3> */}
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
      </div>
    </animated.div>
  );
}

export default Header;
