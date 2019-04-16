const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

suits.forEach(s => {
  nums.forEach(n => {
    console.log(`${n} of ${s}`)
  });
});
