/* https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript */

function twoSum(numbers, target) {
  // my decision
  const result = [];
  numbers.forEach((el, index) => {
    const arrNext = numbers.slice(index + 1);
    arrNext.forEach((number, i) => {
      if (el + number === target) {
        result.push(numbers.indexOf(el), numbers.indexOf(number, index + 1));
      }
    });
  });
  return result.slice(0, 2);
}

function twoSum_(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    second = numbers.indexOf(target - numbers[i], i + 1);
    if (second > i) return [i, second];
  }
  return [];
}

function _twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const _twoSum_ = (numbers, target) => {
  // best in speed and memory
  const indices = new Map();
  for (let index = 0; index < numbers.length; index++) {
    console.log(indices);
    const complement = target - numbers[index];
    if (indices.has(complement)) {
      return [indices.get(complement), index];
    }
    indices.set(numbers[index], index);
  }
};

const testArr = [
  956, -921, -490, 461, 899, 417, -16, -831, 599, -12, 630, -233, 103, -382, 423, 990, -997, 22, 928, 74, 813, 174,
  -933, -340, -982, -301, 135, -146, -15, -656, -119, 285, -992, -3, -893, -847, -400, -472, -289, -519, -59, -686, -7,
  924, -481, 379, 211, 430, -102, 651, -211, 910, -412, 124, 475, 287, -705, -653, 456,
];
console.log(twoSum([1, 2, 3], 4)); // [0, 2] or [2, 0]
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([2, 2, 3], 4)); // [0, 1]
console.log(twoSum(testArr, -64)); // [ 5, 44 ]
