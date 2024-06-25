// tests/bubbleSort.test.ts

import { bubbleSort } from "../src/DSA/sortingALgos/BubbleSort";

describe('bubbleSort', () => {
  it('should sort a small array of numbers', () => {
    const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it('should handle an empty array', () => {
    const array: number[] = [];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const array = [1];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([1]);
  });

  it('should handle an array with identical elements', () => {
    const array = [2, 2, 2, 2, 2];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([2, 2, 2, 2, 2]);
  });

  it('should handle an array with negative numbers', () => {
    const array = [3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([-9, -5, -1, -1, 2, 3, 3, 4, 5, 5, 6]);
  });

  it('should sort a big array of predefined numbers', () => {
    const array = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // Predefined large array
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Ensure the array is sorted
  });
});
