/* https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript */

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('world')); // 'dlrow')
console.log(solution('hello')); // 'olleh')
console.log(solution('')); // '')
console.log(solution('h')); // 'h')

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript */

function solutionEnds(str, ending) {
  return ending.length !== 0 ? str.slice(-ending.length) === ending : true;
}

console.log(solutionEnds('abcde', 'cde')); //  true
console.log(solutionEnds('abcde', 'abc')); //  false

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript */

function DNAtoRNA(dna) {
  // return dna.replaceAll(/T/g, 'U'); // не везде работает
  return dna.replace(/T/g, 'U');
  // return dna.split("T").join("U"); // итересно
}

console.log(DNAtoRNA('TTTT')); // "UUUU"
console.log(DNAtoRNA('GCAT')); // "GCAU"
console.log(DNAtoRNA('GACCGCCGCC')); // "GACCGCCGCC"
console.log(DNAtoRNA('')); //

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript */

function pigIt(str) {
  let result = [];
  let inStr = str.split(' ');
  for (let i = 0; i < inStr.length; i++) {
    let str = inStr[i];
    result.push(/[A-Za-z]/.test(str) ? `${str.slice(1)}${str[0]}ay` : str);
  }
  return result.join(' ');
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt('Hello world !')); // elloHay orldway !

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript */

function isSolved(board) {
  let result = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] };
  for (let i = 0; i < board.length; i++) {
    result[1].push(board[0][i]);
    result[2].push(board[1][i]);
    result[3].push(board[2][i]);
    result[4].push(board[i][i]);
    result[5].push(board[i][0]);
    result[6].push(board[i][1]);
    result[7].push(board[i][2]);
    result[8].push(board[i][board.length - 1 - i]);
  }
  return findTruEqual(result) ? findTruEqual(result) : notWinner(result);
}

function findTruEqual(obj) {
  for (let key in obj) {
    let findEqual = obj[key].every((val, i, arr) => val === arr[0]);
    if (findEqual) {
      return obj[key][0];
    }
  }
}

function notWinner(obj) {
  let setArr = [];
  let max;
  let min;
  for (let key in obj) {
    let resSet = new Set(obj[key]);
    setArr.push(resSet.size);
  }
  max = Math.max(...setArr);
  min = Math.min(...setArr);
  return max === min ? 0 : -1;
}

console.log(
  isSolved([
    // не до конца игры
    [1, 2, 1],
    [2, 1, 2],
    [2, 1, 0],
  ])
);
console.log(
  isSolved([
    // вин "X" => 1
    [0, 1, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
);
console.log(
  isSolved([
    // вин "O" => 2
    [1, 1, 2],
    [1, 2, 2],
    [2, 2, 1],
  ])
);
console.log(
  isSolved([
    // Ничья
    [1, 2, 2],
    [2, 2, 1],
    [1, 1, 2],
  ])
);

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript */

function validParentheses(parens) {
  if (parens.length === 0) {
    return true;
  } else if (parens.startsWith(')')) {
    return false;
  }
  let arr = parens.split('');
  for (let i = 0; arr.length > 3; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== ')') {
      arr.splice(i, 2);
      i = 0;
    }
  }
  return arr.join('') === '()';
}

// function validParentheses(parens){ // топовое решение
//     let n = 0;
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] === '(') n++;
//         if (parens[i] === ')') n--;
//         if (n < 0) return false;
//     }
//
//     return n === 0;
// }

// function validParentheses(str) { // решение с канала Сергея Пузанкова
//     let stack = [];
//     const closeArr = [')', '}', ']'];
//     const bracket = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     }
//     for (let i = 0; i < str.length; i++) {
//         const current = str[i]
//         if(closeArr.includes(current)) {
//             if (bracket[current] !== stack.pop()) return false;
//         } else {
//             stack.push(current)
//         }
//     }
//     return stack.length === 0;
// }

console.log(validParentheses('')); // true
console.log(validParentheses('()')); // true
console.log(validParentheses(')(()))')); // false
console.log(validParentheses('(')); // false
console.log(validParentheses('())(')); // false
console.log(validParentheses('())(()')); // false
console.log(validParentheses('(())((()())())')); // true
console.log(validParentheses('()()(())()((()))()()(())()()()()()(())()')); // true

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript */

