const os = require("os");

// const user = os.userInfo();
// console.log(user);
// console.log(`The System Uptime is ${os.uptime()} seconds.`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);

const path = require("path");

// console.log(path.sep);

// const filePath = path.join("/folder", "subfolder", "context.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, "folder", "subfolder", "context.txt");
// console.log(absolute);

// const { readFileSync, writeFileSync, writeFile } = require("fs");
// const first = readFileSync("./folder/test.txt", "utf-8");
// const second = readFileSync("./folder/text1.txt", "utf-8");

// writeFileSync("./folder/result.txt", `Here is the result: ${first}, ${second}`);
// console.log(first, second);

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else {
    res.end(`<h1>Oops!</h1>
    <p> We don't seem to find the page you are looking for</p>
    <a href="/">Back</a>
  `);
  }

  if (req.url === "/about") {
    res.end("Here is our short History!");
  }
  res.end(`<h1>Oops!</h1>
    <p> We don't seem to find the page you are looking for</p>
    <a href="/">Back</a>
  `);
});

server.listen(5000);
