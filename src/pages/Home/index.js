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

  // getting the efficiency of the finished tasks
  const totalNum = tasks.reduce(
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

      <header>
        <h2 className={styles.userName}>
          Hi Huthaifa! There is your last ToDo stats
        </h2>
      </header>

      <div className={styles.dashboardCont}>
        {/* <h3>Start growing with ToDo App now</h3> */}

        {/* total tasks */}
        <div className={styles.dashboardMainBox}>
          <div className={styles.dashboardSubBox}>
            <div className={styles.dashboardSubBoxIconCont}>
              <TiThSmall className={styles.dashboardSubBoxIcon} />
            </div>
            <div className={styles.tasksCounterCont}>
              <p>{tasks?.length || 0} Tasks</p>
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
        <div className={styles.dashboardMainBox}>
          <div className={styles.dashboardSubBox}>
            <div className={styles.dashboardSubBoxIconCont}>
              <GiProgression className={styles.dashboardSubBoxIcon} />
            </div>
            <div className={styles.tasksCounterCont}>
              <p>{(totalNum / tasks?.length) * 100 || 0} %</p>
            </div>
            <div className={styles.dashboardText}>
              <p>Increase your efficiency!</p>
            </div>
          </div>
        </div>

        {/*finished tasks */}
        <div className={styles.dashboardMainBox}>
          <div className={styles.dashboardSubBox}>
            <div className={styles.dashboardSubBoxIconCont}>
              <AiOutlineFileDone className={styles.dashboardSubBoxIcon} />
            </div>
            <div className={styles.tasksCounterCont}>
              <p>{totalNum || 0} Tasks</p>
            </div>
            <div className={styles.dashboardText}>
              <p>
                {tasks?.length === totalNum || tasks?.length === 0
                  ? "No finished tasks yet."
                  : "Finish the rest!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
