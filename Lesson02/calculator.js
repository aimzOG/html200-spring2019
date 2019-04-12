const itemPrice = 14.20;
const stateTax = 0.065;
const localTax = 0.036;
const discount = 3;

// What's the total price of my hardwork?
let total = itemPrice * (1 + (stateTax + localTax)) - discount;

console.log(total.toFixed(2));

// My dog ate part of the receipt- can I calculate the original price?
if ((total + discount) / ((1 + (stateTax + localTax))) === itemPrice) {
  console.log('Your math is correct');
} else {
  console.log('incorrect');
}