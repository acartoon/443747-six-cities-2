import React from "react";
import {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from "prop-types";

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._layerGroup = null;
    this._map = null
  }
  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }
  componentDidMount() {
    const {activeCity, coords} = this.props;
    this._addMap(activeCity, coords, activeCity.zoom);
  }

  componentDidUpdate() {
    const {activeCity, coords} = this.props;
    const cityCoords = [];
    cityCoords.push(activeCity.latitude, activeCity.longitude)
    
    this._layerGroup.clearLayers();
    this._setView(cityCoords, activeCity.zoom);
    this._createPins(coords);
  }

  _addMap(activeCity, coords, zoom) {
    
    const cityCoords = [];
    cityCoords.push(activeCity.latitude, activeCity.longitude)

    this._map = leaflet.map(`map`, {
      center: cityCoords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._layerGroup = leaflet.layerGroup().addTo(this._map);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._setView(cityCoords, zoom);
    this._createPins(coords);
  }

  
  _createPins(coords) {
    coords.forEach((coord) => {
      const icon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker(coord, {icon})
        .addTo(this._layerGroup);
    });
  }

  _setView(coords, zoom) {
    this._map.setView(coords, zoom);
  }
}

// Map.propTypes = {
//   coords: PropTypes.arrayOf(PropTypes.array).isRequired,
//   activeCity: PropTypes.shape({ 
//     latitude: PropTypes.number,
//     longitude:  PropTypes.number,
//     zoom: PropTypes.number  
//   }).isRequired,
// };
