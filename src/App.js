import React from 'react';

function Food({name,picture}){
  return (
    <div>
    <h2>i like {name}</h2>
    <img src={picture}/>
    </div>
    );
}
//props는 쉽게말해 매개변수


const foodlike = [
{
  name : 'kimch',
  image : 'https://img.wemep.co.kr/deal/7/717/4017177/ba09fc3cc86142f2ed6b55f23f983a7450669260.jpg',
},
{name: 'budae',
  image : 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/002c46b34a8814b7d9848fc949eb9e1b1.jpg'
}
];


function App() {
  return(
    <div>
      {foodlike.map(dish => (<Food name={dish.name} picture={dish.image} />
      ))}     
      </div>
  ) ;
}

export default App;
