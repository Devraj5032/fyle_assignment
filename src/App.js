import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [searchBook , setSearchBook] = useState("");

  useEffect(() => {
    console.log(searchBook);
  }, [])

  const onBarClick = () => {
    setSideBar(true);
  };
 
  const onCrossClick = () => {
    setSideBar(false);
  };

  const onSubjectClick = () => {
    setSideBar(false);
  };

  const onSearch = (text) => {
    setSearchBook(text)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {sideBar && <SideBar onCrossClick={onCrossClick} onSubjectClick={onSubjectClick} />}
              {!sideBar && (
                <div>
                  <NavBar
                    onBarClick={onBarClick}
                    sideBar={sideBar}
                    onSearch={onSearch}
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
              {sideBar && <SideBar onCrossClick={onCrossClick} onSubjectClick={onSubjectClick} />}
              {!sideBar && (
                <div>
                  <NavBar
                    onBarClick={onBarClick}
                    onCrossClick={onCrossClick}
                    sideBar={sideBar}
                    onSearch={onSearch}
                  />
                  <Cards />
                </div>
              )}
            </div>
          }
        />
        <Route
          path="/search/:book"
          element={
            <div>
              {sideBar && <SideBar onCrossClick={onCrossClick} onSubjectClick={onSubjectClick} />}
              {!sideBar && (
                <div>
                  <NavBar
                    onBarClick={onBarClick}
                    onCrossClick={onCrossClick}
                    sideBar={sideBar}
                    onSearch={onSearch}
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
