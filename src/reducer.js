const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const initialState = {
  city: `Amsterdam`,
  offers: [
    {
      id: 154,
      title: `Beautiful & luxurious apartment at great location`,
      price: 120,
      isPremium: true,
      img: `img/apartment-01.jpg`,
      type: `Apartment`,
      coords: [52.3909553943508, 4.85309666406198],
    },
    {
      id: 114,
      title: `Wood and stone place`,
      price: 80,
      isPremium: false,
      img: `img/room.jpg`,
      type: `Private room`,
      coords: [52.369553943508, 4.85309666406198],
    },
  ]
}

const ActionCreator = {
  changeCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: cityName
    };
  },
  getOffers: (cityName) => {
    return {
      type: ActionType.GET_OFFERS,
      payload: cityName
    };
  }
};

const reducer = (state = initialState(offers), action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
  }

  return Object.assign({}, state);
};