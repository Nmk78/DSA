import { randomArray } from "../constant";

console.log(
  "\x1b[31m%s\x1b[0m",
  "________________________________________________________"
);

console.log("\x1b[32m%s\x1b[0m", "Bubble Sort");

export const bubbleSort = (arr:number[])=>{
  let sorted: boolean = false;
  let length = arr.length;

  if(length <= 1){
    return arr.slice()
  }

while (!sorted) {
  sorted = true;
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp: number = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sorted = false;
    }
  }
  length--;
}

console.log("🚀 ~ sortedArray:", arr);
return arr;
}


// bubbleSort(randomArray);
bubbleSort([2, 2, 2, 2, 2]);
bubbleSort([3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5]);
bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);

