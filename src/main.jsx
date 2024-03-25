import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            // colorPrimary: "#00b96b",
            borderRadius: 2,
            colorText: "rgba(0, 0, 0, 0.88)",
          },
          components: {
            Button: {
              contentFontSizeLG: 20,
            },
            Input: {
              activeBorderColor: "#1677ff",
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </CookiesProvider>
  </React.StrictMode>
);
