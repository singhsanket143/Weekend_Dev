const shoppingCart = [
    { product: 'Shoes', price: 80, quantity: 1 },
    { product: 'Bag', price: 120, quantity: 2 },
    { product: 'Watch', price: 250, quantity: 4 }
];

const result = shoppingCart.reduce(function reducer(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return 10;
} ,0);

console.log(result);