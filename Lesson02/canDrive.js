const firstName = 'Aimee';
const lastName = 'Stevens';
const age = 25;
const drivingAge = 16;

if (age >= drivingAge) {
  console.log(`${firstName} ${lastName} is of driving age!`);
  console.log(`They have been of legal driving age for ${age - drivingAge} years!`);
} else {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
}
