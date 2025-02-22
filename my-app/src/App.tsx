import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductCards } from './components/productCards';

function App() {
  // Create fake data to pass as props to our component
  const data = [
    {
      name: "Hamburger",
      description: "This is a hamburger from mcdonalds! Please try this!",
      price: 34.49,
      imgURL: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0001-999_Hamburger_Alt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off"
    },
    {
      name: "Fries",
      description: "This is a fry from mcdonalds! Please try this!",
      price: 55.32,
      imgURL: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6053_LargeFries_1564x1564-1:nutrition-calculator-tile?resmode=sharp2"
    },
    {
      name: "Chicken Nuggets",
      description: "This is a Chicken Nugget from mcdonalds! Please try this!",
      price: 106.75,
      imgURL: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Chicken-McNuggets-6-pieces-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off"
    },
    {
      name: "Drink",
      description: "This is a drink from mcdonalds! Please try this!",
      price: 56,
      imgURL: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202402_0521_MediumCoke_ContourGlassv1_1564x1564:nutrition-calculator-tile"
    },
    {
      name: "Apple pie",
      description: "This is an apple pie from mcdonalds! Please try this!",
      price: 12.43,
      imgURL: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-ApplePie:product-header-mobile?wid=768&hei=443&dpr=off"
    },
    {
      name: "Kids Meal",
      description: "This is a Kids Meal from mcdonalds! Please try this!",
      price: 87,
      imgURL: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7780_6McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_1564x1564-1:nutrition-calculator-tile"
    },
  ]

  return (
    <div>
      {/* map through our fake data to pass as props */}
      { data.map((item, index) => (
        <ProductCards
          key={ index }
          name={ item.name }
          description={ item.description }
          price={ item.price }
          imgURL={ item.imgURL }
        />
      ))}

    </div>
  );
}

export default App;
