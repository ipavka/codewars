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

}

console.log(alphanumeric("Mazinkaiser")) // true
console.log(alphanumeric("hello world_")) // false
console.log(alphanumeric("PassW0rd")) // true

console.log('*'.repeat(30))