const checkSorted = arr => {
  for (let i = 1; i < arr.length; i++) {
    const prev = i - 1;
    if (arr[prev] < arr[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

let arr = [1,2,3,4];
let arr2 = [4,2,1,3];

console.log(checkSorted(arr));
console.log(checkSorted(arr2));
