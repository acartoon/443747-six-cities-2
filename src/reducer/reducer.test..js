import {reducer} from "./reducer.js";
import {ActionType} from "../utils";

describe(`Reducer test group`, () => {
  it(`Reducer should correctly switch city`, () => {
    expect(reducer(
        {
          city: `Amsterdam`,
          offers: [],
          activeOffers: []
        },
        {
          type: ActionType.CHANGE_CITY,
          payload: `Hamburg`
        }
    )).toEqual({
      city: `Hamburg`,
      offers: [],
      activeOffers: []
    });
  });

  it(`Reducer should correctly switch active offers data`, () => {
    const expectedOffersList = offersList.filter(({city}) => city.name === `Hamburg`);
    expect(reducer(
        {
          city: `Amsterdam`,
          offers: offersList,
          activeOffers: offersList
        },
        {
          type: ActionType.GET_OFFERS,
          payload: `Hamburg`
        }
    )).toEqual({
      city: `Amsterdam`,
      offers: offersList,
      activeOffers: expectedOffersList
    });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    const expectedOffersList = offersList.filter(({city}) => city.name === `Amsterdam`);
    expect(reducer(
        undefined,
        {
          type: `noName`,
          payload: `noCity`
        }
    )).toEqual({
      city: `Amsterdam`,
      offers: offersList,
      activeOffers: expectedOffersList
    });
  });
});