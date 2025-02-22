// Our props to pass the data from App.tsx
interface ProductProps {
    name: string;
    description: string;
    price: number;
    imgURL: string;
}

// gonna have to change this now, need to pass our props in here
const ProductCards = ({ name, description, price, imgURL }: ProductProps) => {
    return (
        <p>hi</p>
    )
}

//export our function here now
export { ProductCards }