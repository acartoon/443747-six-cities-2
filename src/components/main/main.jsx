import React from "react";
import Cities from "../cities/cities.jsx";
import PropTypes from "prop-types";
import {PureComponent} from 'react';

import offersPropTypes from '../../mocks/prop-types'
import Locations from "../locations/locations.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this._offers = props.offers;
    this._activeCity = props.activeCity;
    this._activeOffers = props.activeOffers;
    this._city = props.city;
    this._onCityClick = props.onCityClick;
  }

  _getLocations() {
    return new Set(this._offers.map((offer) => offer.city.name))
  }

  render() {
    return <div className="page page--gray page--main" key="main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
        <Locations locations = {this._getLocations()} activeCity={this._city.name} onCityClick={this._onCityClick}/>
         
        </section>
      </div>
      <div className="cities">
        <Cities offers={this._activeOffers} activeCity={this._city}/>
      </div>
    </main>
  </div>;
  }
}

// const Main =  ({offers, activeOffers, city, onCityClick}) =>{
//   console.log(activeOffers)
//     return <div className="page page--gray page--main" key="main">
//     <header className="header">
//       <div className="container">
//         <div className="header__wrapper">
//           <div className="header__left">
//             <a className="header__logo-link header__logo-link--active">
//               <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
//             </a>
//           </div>
//           <nav className="header__nav">
//             <ul className="header__nav-list">
//               <li className="header__nav-item user">
//                 <a className="header__nav-link header__nav-link--profile" href="#">
//                   <div className="header__avatar-wrapper user__avatar-wrapper">
//                   </div>
//                   <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//     <main className="page__main page__main--index">
//       <h1 className="visually-hidden">Cities</h1>
//       <div className="tabs">
//         <section className="locations container">
//         <Locations locations = {new Set(offers.map((offer) => offer.city.name))} activeCity={city.name} onCityClick={onCityClick}/>
         
//         </section>
//       </div>
//       <div className="cities">
//         <Cities offers={activeOffers} activeCity={city}/>
//       </div>
//     </main>
//   </div>;
// }

Main.propTypes = {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
};

export default Main;