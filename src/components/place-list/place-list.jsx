import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";
import {PureComponent} from 'react';

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
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    isPremium: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
  })).isRequired,
  onActiveCard: PropTypes.func,
};
