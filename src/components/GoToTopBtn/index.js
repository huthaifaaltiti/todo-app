// react
import React, { useState, useEffect } from "react";

// styles, icon
import styles from "./styles.module.css";
import { BiArrowToTop } from "react-icons/bi";

export default function GoToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 150 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
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
            <BiArrowToTop className={styles.btnIcon} />
          </span>
        </div>
      )}
    </>
  );
}
