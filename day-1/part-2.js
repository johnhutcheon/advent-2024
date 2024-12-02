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

function numberCounter(leftListNum) {
  let count = 0;

  for (let i = 0; i < rightList.length; i++) {
    if (leftListNum === rightList[i]) {
      count++;
    }
  }
  return count;
}

let total = 0;

leftList.forEach((num) => {
  total += num * numberCounter(num);
});

console.log(total);

///forEach over leftList
/// pass each num into function that checks how many times it appears
