// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
import GoToTopBtn from "./components/GoToTopBtn/index";

// styles
import "./App.css";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));
const Tasks = lazy(() => import("./pages/Tasks/index.js"));
const NewTask = lazy(() => import("./pages/NewTask/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Go to top button */}
      <span className="goToTopBtn">
        <GoToTopBtn  />
      </span>
    </div>
  );
}

export default App;
