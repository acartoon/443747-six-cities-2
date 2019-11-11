import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list";
import {OFFERS} from "../../mocks/offers";

it(`PlaceList component render correct`, () => {
  const tree = renderer
      .create(
          <PlaceList
            offers = {OFFERS}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
