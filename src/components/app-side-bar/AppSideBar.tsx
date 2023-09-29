import { Button, ConfigProvider } from "antd";
import Sider from "antd/es/layout/Sider";
import { CSSProperties } from "react";
import {
  MenuOutlined,
  HomeOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { ASIDE_WIDTH } from "../../App";

const siderStyles: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  minWidth: "5rem",
  background: "#FFF",
  boxShadow: "4px 0px 23px 0px rgba(0, 0, 0, 0.05)",
};

const siderMainStyles: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "3rem 2.5rem",
};

const menuButtonStyles: CSSProperties = {
  marginBottom: "5.91rem",
};

const homeButtonStyles: CSSProperties = {
  marginBottom: "2.86rem",
};

const AppSideBar = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            onlyIconSize: 22,
            lineWidth: 0,
          },
        },
      }}
    >
      <Sider style={siderStyles} width={ASIDE_WIDTH}>
        <div style={siderMainStyles}>
          <Button icon={<MenuOutlined />} style={menuButtonStyles}></Button>
          <Button icon={<HomeOutlined />} style={homeButtonStyles}></Button>
          <Button icon={<FileDoneOutlined />}></Button>
        </div>
      </Sider>
    </ConfigProvider>
  );
};

export default AppSideBar;
