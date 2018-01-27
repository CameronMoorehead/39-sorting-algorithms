const radixSort = (arr, base = 10) => {
  let i,
    minValue = Math.min(...arr),
    maxValue = Math.max(...arr),
    radixBase = base;

  let significantDigit = 1;
  while (((maxValue - minValue) / significantDigit) >= 1) {
    arr = countingSortForRadix(arr, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }

  return arr;
};

const countingSortForRadix = (arr, radixBase, significantDigit, minValue) => {
  let i, countsIndex,
    counts = new Array(radixBase),
    aux = new Array(radixBase);

  for (i = 0; i < radixBase; i++) {
    counts[i] = 0;
  }

  for (i = 0; i < arr.length; i++) {
    countsIndex = Math.floor(((arr[i] - minValue) / significantDigit) % radixBase);
    counts[countsIndex]++;
  }

  for (i = 1; i < radixBase; i++) {
    counts[i] += counts[i - 1];
  }

  for (i = arr.length - 1; i >= 0; i--) {
    countsIndex = Math.floor(((arr[i] - minValue) / significantDigit) % radixBase);
    aux[--counts[countsIndex]] = arr[i];
  }

  for (i = 0; i < arr.length; i++) {
    arr[i] = aux[i];
  }

  return arr;
};

module.exports = radixSort;
