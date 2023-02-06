import React, { useState } from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Section = () => {
  const [sideBar, setSideBar] = useState(false);

  const onBarClick = () => {
    setSideBar(true);
  };

  const onCrossClick = () => {
    setSideBar(false);
  };

  return (
    <>
      {sideBar && <SideBar onCrossClick={onCrossClick} />}
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
    </>
  );
};

export default Section;
