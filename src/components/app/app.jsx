import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {placesList} = props;
  return <Main
    placesList = {placesList}/>;
};

App.propTypes = {
  placesList: PropTypes.array.isRequired,
};

export default App;
