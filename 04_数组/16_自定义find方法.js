function find(array, callback) {
  for (const value of array) {
    if (callback(value)) {
      return value;
    }
  }
  return undefined;
}

let arr = [1, 2, 3, 4, 5];
console.log(find(arr, item => item === 2));
