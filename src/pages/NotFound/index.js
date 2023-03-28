// react
import React from "react";

// lottiefiles
import { Player } from "@lottiefiles/react-lottie-player";
import notfoundData from "../../assets/gifs/73061-search-not-found.json";

// styles
import styles from "./styles.module.css";

export default function NotFound() {
  const notFoundedGIFData = {
    animationData: notfoundData,
  };

  return (
    <div className={styles.notFoundPage}>
      <Player
        className={styles.player}
        autoplay
        loop
        src={notFoundedGIFData.animationData}
      ></Player>
    </div>
  );
}
