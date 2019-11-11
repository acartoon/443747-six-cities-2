import { OFFERS } from "../mocks/offers";
import {ActionType}  from "../utils"

//функция выбора списка городов по городу возвращет объект
const getOffers = (activeCity) => OFFERS.filter(({city}) => (city.name === activeCity));

const activeCity = () => (OFFERS[0].city);

const initialState = {
  city: activeCity(),
  offers: OFFERS,
  activeOffers: getOffers(activeCity().name),
}

export const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };
  },
  getOffers: (city) => {
    return {
      type: ActionType.GET_OFFERS,
      payload: city,
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      console.log(action.payload)
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      console.log(action.payload)
    return Object.assign({}, state, {
        activeOffers: state.offers.filter(({city}) => city.name === action.payload)
      });
  }

  return Object.assign({}, state);
};
