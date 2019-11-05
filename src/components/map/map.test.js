import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {OFFERS} from "../../mocks/offers";

it(`Map component render correct`, () => {
  const tree = renderer
      .create(
          <Map
            offers = {OFFERS}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
