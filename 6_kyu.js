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
    let result = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []};
    for (let i = 0; i < board.length; i++) {
        result[1].push(board[0][i])
        result[2].push(board[1][i])
        result[3].push(board[2][i])
        result[4].push(board[i][i])
        result[5].push(board[i][0])
        result[6].push(board[i][1])
        result[7].push(board[i][2])
        result[8].push(board[i][(board.length-1)-i])
    }
    return findTruEqual(result) ? findTruEqual(result) : notWinner(result)
}

function findTruEqual(obj) {
    for (let key in obj) {
        let findEqual = obj[key].every((val, i, arr) => val === arr[0])
        if (findEqual) {
            return obj[key][0]
        }
    }
}

function notWinner(obj) {
    let setArr = [];
    let max;
    let min;
    for (let key in obj) {
        let resSet = new Set(obj[key])
        setArr.push(resSet.size)
    }
    max = Math.max(...setArr);
    min = Math.min(...setArr);
    return max === min ? 0 : -1
}

console.log(isSolved( [ // не до конца игры
    [1,2,1],
    [2,1,2],
    [2,1,0]
]))
console.log(isSolved([ // вин "X" => 1
    [0,1,1],
    [0,1,2],
    [2,1,0]
]))
console.log(isSolved( [// вин "O" => 2
    [1,1,2],
    [1,2,2],
    [2,2,1]
]))
console.log(isSolved( [// Ничья
    [1,2,2],
    [2,2,1],
    [1,1,2]
]))

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript */


function validParentheses(parens) {
    if(parens.length === 0) {
        return true;
    } else if (parens.startsWith(')')) {
        return false
    }
    let arr = parens.split('')
    for (let i = 0; arr.length > 3; i++) {
        if (arr[i] !== arr[i+1] && arr[i] !== ')') {
            arr.splice(i, 2)
            i = 0;
        }
    }
    return arr.join('') === "()"
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

console.log(validParentheses("")); // true
console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); // false
console.log(validParentheses("(")); // false
console.log(validParentheses("())(")); // false
console.log(validParentheses("())(()")); // false
console.log(validParentheses("(())((()())())")); // true
console.log(validParentheses("()()(())()((()))()()(())()()()()()(())()")); // true

console.log('*'.repeat(30))





