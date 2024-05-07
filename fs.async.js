const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./folder/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./folder/text1.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./folder/result-async.txt",
      `Here is my result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task.");
