import { Header } from "antd/es/layout/layout";
import { CSSProperties } from "react";

const navLinks = ["Program Details", "Application Form", "Workflow", "Preview"];

const headerStyles: CSSProperties = {
  background: "#FFF",
  padding: "7.7rem 0 7rem",
  boxShadow: "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
};

const AppHeader = () => {
  return <Header style={headerStyles}>AppHeader</Header>;
};

export default AppHeader;
