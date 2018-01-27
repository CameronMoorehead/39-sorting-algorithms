const heapSort = require('../heap-sort');
const randomArray = require('../lib/random-array');
const checkSorted = require('../lib/check-sorted');

describe('heap-sort.js', () => {
  test('should return an empty array if provided with an empty array', () => {
    const arr = [];
    const sorted = heapSort(arr);
    const expected = [];

    expect(sorted).toEqual(expected);
  });
});
