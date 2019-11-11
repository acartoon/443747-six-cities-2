import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import {Provider} from "react-redux"


import App from "./components/app/app.jsx";
import { reducer } from "./reducer/reducer.js";


const init = () => {
  const store = createStore(reducer)
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
      document.querySelector(`#root`)
  );
};

init();
