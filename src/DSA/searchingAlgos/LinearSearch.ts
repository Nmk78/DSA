import { ask, rl } from "../../userInput";

console.log(
  "\x1b[31m%s\x1b[0m",
  "######################################################"
);

// const readline = require('readline');

// // Create an interface to read data from process.stdin
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt the user for input
// rl.question('What is your name? ', (answer) => {
//   console.log(`Hello, ${answer}!`);

//   // Close the readline interface
//   rl.close();
// });


console.log("\x1b[33m%s\x1b[0m", "Linear Search");

let randomNumber: number[] = [
  87, 45, 12, 56, 90, 34, 77, 23, 1, 59, 73, 30, 44, 11, 87, 2, 38, 39, 98, 22,
  58, 47, 55, 70, 54, 91, 69, 75, 94, 0,111
];


export const LinearSearch = (numberToSearch:any)=>{
  for (let i = 0; i < randomNumber.length -1; i++) {
    let notFound:boolean = true
  if (numberToSearch === randomNumber[i]) {
    notFound = false;
    console.log("\x1b[31m%s\x1b[0m", "Founded at " + i + "th iteration");
    return 1
  }
  //// U can add break to end searching when u find first one!
}
return -1

}

// let a = prompt("?\n")
// console.log("Input = ", a)

const DoLinearSearch = async (prompt: string) => {
  let numberToSearch = null;
  numberToSearch = await ask(prompt);
  if(numberToSearch != null){
    console.log("Searching")
    LinearSearch(parseInt(numberToSearch));
  }
  rl.close();
};

DoLinearSearch("Number to search : ")