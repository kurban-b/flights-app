import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";
import Prices from "./Prices";
import Airlines from "./Airlines";

function Sidebar() {
  return (
    <div className={"sidebar"}>
      <Sort />
      <Filter />
      <Prices />
      <Airlines />
    </div>
  );
}

export default Sidebar;
