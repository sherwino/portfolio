import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// move to utils
export const reactjs = () => {
  console.log("load reactjs page");
  ReactDOM.render(<App />, document.getElementById("root"));
};
