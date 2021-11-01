import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitList = fruits.map((fruits, index) => (
    <li key={index}>{fruits.name}</li>
  ));

  function filterRedFruits() {
    const red_fruits = fruits.filter((item) => item.color === "red");
    setFruits(red_fruits);
  }

  const totalPrice = fruits.reduce(
    (previousValue, currentValue) => currentValue.price + previousValue,
    0
  );

  return (
    <div className="App">
      <header className="App-header">
        <span className="Fruits__sum">Sum: {totalPrice}</span>
        <span className="Fruits__list">{fruitList}</span>
        <button className="Fruits__btn" onClick={filterRedFruits}>
          Show red fruits!
        </button>
      </header>
    </div>
  );
}

export default App;
