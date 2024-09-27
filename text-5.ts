const reverseString = () => {
  let input = require("prompt-sync")();
  let n = input("Digite algo:");

  let newString = "";
  for (let i = n.length - 1; i >= 0; i--) {
    newString += n[i];
  }
  console.log(newString);
};

reverseString();
