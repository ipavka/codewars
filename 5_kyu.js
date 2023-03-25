/* https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript */

function permutations(string) {
  const countObj = {};
  for (let i = 0; i < 1000; i++) {
    const caseVar = string
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
    countObj[caseVar] ? countObj[caseVar]++ : (countObj[caseVar] = 1);
  }
  return Object.keys(countObj);
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
console.log(permutations('abcd')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript */

function alphanumeric(string) {
  if (string.length === 0) return false;
  const regex = /[^A-Za-z0-9\\s]/g;
  return !regex.test(string);
}

console.log(alphanumeric('Mazinkaiser')); // true
console.log(alphanumeric('hello world_')); // false
console.log(alphanumeric('PassW0rd')); // true
console.log(alphanumeric('     ')); // false
console.log(alphanumeric('')); // false

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript */

const uniqueInOrder = (iterable) => {
  let inData = typeof iterable !== 'string' ? iterable : iterable.split('');
  let resArr = [];
  for (let i = 0; i < inData.length; i++) {
    const current = inData[i];
    const next = inData[i + 1];
    if (current !== next) {
      resArr.push(inData[i]);
    }
  }
  return resArr;
};

// const uniqueInOrder = (iterable) => { // вариант из решений
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript */

function wave(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    const arrStr = string.split('');

    if (arrStr[i] !== ' ') {
      arrStr[i] = arrStr[i].toUpperCase();
      result.push(arrStr.join(''));
    }
  }
  return result;
}

console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('codewars')); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave('')); // []
console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(' gap ')); // [" Gap ", " gAp ", " gaP "]

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript */

function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let result = -1;
    let ballBounces = h;

    while (ballBounces > window) {
      ballBounces *= bounce;
      result += 2;
    }
    return result;
  } else return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 1, 1.5)); // 15

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript */

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); //  1
console.log(binaryArrayToNumber([0, 0, 1, 0])); //  2
console.log(binaryArrayToNumber([1, 1, 1, 1])); //  15
console.log(binaryArrayToNumber([0, 1, 1, 0])); //  6

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript */

const deleteNth = (arr, n) => {
  let countObj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let elementArr = arr[i];
    countObj[elementArr] ? countObj[elementArr]++ : (countObj[elementArr] = 1);
    if (countObj[elementArr] <= n) {
      result.push(elementArr);
    }
  }
  return result;
};

function deleteNth1(arr, x) {
  // вариант из лучших решений
  let cache = {};
  return arr.filter((n) => {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

console.log(deleteNth([1, 1, 1, 1], 2)); // [ 1, 1 ]
console.log(deleteNth([20, 37, 20, 21], 1)); // [ 20, 37, 21 ]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5541f58a944b85ce6d00006a/javascript */

const productFib = (mul) => {
  let stopper = true;
  let count = 1;
  let result = [];
  while (stopper) {
    let f1 = fib(count);
    let f2 = fib(count + 1);
    let f3 = fib(count + 2);
    count++;
    if (f1 * f2 === mul) {
      result.push(f1, f2, true);
      stopper = false;
    } else if (f1 * f2 < mul && f2 * f3 > mul) {
      result.push(f2, f3, false);
      stopper = false;
    }
  }
  return result;
};

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(productFib(4895)); //  [55, 89, true])
console.log(productFib(5895)); //  [89, 144, false])
console.log(productFib(74049690)); //  [6765, 10946, true])
console.log(productFib(84049690)); //  [10946, 17711, false])
console.log(productFib(193864606)); //  [10946, 17711, true])
console.log(productFib(447577)); //  [610, 987, false])
console.log(productFib(602070)); //  [610, 987, true])

console.log('*'.repeat(30));
