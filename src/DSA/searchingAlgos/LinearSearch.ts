console.log(
  "\x1b[31m%s\x1b[0m",
  "######################################################"
);

const readline = require('readline');

// Function to read input from the user
function prompt(question:any) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer:any) => {
      rl.close();
      resolve(answer);
    });
  });
}



console.log("\x1b[33m%s\x1b[0m", "Linear Search");

let randomNumber: number[] = [
  87, 45, 12, 56, 90, 34, 77, 23, 1, 59, 73, 30, 44, 11, 87, 2, 38, 39, 98, 22,
  58, 47, 55, 70, 54, 91, 69, 75, 94, 0,
];

let numberToSearch: number = 87;


for (let i = 0; i < randomNumber.length; i++) {
    let notFound:boolean = true
  if (numberToSearch === randomNumber[i]) {
    notFound = false;
    console.log("\x1b[31m%s\x1b[0m", "Founded at " + i + "th iteration");
  }
  //// U can add break to end searching when u find first one!
}

let a = prompt("?\n")
console.log(a)