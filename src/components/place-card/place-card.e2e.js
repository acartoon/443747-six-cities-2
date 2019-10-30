import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Place card on title click`, () => {
  const onTitleClick = jest.fn();
  const onActiveCard = jest.fn();
  const placeCard = shallow(<PlaceCard
    id = {15}
    title = {`Beautiful & luxurious apartment at great location`}
    price = {120}
    isPremium = {true}
    img = {`img/apartment-01.jpg`}
    type = {`Apartment`}
    onActiveCard = {onActiveCard}
    onTitleClick = {onTitleClick}
  />);

  const card = placeCard.find(`.place-card`);
  const cardTitle = placeCard.find(`.place-card__name > a`);
  cardTitle.simulate(`click`);
  card.simulate(`mouseEnter`);


  expect(onActiveCard).toHaveBeenCalledTimes(1, {id: 15});
});
