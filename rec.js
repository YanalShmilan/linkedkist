const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

let sum = (array) => {
  flat = array.flat();
  if (flat.length === 0) {
    return 0;
  } else {
    return flat[0] + sum(flat.slice(1));
  }
};
console.log(sum(numbers));
