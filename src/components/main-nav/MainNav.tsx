import { CSSProperties } from "react";
// import styles from "./MainNav.styles.css";

const navStyles: CSSProperties = {
  height: 1500,
  background: "red",
};

const MainNav = () => {
  return <nav style={navStyles}></nav>;
};

export default MainNav;
