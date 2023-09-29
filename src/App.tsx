import { Layout } from "antd";
// import styles from "./App.css";
// import TaskIcon from "./assets/side-bar/tasks-icon.svg";
import { CSSProperties } from "react";
import { Content } from "antd/es/layout/layout";
import AppSideBar from "./components/app-side-bar/AppSideBar";
import AppHeader from "./components/app-header/AppHeader";
import UploadFormCard from "./components/upload-image-card/UploadImageCard";
import PersonalInformationCard from "./components/personal-information-card/PersonalInformationCard";

export const ASIDE_WIDTH = "7.11206rem";

const contentLayoutStyles: CSSProperties = {
  marginLeft: ASIDE_WIDTH,
  padding: "7rem 4.35rem",
};

function App() {
  return (
    <Layout hasSider>
      <AppSideBar />
      <Layout
        style={{
          background: "white",
        }}
      >
        <AppHeader />
        <Content style={contentLayoutStyles}>
          <div
            style={{
              height: 1500,
              color: "blue",
            }}
          >
            <UploadFormCard />
            <PersonalInformationCard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
