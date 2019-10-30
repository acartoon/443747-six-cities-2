import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {OFFERS} from "../../mocks/offers.js";

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
