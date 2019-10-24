import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

it(`PlaceList component render correct`, () => {
  const tree = renderer
    .create(
        <PlaceCard
          place = {
            {
              title: `Beautiful & luxurious apartment at great location`,
              price: 120,
              isPremium: true,
              img: `img/apartment-01.jpg`,
              type: `Apartment`,
              onCardClick: () => null,
            }
          }
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
