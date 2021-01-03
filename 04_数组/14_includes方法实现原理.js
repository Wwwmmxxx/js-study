function includes(arr, find) {
  for (const value of arr) {
    if (value === find) return true;
  }
  return false;
}