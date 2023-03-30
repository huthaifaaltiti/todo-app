// react
import React, { useState, useEffect } from "react";

// styles
import styles from "./styles.module.css";
import { BsBoxArrowInUp } from "react-icons/bs";

export default function GoToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if user has scrolled down the page
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add event listener to window to detect scroll position
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.btnBody}>
          <span onClick={scrollToTop} className={styles.btnCont}>
            <BsBoxArrowInUp className={styles.btnIcon} />
          </span>
        </div>
      )}
    </>
  );
}
