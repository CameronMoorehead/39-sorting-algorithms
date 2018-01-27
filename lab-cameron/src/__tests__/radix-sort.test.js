const radixSort = require('../radix-sort');
const randomArray = require('../lib/random-array');
const checkSorted = require('../lib/check-sorted');

describe('radix-sort.js', () => {
  test('should return an empty array if provided with an empty array', () => {
    const arr = [];
    const sorted = radixSort(arr);
    const expected = [];

    expect(sorted).toEqual(expected);
  });

  test('should return same array if provided with single element array', () => {
    const arr = randomArray(1);
    const sorted = radixSort(arr);
    const expected = arr;

    expect(sorted).toEqual(expected);
  });

  test('should return a small sorted array', () => {
    const arr = randomArray(10);
    const sorted = radixSort(arr);
    const result = checkSorted(sorted);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test('should return a medium sorted array', () => {
    const arr = randomArray(100);
    const sorted = radixSort(arr);
    const result = checkSorted(sorted);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test('should return a large sorted array', () => {
    const arr = randomArray(1000);
    const sorted = radixSort(arr);
    const result = checkSorted(sorted);
    const expected = true;

    expect(result).toEqual(expected);
  });
});
