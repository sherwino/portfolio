import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// move to utils
export const reactjs = () => {
  console.log("load reactjs page");
  const element = document.getElementById("root");

  if (element) {
    const root = createRoot(element);
    root.render(<App />);
  }
};
