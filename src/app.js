import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./components/Headers";
import Body from "./components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
