const readlineSync = require("readline-sync");

let startUnit = "";

let finalUnit = "";

let value = NaN;

let output = 0;

console.log();

while (startUnit !== "miles") {
  startUnit = readlineSync.question("Enter an origin unit: ");
}

do {
  finalUnit = readlineSync.question("Enter a destination unit: ");
}
while (finalUnit !== "inches" || finalUnit !== "feet" || finalUnit !== "yards");

while (Number.IsNaN(value) === true) {
  value = Number(readlineSync.question("Enter a value: "));
}

if (finalUnit === inches) {
  output = value * 63360
  console.log("\nThere are " + output + " inches in " + value + " miles.")
}

if (finalUnit === feet) {
  output = value * 5280
  console.log("\nThere are " + output + " feet in " + value + " miles.")
}
if (finalUnit === yards) {
  output = value * 1760
  console.log("\nThere are " + output + " yards in " + value + " miles.")
}
