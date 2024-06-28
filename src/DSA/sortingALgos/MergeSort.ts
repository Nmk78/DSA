import { index1000Array, randomArray } from "../constant";

console.log("\x1b[31m%s\x1b[0m", "_________________________________________");

console.log("\x1b[32m%s\x1b[0m", "Mege Sort");

export const mergeSort = (arr: number[]) => {

  if (!(arr?.length > 1)) {
    // console.log("?")
    return arr;
  }

  ///// Spliting Arrays
  let leftArray: number[];
  let rightArray: number[];

  leftArray = mergeSort(arr.slice(0, arr.length / 2));
  rightArray = mergeSort(arr.slice(arr.length/2 ,arr.length));
  // console.log("🚀 ~ mergeSort ~ rightArray:", rightArray);
  // console.log("🚀 ~ mergeSort ~ leftArray:", leftArray);

  // Merging splitted Arrays
  let mergedArray = merge(leftArray, rightArray)
  return mergedArray;
};

let merge = (leftArr: number[], rightArr: number[]) => {
  // console.log("🚀 ~ merge ~ rightArr:", rightArr)
  // console.log("🚀 ~ merge ~ leftArr:", leftArr)
  let i: number = 0;
  let j: number = 0;
  let mergedArray: number[] = [];

  if (leftArr && rightArr) {
    while (i < leftArr.length && j < rightArr.length) {
      // console.log("compare =>", leftArr[i], " ", rightArr[j]);
      if (leftArr[i] <= rightArr[j]) {
        if (i <= leftArr.length) {
          mergedArray.push(leftArr[i]);
        }
        i++;
      } else {
        if (j <= rightArr.length) {
          mergedArray.push(rightArr[j]);
        }
        j++;
      }
      // console.log("🚀 ~ after push=>:", mergedArray);
    }
  }
  return mergedArray.concat(leftArr.slice(i)).concat(rightArr.slice(j));
};

// console.log(merge([12,1,6,3,8,13], [4,8,16,0,7]))
console.time("Merge")
// console.log(mergeSort(index1000Array));
console.log(mergeSort(randomArray));
console.timeEnd("Merge")

