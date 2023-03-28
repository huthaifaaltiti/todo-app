// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={styles.footerBody}>
      <div className={styles.navBarLogo}>
        <h2>
          {/* decoration spans */}
          <span></span>
          <span></span>
          Your ToDo App
        </h2>
      </div>

      <div className={styles.copyRights}>
        <p> Copyrights {year} &copy; estarta.com</p>
      </div>
    </div>
  );
}
