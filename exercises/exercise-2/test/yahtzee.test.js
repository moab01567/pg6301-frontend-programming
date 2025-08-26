import { expect, test } from "vitest";

function yatzeeScore(chance, numbers) {
  var sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}

function yatzeeOnes(numbers) {
  var counter = 0;
  numbers.forEach((number) => (number === 1 ? counter++ : 0));
  return counter;
}

test("scoring Chance add all dice", () => {
  expect(yatzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
});
