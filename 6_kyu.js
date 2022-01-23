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


/* https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript */

function DNAtoRNA(dna) {
    // return dna.replaceAll(/T/g, 'U'); // не везде работает
    return dna.replace(/T/g, 'U');
    // return dna.split("T").join("U"); // итересно
}

console.log(DNAtoRNA("TTTT")) // "UUUU"
console.log(DNAtoRNA("GCAT")) // "GCAU"
console.log(DNAtoRNA("GACCGCCGCC")) // "GACCGCCGCC"
console.log(DNAtoRNA("")) //

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript */

function pigIt(str){
    let result = [];
    let inStr = str.split(' ')
    for (let i = 0; i < inStr.length; i++) {
        let str = inStr[i];
        result.push(/[A-Za-z]/.test(str) ? `${str.slice(1)}${str[0]}ay` : str)
    }
    return result.join(' ')
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt('Hello world !'));     // elloHay orldway !

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript */

function isSolved(board) {

}

console.log(isSolved([
    [0,0,1],
    [0,1,2],
    [2,1,0]
]))