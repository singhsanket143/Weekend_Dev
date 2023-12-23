const products = [{id: 1, name: 'iphone', price: 1000}, {id: 2, name: 'macbook', price: 2000}, {id: 3, name: 'airpods', price: 200}];

const modifiedProducts = products.filter((product, idx) => {
    console.log(idx)
    return product.price <= 1000;
});

console.log(modifiedProducts)