const heapSort = arr => {
  let heapSize = arr.length;

  buildHeap(arr);

  while (heapSize > 1) {
    heapSize--;
    swap(arr, 0, heapSize);
    heapify(arr, heapSize, 0);
  }

  return arr;
};

const buildHeap = arr => {
  let heapSize = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }
};

const heapify = (arr, heapSize, i) => {
  let left = i * 2 + 1,
    right = i * 2 + 2,
    largest = i;

  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, heapSize, largest);
  }
};

const swap = (arr, indexA, indexB) => {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

module.exports = heapSort;
