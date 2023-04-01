// component, react-spinner
import { SyncLoader } from "react-spinners";

// styles
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <SyncLoader
        className="spinner"
        color="#2ce080"
        className={styles.spinner}
      />
    </div>
  );
}