function domainName(url) {
  const result = [];
  if (url.startsWith('ht')) {
    result.push(url.split('//').splice(1).join(''));
  } else {
    result.push(url.split('.').join('.'));
  }

  const res = result.join('.').split('.');
  if (res[0].startsWith('ww')) {
    return res[1];
  } else {
    return res[0];
  }
}

console.log(domainName('http://github.com/carbonfive/raygun')); // "github"
console.log(domainName('http://www.zombie-bites.com')); // "zombie-bites"
console.log(domainName('https://www.cnet.com')); // "cnet"
console.log(domainName('www.xakep.ru')); // "xakep"
console.log(domainName('http://google.com')); // "google"
console.log(domainName('http://google.co.jp')); // "google"
console.log(domainName('https://youtube.com')); // "youtube"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript */

function zero() {}

function one() {}

function two() {}

function three() {}

function four() {}

function five() {}

function six() {}

function seven() {}

function eight() {}

function nine() {}

function plus() {}

function minus() {}

function times() {}

function dividedBy() {}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/57f609022f4d534f05000024 */

function stray(numbers) {
  const result = numbers.reduce(function (acc, el) {
    acc[el] ? acc[el]++ : (acc[el] = 1);
    // acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  for (let key in result) {
    if (result[key] === 1) {
      return +key;
    }
  }
}

console.log(stray([1, 1, 2])); // ==> 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // ==> 3

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/54ba84be607a92aa900000f1 */

function isIsogram(str) {
  let setStr = new Set(str.toLowerCase()).size;
  if (setStr === str.length) return true;
  return false;
}

// function isIsogram(str){
//   return !/(\w).*\1/i.test(str)
// }

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isogram')); // true
console.log(isIsogram('aba')); // false, "same chars may not be adjacent"
console.log(isIsogram('moOse')); // false, "same chars may not be same case"
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('')); // true, "an empty string is a valid isogram"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript */

const amountOfPages = (summary) => {
  if (summary < 11) return summary;
  const arrNumbers = [];
  let strNumbers = '';
  for (let i = 0; i < summary; i++) {
    strNumbers += i;
    arrNumbers.push(i);
    if (strNumbers.length - 1 === summary) {
      return arrNumbers[i];
    }
  }
};
console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));
console.log(amountOfPages(660));

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript */

const spinWords = (string) => {
  const result = [];
  const arrString = string.split(' ');
  for (let i = 0; i < arrString.length; i++) {
    const element = arrString[i];
    if (element.length >= 5) {
      result.push(element.split('').reverse().join(''));
    } else {
      result.push(element);
    }
  }
  return result.join(' ');
};

console.log(spinWords('Welcome')); // "emocleW"
console.log(spinWords('Hey fellow warriors')); // "Hey wollef sroirraw"
console.log(spinWords('This is a test')); // "This is a test"
console.log(spinWords('This is another test')); // "This is rehtona test"
console.log(spinWords('You are almost to the last test')); // "You are tsomla to the last test"
console.log(spinWords('Just kidding there is still one more')); // "Just gniddik ereht is llits one more"
console.log(spinWords('Seriously this is the last one')); // "ylsuoireS this is the last one"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript */

