import React from "react";

const asideStyles: React.CSSProperties = {
  width: "7.11206rem",
  background: "#FFF",
  boxShadow: "0px 4px 23px 0px rgba(0, 0, 0, 0.05)",
  height: "100vh",
  position: "fixed",
};

const SideBar = () => {
  return <aside style={asideStyles}>SideBar</aside>;
};

export default SideBar;
