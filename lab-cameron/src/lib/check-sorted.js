const checkSorted = arr => {
  for (let i = 1; i < arr.length; i++) {
    const prev = i - 1;
    if (arr[prev] <= arr[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

module.exports = checkSorted;
