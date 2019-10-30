import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {OFFERS} from "./mocks/offers.js";


const init = () => {
  ReactDOM.render(
      <App
        offers = {OFFERS}/>,
      document.querySelector(`#root`)
  );
};

init();
