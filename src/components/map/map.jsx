import React from "react";
import {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from "prop-types";
import offersPropTypes from '../../mocks/prop-types'

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._city = [52.38333, 4.9];
    this._zoom = 12;
    this._zoomControl = false;
    this._marker = true;

  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {offers} = this.props;
    
    const coordsOffers = offers.reduce((coords, offer) => {
      let coordsOffer = [];
      coordsOffer.push(offer.location.latitude);
      coordsOffer.push(offer.location.longitude);
      coords.push(coordsOffer)
      return coords
    }, [])
  
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: this._zoomControl,
      marker: this._marker,
    });

    map.setView(this._city, this._zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    coordsOffers.forEach((coord) => {
      leaflet
      .marker(coord, {icon})
      .addTo(map);
    });
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
};
