const salsa = ['tomato', 'cilantro', 'serrano', 'onion', 'garlic', 'corn', 'lime juice'];
console.log(salsa);

salsa.push('salt');
console.log(salsa);

salsa.splice(2, 1);
console.log(salsa);

let list = salsa.join(', ');
console.log(list);
