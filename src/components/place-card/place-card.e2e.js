import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Place card on title click`, () => {
  const onCardClick = jest.fn();
  const placeCard = shallow(<PlaceCard
    title = {`Beautiful & luxurious apartment at great location`}
    price = {120}
    isPremium = {true}
    img = {`img/apartment-01.jpg`}
    type = {`Apartment`}
    onCardClick = {() => null}
  />);

  const placeCardTitle = placeCard.find(`.place-card__name > a`);
  placeCardTitle.simulate(`click`);

  expect(onCardClick).toHaveBeenCalledTimes(1);
});
