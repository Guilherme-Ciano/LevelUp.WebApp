import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ApplicationRouter from "./Router";

import { Provider } from "react-redux";
import { globalStore } from "./store/globalStore";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={globalStore}>
    {/* <ChakraProvider> */}
    <ApplicationRouter />
    {/* </ChakraProvider> */}
  </Provider>
);
