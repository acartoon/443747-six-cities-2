import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import offersPropTypes from '../../mocks/prop-types'
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    const {city, offers, activeOffers, onCityClick} = this.props;
    return <Main offers={offers} activeOffers={activeOffers} city={city} onCityClick={onCityClick} />;
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  activeOffers: state.activeOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
