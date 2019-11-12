import React from "react";

const Locations = (props) => {
  const {locations, activeCity, onCityClick} = props;
  return  <ul className="locations__list tabs__list"  onClick={(evt) => {
    const target = evt.target;
    if (target.tagName.toLowerCase() !== `a` && target.tagName.toLowerCase() !== `span`) {
      return;
    }
    onCityClick(target.textContent);
  }}>
      {Array.from(locations).map((city, i) => <li key={`${city}-${i}`} className="locations__item">
        <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`} href="#">
          <span>{city}</span>
        </a>
      </li>)}
            
  </ul>;
}

export default Locations;