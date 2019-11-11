import PropTypes from "prop-types";

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: {
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude:  PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired  
    }).isRequired,
    }.isRequired,
    preview_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    is_premium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
    price: PropTypes.number.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude:  PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired  
    }).isRequired,
});