import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [sideBar, setSideBar] = useState(false);

  const onBarClick = () => {
    setSideBar(true);
  };

  const onCrossClick = () => {
    setSideBar(false);
  };

  const onSubjectClick = () => {
    setSideBar(false);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {sideBar && <SideBar onCrossClick={onCrossClick} onSubjectClick={onSubjectClick}/>}
              {!sideBar && (
                <div>
                  <NavBar
                    onBarClick={onBarClick}
                    onCrossClick={onCrossClick}
                    sideBar={sideBar}
                  />
                  <Cards />
                </div>
              )}
            </div>
          }
        />
        <Route
          path="/:subject"
          element={
            <div>
              {sideBar && <SideBar onCrossClick={onCrossClick} onSubjectClick={onSubjectClick}/>}
              {!sideBar && (
                <div>
                  <NavBar
                    onBarClick={onBarClick}
                    onCrossClick={onCrossClick}
                    sideBar={sideBar}
                  />
                  <Cards />
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
