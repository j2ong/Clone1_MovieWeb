import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
  );
}
//props는 쉽게말해 매개변수

const foodlike = [
  {
    id: 1,
    name: "kimch",
    image:
      "https://img.wemep.co.kr/deal/7/717/4017177/ba09fc3cc86142f2ed6b55f23f983a7450669260.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "budae",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/002c46b34a8814b7d9848fc949eb9e1b1.jpg",
    rating: 4.9,
  },
];

function App() {
  return (
    <div>
      {foodlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

//propTypes은 매개변수의 타입을 명시해놓는 것

export default App;
