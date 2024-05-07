const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./folder/test.txt", "utf-8");
const second = readFileSync("./folder/text1.txt", "utf-8");

writeFileSync(
  "./folder/results-sync.txt",
  `Here is the resut for sync: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
