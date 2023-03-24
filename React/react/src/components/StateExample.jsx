// import React from 'react'

// const stateExample = () => {
//   return (
//     <div>stateExample</div>
//   )
// }

// export default stateExample


import React, { useState } from 'react';

const StateExample = () => {
  const fruits = ['Mango', 'Orange', 'Guava', 'Banana'];
  // let index = 0;

  const [fruit, setFruit] = useState(fruits[0]);
  const [index, setIndex] = useState(0);

  const showNextFruit = () => {
    setIndex(index + 1);
    console.log('index: ' + index);
    setFruit(fruits[index]);
    console.log(fruit);
  };
  const showPreviousFruit = () => {
    setIndex(index - 1);
    console.log('index: ' + index);
    setFruit(fruits[index]);
    console.log(fruit);
  };

  return (
    <div>
      Fruit Name: {fruit}
      <button onClick={showNextFruit}>Next Fruit</button>
      <button onClick={showPreviousFruit}>Previous Fruit</button>
    </div>
  );
};

export default StateExample;