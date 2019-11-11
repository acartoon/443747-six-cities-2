import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";
import {PureComponent} from 'react';
import offersPropTypes from "../../mocks/prop-types.js";
import Map from "../map/map.jsx";

// export default class Cities extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeOffer: -1,
//     };

//     this._offers = props.offers;
//     this._activeCity = props.activeCity;
//     this._onActiveCard = this._onActiveCard.bind(this);
//   }

 const Cities = ({offers, activeCity}) =>  {
  //   return this._offers.reduce((coords, offer) => {
  //     let coordsOffer = [];
  //     coordsOffer.push(offer.location.latitude);
  //     coordsOffer.push(offer.location.longitude);
  //     coords.push(coordsOffer)
  //     return coords
  //   }, []);
  // }
    return <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>&nbsp;
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
        {/*
        <select class="places__sorting-type" id="places-sorting">
          <option class="places__option" value="popular" selected="">Popular</option>
          <option class="places__option" value="to-high">Price: low to high</option>
          <option class="places__option" value="to-low">Price: high to low</option>
          <option class="places__option" value="top-rated">Top rated first</option>
        </select>
        */}
      </form>
      
      <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, item) => {
        return <PlaceCard
          offer={offer}
          key={`${item + `item`}`}
          // onActiveCard={onActiveCard}
          onTitleClick = {() => null}
        />;
      })}
    </div>;
    </section>
    <div className="cities__right-section">
      {/* <Map activeCity={activeCity.location} coords={coords}/> */}
    </div>
  </div>;
  }

//   _onActiveCard(id) {
//     this.setState({
//       activeOffer: id,
//     });
//   }
// }

// Cities.propTypes = {
//   offers: PropTypes.arrayOf(offersPropTypes).isRequired,
//   // activeCity: PropTypes.shape({
//   //   latitude: PropTypes.number,
//   //   longitude:  PropTypes.number,
//   //   zoom: PropTypes.number  
//   // }).isRequired,
// };

export default Cities