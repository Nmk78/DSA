// mergeSort.test.ts

import { mergeSort } from "../src/DSA/sortingALgos/MergeSort";


describe('mergeSort', () => {
  it('should sort an array of numbers', () => {
    const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it('should handle an empty array', () => {
    const array: number[] = [];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const array = [1];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([1]);
  });

  it('should handle an array with identical elements', () => {
    const array = [2, 2, 2, 2, 2];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([2, 2, 2, 2, 2]);
  });

  it('should handle an array with negative numbers', () => {
    const array = [3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([-9, -5, -1, -1, 2, 3, 3, 4, 5, 5, 6]);
  });
});
