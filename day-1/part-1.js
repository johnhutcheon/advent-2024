const { readFileSync, promises, fsPromises } = require("fs");

const contents = readFileSync(
  "/Users/johnhutcheon/northcoders/katas/advent/2024/day-1/data.txt",
  "utf-8"
);

const arr = contents.split(/\r?\n/);

const leftList = [];
const rightList = [];

arr.forEach((pair) => {
  leftList.push(Number(pair.slice(0, 5)));
  rightList.push(Number(pair.slice(pair.length - 5, pair.length)));
});

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

const differences = [];

leftList.forEach((num, index) => {
  differences.push(num - rightList[index]);
});

const positiveNums = differences.map((num) => Math.abs(num));

const solution = positiveNums.reduce((a, b) => a + b);

console.log(solution);
