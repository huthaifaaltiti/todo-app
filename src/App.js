// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));
const Tasks = lazy(() => import("./pages/Tasks/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
