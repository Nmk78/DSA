console.log(
  "\x1b[31m%s\x1b[0m",
  "######################################################"
);

console.log("\x1b[33m%s\x1b[0m", "Linear Search");

let randomNumber: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let numberToSearch: number = 21;

let left: number = 0;
let right: number = randomNumber.length - 1;
let mid: number = Math.floor((left + right) / 2);
// let found = false

while (left <= right) {
  mid = Math.floor((left + right) / 2);

  console.log("Left", left, "🚀 ~ right:", right);
  console.log("🚀 ~ mid:", mid);
  console.log("current", randomNumber[mid]);

  if (randomNumber[mid] === numberToSearch) {
    console.log("🚀 ~ numberToSearch[mid]:", randomNumber[mid]);
    console.log("Founded!");
    break;
  } else if (randomNumber[mid] > numberToSearch) {
    right = mid - 1;
    // mid = Math.floor((left + right) / 2);
  } else {
    left = mid +1;
    // mid = Math.floor((left + right) / 2);
  }
}

if(left > right){
  console.log("Not Found")
}