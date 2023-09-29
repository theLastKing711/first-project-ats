import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#087B2F",
        },
        components: {
          Input: {
            paddingInline: 23.04,
            paddingBlock: 26.08,
          },
          Checkbox: {
            controlInteractiveSize: 20,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
