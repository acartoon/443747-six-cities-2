import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {PLACELIST} from "../../data.js";

it(`PlaceList component render correct`, () => {
  const tree = renderer
      .create(
          <App
            placesList = {PLACELIST}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
