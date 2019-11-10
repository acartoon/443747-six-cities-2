import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {OFFERS} from "../../mocks/offers.js";

jest.mock(`leaflet`, () => {
  return {
    icon: jest.fn(),
    tileLayer: jest.fn().mockImplementation(() => {
      return {
        addTo: jest.fn(),
      };
    }),
    marker: jest.fn().mockImplementation(() => {
      return {
        addTo: jest.fn(),
      };
    }),
    map: jest.fn().mockImplementation(() => {
      return {
        setView: jest.fn(),
      };
    }),
  };
});

it(`PlaceList component render correct`, () => {
  const tree = renderer
      .create(
          <App
            offers = {OFFERS}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
