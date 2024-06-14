/**
 * @param {string} romanString
 * @return {number}
 */
// 13. Roman to Integer https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(romanString) {
  let count = 0;
  let newStr = romanString;
  const arrayException = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
  const romObj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  arrayException.forEach((element) => {
    if (romanString.includes(element)) {
      newStr = newStr.replace(element, '');
      count += romObj[element];
    }
  });
  if (newStr) {
    newStr.split('').forEach((el) => (count += romObj[el]));
  } else if (count === 0) {
    romanString.split('').forEach((el) => (count += romObj[el]));
  }
  return count;
}

// https://leetcode.com/problems/valid-parentheses/description/
