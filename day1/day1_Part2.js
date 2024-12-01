import fs from "fs";

//Step 1 - Read File.
const data = fs.readFileSync(
  "/Users/yehonatanz/Wix/AdventOfCode/day1/input.txt",
  "utf8"
);
const allData = data.split("\n").map((line) => line.trim());

let result = 0;
const list1 = [];
const list2 = [];

//Step 2 - Parse the data.

for (const line of allData) {
  const [item1, item2] = line.split(/\s+/).map((item) => item.trim());
  list1.push(item1);
  list2.push(item2);
}

//Step 3 - Sort the lists.

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

// Step 4 - Create a map to count occurrences of numbers from list1 in list2.
//// Note that we need to count the numbers on list2, not list1. ->
//// Because if it's none existent in list2, then we won't see it in list2 anyways.
const countMap = new Map();

for (const num of list2) {
  if (countMap.has(num)) {
    countMap.set(num, countMap.get(num) + 1);
  } else {
    countMap.set(num, 1);
  }
}

// Step 5 - Calculate the result using the counts from countMap.
for (const num of list1) {
  if (countMap.has(num)) {
    result += num * countMap.get(num);
  }
}

//Step 6 - Return result.
console.log(result);
