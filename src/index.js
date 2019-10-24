import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {PLACELIST} from "./data.js";


const init = () => {
  ReactDOM.render(
      <App
        placesList = {PLACELIST}/>,
      document.querySelector(`#root`)
  );
};

init();
