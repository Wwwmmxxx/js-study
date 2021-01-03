function sort(array, callback) {
  for (const n in array) {
    for (const m in array) {
      if (callback(array[n] < array[m]) < 0) {
        const temp = array[n];
        array[n] = array[m];
        array[m] = temp;
      }
    }
  }
  return array;
}

arr = sort(arr, function (a, b) {
  return b - a
});