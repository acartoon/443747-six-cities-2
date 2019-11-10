import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import offersPropTypes from '../../mocks/prop-types'


const App = (props) => {
  const {offers} = props;
  return <Main
    offers = {offers}/>;
};


App.propTypes = {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
};

export default App;
