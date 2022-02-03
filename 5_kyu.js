/* https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript */


function permutations(string) {
    const countObj = {};
    for (let i = 0; i < 1000; i++) {
        const caseVar = string.split('').sort(() => Math.random() - 0.5).join('');
        countObj[caseVar] ? countObj[caseVar]++ : (countObj[caseVar] = 1);
    }
    return Object.keys(countObj)
}


console.log(permutations('a')) // ['a']
console.log(permutations('ab')) // ['ab', 'ba']
console.log(permutations('aabb')) // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
console.log(permutations('abcd')) // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript */


function alphanumeric(string){
    if (string.length === 0) return false;
    const regex = /[^A-Za-z0-9\\s]/g
    return !regex.test(string)
}

console.log(alphanumeric("Mazinkaiser")) // true
console.log(alphanumeric("hello world_")) // false
console.log(alphanumeric("PassW0rd")) // true
console.log(alphanumeric("     ")) // false
console.log(alphanumeric("")) // false

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript */

const uniqueInOrder = (iterable) => {
    let inData = typeof iterable !== 'string' ? iterable : iterable.split('');
    let resArr = []
    for (let i = 0; i < inData.length; i++) {
        const current = inData[i];
        const next = inData[i+1];
        if (current !== next) {
            resArr.push(inData[i])
        }
    }
    return resArr
}

// const uniqueInOrder = (iterable) => { // вариант из решений
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]


console.log('*'.repeat(30))

