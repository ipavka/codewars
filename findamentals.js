/* https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript */

function squareSum(numbers){
    return numbers.reduce((acc, ite) => {
        return acc + ite ** 2
    }, 0)
}

console.log(squareSum([1,2])) // 5
console.log(squareSum([0, 3, 4, 5])) // 50
console.log(squareSum([])) // 0

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript */

let str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
    return this.split(' ').map((item) => {
        return `${item[0].toUpperCase()}${item.slice(1)}`
    }).join(' ')
};

console.log(str.toJadenCase())

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript */

function order(words){
    const regexp = /\d/g;
    return words.split(' ').sort((a, b) => {
        return a.match(regexp).join('') - b.match(regexp).join('')
    }).join(' ')
  }

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) // "", "empty input should return empty string" 

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript */

const high = (x) => {

}

// console.log(high('man i need a taxi up to ubud')) // 'taxi'
// console.log(high('what time are we climbing up the volcano')) // 'volcano'
// console.log(high('take me to semynak')) // 'semynak'
// console.log(high('aa b')) // 'aa'
// console.log(high('b aa')) // 'b'
// console.log(high('bb d')) // 'bb'
// console.log(high('d bb')) // 'd'
// console.log(high('aaa b')) // 'aaa'
let str = 'man i need a taxi up to ubud'.split(' ');

const result = [];
const objRes = {};
for (let i = 0; i < str.length ; i++) {
    let word = str[i];
    objRes[word] = 0;
    // console.log(str[i].charCodeAt(0))
    for (let j = 0; j < word.length; j++) {
        objRes[word] += word[j].charCodeAt(0)
        // result.push(word[j].charCodeAt(0))
    }
}

console.log(objRes)
console.log(result.length)