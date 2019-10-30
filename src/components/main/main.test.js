import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {OFFERS} from "../../mocks/offers";

it(`PlaceList component render correct`, () => {
  const tree = renderer
      .create(
          <Main
            offers = {OFFERS}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});