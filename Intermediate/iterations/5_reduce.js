/*
    To sum up the values in an array,
    Used in Shopping cart, To add up the prices

    //Use case
    const array1 = [1,2,3,4];
    const initialValue = 0;
    const sumUpWithInitial = array1.reduce( (accumulator, currentValue) => (accumulator+currentValue),initialValue)

    currentValue is referred to each element of array in each iteration.
    At start accumulator stores initialValue and there after it stores the sum of accumulator and currentValue
    If we change initialValue, the accumulator starts with that initialValue.
*/

const items_prices = [999,219,579,1099];
// const items_prices = [1,2,3,4];

const Total_amt = items_prices.reduce( (acc, curr) => {
    return acc + curr;
},0);

console.log(Total_amt);

const shoppingCart = [
    {
        product : "Shoes",
        quantity : 2,
        price : 1999
    },
    {
        product : "Ear Phones",
        quantity : 1,
        price : 1299
    },
    {
        product : "Silicon Case Cover for Ear phones",
        quantity : 1,
        price : 299
    },
];

const payable_amt = shoppingCart.reduce( (acc,item) => {
   return acc + (item.price * item.quantity);
},0 );

console.log(payable_amt);

