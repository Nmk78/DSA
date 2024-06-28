const readline = require('readline');

// Create an interface to read data from process.stdin
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a function to ask a question and return a promise
export const ask = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};