function digitalRoot(number) {
  const strNumber = String(number);
  let sum = strNumber.split('').reduce((acc, item) => acc + Number(item), 0);
  while (String(sum).length > 1) {
    sum = String(sum)
      .split('')
      .reduce((acc, item) => acc + Number(item), 0);
  }
  return sum;

  // return (number - 1) % 9 + 1;  // из готовых решений
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6
console.log(digitalRoot(924)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript */

const createPhoneNumber = (numbers) => {
  const result = numbers.join('');
  return `(${result.slice(0, 3)}) ${result.slice(3, 6)}-${result.slice(6, 10)}`;
};

function createPhoneNumber1(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}

function createPhoneNumber2(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"
console.log(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //  "(111) 111-1111"
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript */

function inArray(array1, array2) {
  let result = new Set();
  for (let i = 0; i < array1.length; i++) {
    let itemCase = array1[i];
    for (let j = 0; j < array2.length; j++) {
      let itemBase = array2[j];
      if (itemBase.includes(itemCase)) {
        result.add(itemCase);
      }
    }
  }
  return Array.from(result).sort();
}

let arr1 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
let arr2 = ['live', 'strong', 'arp'];

console.log(inArray(arr2, arr1)); // ["arp", "live", "strong"]

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript */

const toCamelCase = (str) => {
  if (str === '') return str;
  const strArr = str.includes('-') ? str.split('-') : str.split('_');
  const result = strArr.map((el, index) => {
    let element = el[0];
    if (element.toUpperCase() !== element) return `${index === 0 ? element : element.toUpperCase()}${el.slice(1)}`;
    return `${element}${el.slice(1)}`;
  });
  return result.join('');
};

console.log(toCamelCase('')); //  ''
console.log(toCamelCase('the_stealth_warrior')); //  "theStealthWarrior"
console.log(toCamelCase('The-Stealth-Warrior')); //  "TheStealthWarrior"
console.log(toCamelCase('A-B-C')); //  "ABC"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript */

const solution1 = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    const element = str[i];
    const nextElement = str[i + 1] ? str[i + 1] : '_';
    result.push(`${element}${nextElement}`);
  }
  return result;
};

console.log(solution1('abcdef')); //  ["ab", "cd", "ef"])
console.log(solution1('abcdefg')); //  ["ab", "cd", "ef", "g_"])
console.log(solution1('')); //  [])

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5848565e273af816fb000449 */

var encryptThis = function (text) {
  const result = [];
  const arrString = text.split(' ');
  for (let i = 0; i < arrString.length; i++) {
    const itemCode = arrString[i].charCodeAt(0);
    const itemWord = arrString[i].slice(1).split('');
    [itemWord[0], itemWord[itemWord.length - 1]] = [itemWord[itemWord.length - 1], itemWord[0]];
    result.push(`${itemCode}${itemWord.join('')}`);
  }
  return result.join(' ');
};

console.log(encryptThis('A'));
console.log(encryptThis('Thank you Piotr for all your help'));
console.log(encryptThis('Why can we not all be like that wise old bird'));

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/javascript */

const maxSequence = (arr) => {
  let result = 0;
  let maxValue = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    maxValue += element;
    result = Math.max(result, maxValue);

    if (maxValue < 0) {
      maxValue = 0;
    }
  }
  return result;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript */

const countBits = (n) => {
  const num = n.toString(2);
  return num.split('').reduce((acc, el) => (acc += Number(el)), 0);
};

console.log(countBits(1234)); // 5
console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript */

const indexUniqNumber = (arr) => {
  let resultNumber;
  for (let i = 0; i < arr.length; i++) {
    let first = arr.indexOf(arr[i]);
    let last = arr.lastIndexOf(arr[i]);
    if (first === last) {
      resultNumber = arr.indexOf(arr[i]);
    }
  }
  return resultNumber;
};
const findUniq = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].replace(/ /g, '').toLocaleLowerCase();
    result.push(Array.from(new Set(element)).reduce((acc, el) => (acc += el.codePointAt(0)), 0));
  }
  return arr[indexUniqNumber(result)];
};

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // BbBb
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // foo
console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])); // Harry Potter
console.log(findUniq(['silvia', 'vasili', 'victor'])); // victor
console.log(findUniq(['    ', 'a', ' '])); // a

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/583203e6eb35d7980400002a */

const countSmileys = (arr) => {
  const arrNose = ['-', '~'];
  const arrEyes = [':', ';'];
  const arrMouth = [')', 'D'];
  return arr.reduce((acc, el) => {
    if (el.length === 3) {
      if (arrEyes.includes(el[0]) && arrMouth.includes(el[el.length - 1]) && arrNose.includes(el[1])) return acc + 1;
      return acc;
    } else if (el.length === 2) {
      if (arrEyes.includes(el[0]) && arrMouth.includes(el[el.length - 1])) return acc + 1;
      return acc;
    } else return acc;
  }, 0);
};

// const countSmileys = (arr) => { // best solutions
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

console.log(countSmileys([])); //  0
console.log(countSmileys([':D', ':~)', ';~D', ':)'])); //  4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); //  2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //  1
console.log(countSmileys([':---)', '))', ';~~D', ';D'])); //  1
console.log(countSmileys([';~)', ':)', ':-)', ':--)'])); //  3

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/58539230879867a8cd00011c/javascript */

