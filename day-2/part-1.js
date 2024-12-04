const { readFileSync, promises, fsPromises } = require("fs");

const contents = readFileSync(
  "/Users/johnhutcheon/northcoders/katas/advent/2024/day-2/data.txt",
  "utf-8"
);

const arr = contents.split(/\r?\n/);

const nestedArraysForEachLine = [];

arr.forEach((line) => {
  nestedArraysForEachLine.push(line.split(" "));
});

function checkWithinThree(passedLine) {
  let safe = true;

  const convertToNums = passedLine.map((num) => Number(num));

  for (let i = 0; i < convertToNums.length; i++) {
    if (
      convertToNums[i + 1] > convertToNums[i] + 3 ||
      convertToNums[i + 1] < convertToNums[i] - 3 ||
      convertToNums[i] === convertToNums[i + 1]
    ) {
      safe = false;
    }
  }
  return safe;
}

const within3 = [];

nestedArraysForEachLine.forEach((line) => {
  if (checkWithinThree(line)) {
    within3.push(line);
  }
});

function checkDirection(line) {
  const nums = line.map((num) => Number(num));

  let safe = true;

  let increase;
  let decrease;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      increase = true;
    }
    if (nums[i + 1] < nums[i]) {
      decrease = true;
    }
  }

  if (increase && decrease) {
    safe = false;
  }

  return safe;
}

let answer = 0;

within3.forEach((line) => {
  if (checkDirection(line)) {
    answer++;
  }
});

console.log(answer);
