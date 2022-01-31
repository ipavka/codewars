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
    const alphabet ='abcdefghijklmnopqrstuvwxyz';
    let result;
    const str = x.split(' ');
    const objRes = {};
    const enumLetters = {};

    let count = 1
    for (let value of alphabet) { // numbering of letters
        enumLetters[value] = count++
    }

    for (let i = 0; i < str.length ; i++) {  // counting "points"
        const word = str[i];
        objRes[word] = 0;
        for (let j = 0; j < word.length; j++) {
            objRes[word] += enumLetters[word[j]]
        }
    }
    result = Object.entries(objRes).sort((a, b) => {
        return b[1] - a[1]
    })
    return result[0][0]
}
// console.log('a'.charCodeAt(0) -96)

console.log(high('man i need a taxi up to ubud')) // 'taxi'
console.log(high('what time are we climbing up the volcano')) // 'volcano'
console.log(high('take me to semynak')) // 'semynak'
console.log(high('aa b')) // 'aa'
console.log(high('b aa')) // 'b'
console.log(high('bb d')) // 'bb'
console.log(high('d bb')) // 'd'
console.log(high('aaa b')) // 'aaa'
console.log(high('px wr kn gj')) // 'wr'

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript */

function SeriesSum(n){
    let count = 0;
    let sum = 0;
    for (let i = 1; count < n; i = i + 3) {
        sum += 1 / i
        count++
    }
    return sum.toFixed(2)
}

console.log(SeriesSum(1)) // "1.00"
console.log(SeriesSum(2)) // "1.25"
console.log(SeriesSum(3)) // "1.39"
console.log(SeriesSum(4)) // "1.49"
console.log(SeriesSum(5)) // "1.57"

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/5626b561280a42ecc50000d1 */


const sumDigPow = (start, fin) => {
    let result = [];

    function exponen(num) {
        let count = 0;
        for (let i = 1; i <= num.length; i++) {
            count += num[i-1]**i
        }
        return count == num
    }

    for (let i = start; i <= fin; i++) {
        if(exponen(String(i))) result.push(i);
    }
    return result
}


console.log(sumDigPow(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)) //  [89]
console.log(sumDigPow(90, 100)) // []
console.log(sumDigPow(90, 150)) // [135]
console.log(sumDigPow(50, 150)) // [89, 135]
console.log(sumDigPow(10, 150)) // [89, 135]

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript */

function rowSumOddNumbers(number) {
    const result = [];
    const fullNumberArr = number * number + number;
    for (let i = 1; i <= fullNumberArr; i += 2) {
        result.push(i)
    }
    return result.slice(-number).reduce((currentSum, currentNumber) => {
        return currentSum + currentNumber
    }, 0);
}
console.log(rowSumOddNumbers(2));

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript */


function sortArray(array) {
    const oddArray = [];

    array.forEach(element => {
        if(element % 2 !== 0) {
          oddArray.push(element)
          oddArray.sort((a,b) => {
              return b - a
            });
        }
      });
    return array.reduce((acc, item) => {
        if (item % 2 !== 0) {
          acc.push(oddArray.pop())
        } else {
          acc.push(item)
        }
        return acc
      }, [])
  }


console.log(sortArray([5, 3, 2, 8, 1, 4])) //  [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) //  [1, 3, 5, 8, 0]
console.log(sortArray([])) // []
console.log(sortArray([7, 1])) // [1, 7]
console.log(sortArray([5, 8, 6, 3, 4]))  // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))  // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript */

function filter_list(array) {
    return array.filter(function (num) {
      return typeof num === "number"
    })
  }

console.log(filter_list([1,2,'a','b'])) // [1,2]
console.log(filter_list([1,'a','b',0,15])) // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) // [1,2,123]

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript */

function nbYear(p0, percent, aug, p) {
    let count = 0;
    while (p0 < p) {
        p0 += p0 * (percent/100) + aug
        count++
    }
    return count
}

console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)) // 94

console.log('*'.repeat(30))