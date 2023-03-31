// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import Footer from "../../components/Footer/index";

// styles, icons
import styles from "./styles.module.css";
import { TiThSmall } from "react-icons/ti";
import { GiProgression } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";

export default function Home() {
  const tasks = useSelector((state) => state.TasksReducer);

  // for getting the efficiency of the finished tasks
  const totalNumOfDoneTasks = tasks.reduce(
    (total, current) => total + current.doneQuant,
    0
  );

  return (
    <div className={styles.homePage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <header className={styles.slideIn}>
        <h2 className={styles.userName}>
          Hi Huthaifa! There is your last ToDo stats
        </h2>
      </header>

      <div className={styles.dashboardsCont}>
        {/* total tasks */}
        <div
          className={`${styles.dashboardMainBox} ${styles.dashboardTotalTasksBox}`}
        >
          <div className={styles.dashboardSubBox}>
            <div className={styles.dashboardSubBoxIconCont}>
              <h3>UnFinished</h3>
              <TiThSmall className={styles.dashboardSubBoxIcon} />
            </div>
            <div className={styles.tasksCounterCont}>
              <p>
                {tasks?.length || 0} {tasks?.length === 1 ? "Task" : "Tasks"}
              </p>
            </div>
            <div className={styles.dashboardText}>
              <p>
                Let's get more done!
                <Link to="/new-task">
                  <span> Add a new task now.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* efficiency of finished tasks */}
        <div
          className={`${styles.dashboardMainBox} ${styles.dashboardTasksEffBox}`}
        >
          <div className={styles.dashboardSubBox}>
            <div className={styles.dashboardSubBoxIconCont}>
              <h3>Activity</h3>
              <GiProgression className={styles.dashboardSubBoxIcon} />
            </div>
            <div className={styles.tasksCounterCont}>
              <p>
                {/* if 66.6666666, minimize it to 2 digits */}
                {Number.isInteger(totalNumOfDoneTasks / tasks?.length)
                  ? (totalNumOfDoneTasks / tasks?.length) * 100 || 0
                  : (totalNumOfDoneTasks / tasks?.length).toFixed(2) * 100 || 0}
                <span>{totalNumOfDoneTasks > 0 ? " %" : ""}</span>
              </p>
            </div>
            <div className={styles.dashboardText}>
              <p>Increase your efficiency!</p>
            </div>
          </div>
        </div>

        {/*finished tasks */}
        <div
          className={`${styles.dashboardMainBox} ${styles.dashboardFinishedTasksBox}`}
        >
          <div className={styles.dashboardSubBox}>
            <div className={styles.dashboardSubBoxIconCont}>
              <h3>Finished</h3>
              <AiOutlineFileDone className={styles.dashboardSubBoxIcon} />
            </div>
            <div className={styles.tasksCounterCont}>
              <p>
                {totalNumOfDoneTasks || 0}{" "}
                {totalNumOfDoneTasks === 1 ? "Task" : "Tasks"}
              </p>
            </div>
            <div className={styles.dashboardText}>
              <p>
                {tasks?.length === totalNumOfDoneTasks || tasks?.length === 0
                  ? "No finished tasks yet."
                  : "Finish the rest!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footerCont}>
        <Footer />
      </div>
    </div>
  );
}
