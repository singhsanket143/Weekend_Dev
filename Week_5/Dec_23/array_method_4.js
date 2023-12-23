const shoppingCart = [
    { product: 'Shoes', price: 80, quantity: 1 },
    { product: 'Bag', price: 120, quantity: 2 },
    { product: 'Watch', price: 250, quantity: 4 }
];


// I want to calculate total price of the cart

/**
 * let value = 0;
 * shoppingCart.forEach(product => {
 *  value += product.price * product.quantity;
 * })
 */

const result = shoppingCart.reduce(function reducer(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue.price * currentValue.quantity;
} ,0);

console.log(result);