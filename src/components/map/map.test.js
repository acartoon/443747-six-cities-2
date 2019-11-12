import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {OFFERS} from "../../mocks/offers";

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
    layerGroup: jest.fn().mockImplementation(() => {
      return {
        setView: jest.fn(),
      };
    }),
  };
});

it(`Map component render correct`, () => {
  const tree = renderer
      .create(
          <Map
            activeCity={{
              latitude: 52.38333,
              longitude:  4.9,
              zoom: 12
            }}
            coords={[52.3909553943508, 4.85309666406198]}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
