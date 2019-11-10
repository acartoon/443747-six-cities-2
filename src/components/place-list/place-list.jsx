import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";
import {PureComponent} from 'react';
import offersPropTypes from "../../mocks/prop-types.js";

export default class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {offers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, item) => {
        return <PlaceCard
          offer={offer}
          key={`${item + `item`}`}
          onActiveCard={(id) => {
            this.setState({
              activeOffer: id,
            });
          }}
          onTitleClick = {() => null}
        />;
      })}
    </div>;
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  onActiveCard: PropTypes.func,
};
