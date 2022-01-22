/* https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript */

function solution(str){
    return str.split('').reverse().join('')
}

console.log(solution('world')) // 'dlrow')
console.log(solution('hello')) // 'olleh')
console.log(solution('')) // '')
console.log(solution('h')) // 'h')

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript */

function solutionEnds(str, ending){
    return ending.length !== 0 ? str.slice(-ending.length) === ending : true
}

console.log(solutionEnds('abcde', 'cde')) //  true
console.log(solutionEnds('abcde', 'abc')) //  false

console.log('*'.repeat(30))

