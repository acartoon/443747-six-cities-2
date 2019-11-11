import React from "react";
import {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from "prop-types";

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._city= props.activeCity;
    this._coords = props.coords;
    this._zoom = props.activeCity.zoom;
    this._zoomControl = false;
    this._marker = true;
    this._iconSize = [30, 30];
  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const center = [];
    center.push(this._city.latitude, this._city.longitude);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: this._iconSize,
    });

    const map = leaflet.map(`map`, {
      center,
      zoom: this._zoom,
      zoomControl: this._zoomControl,
      marker: this._marker,
    });
    map.setView(center, this._zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

      this._coords.forEach((coord) => {
      leaflet
      .marker(coord, {icon})
      .addTo(map);
    });
  }
}

Map.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.array).isRequired,
  activeCity: PropTypes.shape({ 
    latitude: PropTypes.number,
    longitude:  PropTypes.number,
    zoom: PropTypes.number  
  }).isRequired,
};
