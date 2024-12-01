import fs from "fs";

//Step 1 - Read File.
const data = fs.readFileSync(
  "/Users/yehonatanz/Wix/AdventOfCode/day1/dugma.txt",
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

//Step 4 - Calculate the difference between the two lists.

for (let idx = 0; idx < list1.length; idx++) {
  const num1 = list1[idx];
  const num2 = list2[idx];
  result += Math.abs(num1 - num2);
}

//Step 5 - Return result.

console.log(result);
