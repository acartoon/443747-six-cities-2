export const OFFERS = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    isPremium: true,
    img: `img/apartment-01.jpg`,
    type: `Apartment`,
  },
  {
    title: `Wood and stone place`,
    price: 80,
    isPremium: false,
    img: `img/room.jpg`,
    type: `Private room`,
  },
  {
    title: `Canal View Prinsengracht`,
    price: 132,
    isPremium: false,
    img: `img/apartment-02.jpg`,
    type: `Apartment`,
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    isPremium: false,
    img: `img/apartment-03.jpg`,
    type: `Apartment`,
  },
  {
    title: `Wood and stone place`,
    price: 80,
    isPremium: true,
    img: `img/room.jpg`,
    type: `Private room`,
  }
];

OFFERS.forEach((offer) => {
  offer.id = Math.floor(Math.random() * 1000);
});
