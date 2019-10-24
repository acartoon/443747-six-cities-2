import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {PLACELIST} from "../../data.js";

it(`PlaceList component render correct`, () => {
  const tree = renderer
      .create(
          <Main
            placesList = {PLACELIST}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
