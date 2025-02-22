import { useState } from "react";

// Our props to pass the data from App.tsx
interface ProductProps {
    name: string;
    description: string;
    price: number;
    imgURL: string;
}

// gonna have to change this now, need to pass our props in here
const ProductCards = ({ name, description, price, imgURL }: ProductProps) => {
    // State for the "View Details" accordion for our description
    const [ openDescription, setOpenDescription ] = useState(false);

    return (
        <div className="card">
            <img className="img" src={ imgURL } alt={ name }></img>
            <h1>{ name }</h1>
            {/* next is description, going to need a state to open + close */}
            <button
                className="accordion-button"
                onClick={ () => setOpenDescription(!openDescription) }
            >
                { openDescription ? "Hide Details -" : "View Details +"}
            </button>

            {/* this needs to show up when clicked for the contentt */}
            <div className={`accordion-content ${ openDescription ? 'show' : ""}`}>
                { description }
            </div>

            <h3>${ price }</h3>

            <div className="button-container">
                <button
                    className="button-save"
                    onClick={ () => console.log("Saved the item")}
                >
                    Save Item
                </button>
                <button
                    className="button-add"
                    onClick={ () => console.log("Added to cart")}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export { ProductCards }