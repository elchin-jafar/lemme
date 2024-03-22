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

            // Alias Token
            // colorBgContainer: "#EFA0C6",
            // colorPrimaryBorder: "#EFA0C6",
            // colorIconHover: "#EFA0C6",
          },
          components: {
            Button: {
              contentFontSizeLG: 20,
            },
            // Input: {
            //   colorPrimaryBorder: "#EFA0C6",
            //   colorPrimaryBgHover: "#EFA0C6",
            //   colorPrimaryBorderHover: "#EFA0C6",
            //   colorPrimaryHover: "#EFA0C6",
            //   colorPrimary: "#EFA0C6",
            //   colorPrimaryActive: "#EFA0C6",
            //   colorPrimaryTextHover: "#EFA0C6",
            //   lineWidthFocus: "#EFA0C6",
            //   colorPrimaryFocus: "#EFA0C6",
            //   optionActiveBg: "#EFA0C6",
            //   colorBorder: "#EFA0C6",
            //   activeBorderColor: "#EFA0C6",
            // },
            // Select: {
            //   colorBorder: "#EFA0C6",
            //   optionActiveBg: "#EFA0C6",
            // },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </CookiesProvider>
  </React.StrictMode>
);
