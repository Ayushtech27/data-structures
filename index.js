import {
  charCount,
  optimizedCharCount,
} from "./functions/problemSolvingApproach/charCount.js";
import { same } from "./functions/problemSolvingPatterns/same.js";

const testCasesForSameFunction = [
  { arr1: [1, 2, 3], arr2: [1, 4, 9], expected: true }, // True case
  { arr1: [1, 2, 3], arr2: [1, 9, 16], expected: false }, // False case
  { arr1: [2, 3, 4], arr2: [4, 9, 16], expected: true }, // True case
  { arr1: [1, 2], arr2: [1, 4, 4], expected: false }, // False case
];

console.log("Character count function: ", charCount("Hi there!"));
console.log(
  "Optimized character count function: ",
  optimizedCharCount("Hello there!")
);

console.log("same function: ");
testCasesForSameFunction.forEach(({ arr1, arr2, expected }, index) => {
  const result = same([...arr1], [...arr2]); // Use a copy of the arrays to prevent modification
  console.log(
    `Test Case ${index + 1}: `,
    result === expected ? "Passed ✅" : "Failed ❌"
  );
});