const findChildren = (dancingBrigade) => {
  const result = [];
  const sortArr = dancingBrigade.toLowerCase().split('').sort();
  for (let i = 0; i < sortArr.length - 1; i++) {
    let elem = sortArr[i];
    let elemNext = sortArr[i + 1];
    if (i === 0) result.push(elem.toUpperCase());
    if (elem !== elemNext) {
      result.push(elemNext.toUpperCase());
    } else {
      result.push(elem);
    }
  }
  return result.join('');
};

console.log(findChildren('beeeEBb')); // "BbbEeee"
console.log(findChildren('uwwWUueEe')); // "EeeUuuWww"
console.log(findChildren('abBA')); // "AaBb"
console.log(findChildren('AaaaaZazzz')); // "AaaaaaZzzz"
console.log(findChildren('CbcBcbaA')); // "AaBbbCcc"
console.log(findChildren('xXfuUuuF')); // "FfUuuuXx"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript */

const duplicateCount = (text) => {
  const arrWord = text.toLowerCase().split('');
  let countObj = {};
  arrWord.forEach(function (letter) {
    countObj[letter] ? countObj[letter]++ : (countObj[letter] = 1);
  });

  return Object.values(countObj).reduce((acc, el) => (el > 1 ? (acc += 1) : acc), 0);
};

console.log(duplicateCount('')); //  0
console.log(duplicateCount('abcde')); //  0
console.log(duplicateCount('aabbcde')); //  2
console.log(duplicateCount('aabBcde')); //  2,"should ignore case"
console.log(duplicateCount('Indivisibility')); //  1
console.log(duplicateCount('Indivisibilities')); //  2, "characters may not be adjacent"

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript */

const findOutlier = (integers) => {
  const odd = [];
  const even = [];
  for (let i = 0; i < integers.length; i++) {
    const element = integers[i];
    element % 2 === 0 ? even.push(element) : odd.push(element);
  }
  return odd.length > 1 ? even[0] : odd[0];
};

console.log(findOutlier([0, 1, 2])); //  1
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //  11 odd
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //  160 even
console.log(findOutlier([1, 2, 3])); //  2
console.log(findOutlier([2, 6, 8, 10, 3])); //  3
console.log(findOutlier([0, 0, 3, 0, 0])); //  3
console.log(findOutlier([1, 1, 0, 1, 1])); //  0

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/54b724efac3d5402db00065e/javascript */

const decodeMorse = (morseCode) => {
  const ref = {
    '.-': 'A',
    '-.-.--': '!',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '...---...': 'SOS',
    '.-.-.-': '.',
  };
  const parsWord = morseCode
    .trim()
    .split('   ')
    .map((el) => el.split(' '));
  for (let i = 0; i < parsWord.length; i++) {
    for (let j = 0; j < parsWord[i].length; j++) {
      parsWord[i][j] = ref[parsWord[i][j]];
    }
  }
  return parsWord.map((el) => el.join('')).join(' ');
};
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(
  decodeMorse(
    '      ...---... -.-.--   - ....' +
      ' .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-' +
      '   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --..' +
      ' -.--   -.. --- --. .-.-.- '
  )
);

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/51b62bf6a9c58071c600001b/javascript */

const romanNumerals = (number) => {
  const romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  for (let i in romanNum) {
    while (number >= romanNum[i]) {
      result += i;
      number -= romanNum[i];
    }
  }
  return result;
};

console.log(romanNumerals(1)); // 'I'
console.log(romanNumerals(4)); // 'IV'
console.log(romanNumerals(5)); // 'V'
console.log(romanNumerals(9)); // 'IX'
console.log(romanNumerals(10)); // 'X'
console.log(romanNumerals(50)); // 'L'
console.log(romanNumerals(99)); // 'XCIX'
console.log(romanNumerals(100)); // 'C'
console.log(romanNumerals(1000)); // 'M'
console.log(romanNumerals(1001)); // 'MI'
console.log(romanNumerals(1990)); // 'MCMXC'
console.log(romanNumerals(2007)); // 'MMVII'
console.log(romanNumerals(2004)); // 'MMIV'
console.log(romanNumerals(2008)); // 'MMVIII'
console.log(romanNumerals(2020)); // 'MMXX'
console.log(romanNumerals(1499)); // 'MCDXCIX'

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript */

const romanNum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const corner = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

const countCorner = (romNum) => {
  let result = 0;
  for (let i = 0; i < romNum.length; i++) {
    const element = romNum[i];
    result += romanNum[element];
  }
  return result;
};
const romanNumDecoder = (numberStr) => {
  let count = 0;
  for (let i = 0; i < corner.length; i++) {
    const element = corner[i];
    if (numberStr.includes(element)) {
      while (numberStr.includes(element)) {
        numberStr = numberStr.replace(element, '');
        count += romanNum[element];
      }
    }
  }
  return count + countCorner(numberStr);
};

console.log(romanNumDecoder('XXI')); //  21
console.log(romanNumDecoder('I')); //  1
console.log(romanNumDecoder('IV')); //  4
console.log(romanNumDecoder('MMVIII')); //  2008
console.log(romanNumDecoder('MDCLXVI')); //  1666
console.log(romanNumDecoder('MCDXCIX')); //  1499

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript */

const findMissingLetter = (array) => {
  let arr_en;
  const arr_enUpper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const arr_enLower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  if (/^[A-Z]*$/.test(array[0])) {
    arr_en = arr_enUpper;
  } else {
    arr_en = arr_enLower;
  }
  const sliceArr = arr_en.slice(arr_en.indexOf(array[0]), arr_en.indexOf(array[array.length - 1]) + 1);
  return sliceArr.filter((el) => !array.includes(el))[0];
};
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/52597aa56021e91c93000cb0 */

const moveZeros = (arr) => {
  const arrWithoutZero = arr.filter((el) => el !== 0);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === 0) {
      result.push(item);
    }
  }
  return [...arrWithoutZero, ...result];
};
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // [false,1,1,2,1,3,"a",0,0]

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript */

const generateHashtag = (str) => {
  // if (str.replaceAll(' ', '').length >= 140 || str.replaceAll(' ', '').length === 0) return false;
  if (str.replace(/\s/g, '').length >= 140 || str.replace(/\s/g, '').length === 0) return false;
  let result = '#';
  const arrStr = str.split(' ');
  for (let i = 0; i < arrStr.length; i++) {
    const item = arrStr[i];
    result += item ? `${item[0].toUpperCase()}${item.slice(1)}` : '';
  }
  return result;
};

console.log(generateHashtag('')); //  false, "Expected an empty string to return false
console.log(generateHashtag(' '.repeat(200))); //  false, "Still an empty string
console.log(generateHashtag('Do We have A Hashtag')); //  "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.
console.log(generateHashtag('Codewars')); //  "#Codewars", "Should handle a single word.
console.log(generateHashtag('Codewars Is Nice')); //  "#CodewarsIsNice", "Should remove spaces.
console.log(generateHashtag('Codewars is nice')); //  "#CodewarsIsNice", "Should capitalize first letters of words.
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars')); //  "#CodeWars
console.log(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
  )
); //  false, "Should return false if the final word is longer than 140 chars.
console.log(generateHashtag('a'.repeat(139))); //  "#A" + "a".repeat(138), "Should work
console.log(generateHashtag('a'.repeat(140))); //  false, "Too long

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript */

function orderWeight(string) {
  const arrStr = string.split(' ');
  const resultArr = [];
  for (let i = 0; i < arrStr.length; i++) {
    const item = arrStr[i];
    resultArr.push([item, item.split('').reduce((acc, el) => (acc += Number(el)), 0)]);
  }
  resultArr.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
    }
    return 0;
  });
  return resultArr.map((el) => el[0]).join(' ');
}

function _orderWeight(str) {
  // best solutions
  return str
    .split(' ')
    .sort((a, b) => {
      let sumA = a.split('').reduce((acc, cur) => acc + Number(cur), 0);
      let sumB = b.split('').reduce((acc, cur) => acc + Number(cur), 0);
      if (sumA < sumB) return -1;
      if (sumA > sumB) return 1;
      if (a < b) return -1;
      return 1;
    })
    .join(' ');
}

console.log(orderWeight('103 123 4444 99 2000')); //  "2000 103 123 4444 99"
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')); // "11 11 2000 10003 22 123 1234000 44444444 9999"
console.log(orderWeight('56 65 74 100 99 68 86 180 90')); // "100 180 90 56 65 74 68 86 99"
