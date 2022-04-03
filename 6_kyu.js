/* https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript */

function solution(str) {
    return str.split('').reverse().join('')
}

console.log(solution('world')) // 'dlrow')
console.log(solution('hello')) // 'olleh')
console.log(solution('')) // '')
console.log(solution('h')) // 'h')

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript */

function solutionEnds(str, ending) {
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

function pigIt(str) {
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
        result[8].push(board[i][(board.length - 1) - i])
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

console.log(isSolved([ // не до конца игры
    [1, 2, 1],
    [2, 1, 2],
    [2, 1, 0]
]))
console.log(isSolved([ // вин "X" => 1
    [0, 1, 1],
    [0, 1, 2],
    [2, 1, 0]
]))
console.log(isSolved([// вин "O" => 2
    [1, 1, 2],
    [1, 2, 2],
    [2, 2, 1]
]))
console.log(isSolved([// Ничья
    [1, 2, 2],
    [2, 2, 1],
    [1, 1, 2]
]))

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript */


function validParentheses(parens) {
    if (parens.length === 0) {
        return true;
    } else if (parens.startsWith(')')) {
        return false
    }
    let arr = parens.split('')
    for (let i = 0; arr.length > 3; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== ')') {
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


/* https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript */

function domainName(url) {
    const result = [];
    if (url.startsWith('ht')) {
        result.push(url.split('//').splice(1).join(''))
    } else {
        result.push(url.split('.').join('.'))
    }

    const res = result.join('.').split('.')
    if (res[0].startsWith('ww')) {
        return res[1]
    } else {
        return res[0]
    }
}


console.log(domainName("http://github.com/carbonfive/raygun")) // "github" 
console.log(domainName("http://www.zombie-bites.com")) // "zombie-bites"
console.log(domainName("https://www.cnet.com")) // "cnet"
console.log(domainName("www.xakep.ru")) // "xakep"
console.log(domainName("http://google.com")) // "google"
console.log(domainName("http://google.co.jp")) // "google"
console.log(domainName("https://youtube.com")) // "youtube"

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript */

function zero() {
}

function one() {
}

function two() {
}

function three() {
}

function four() {
}

function five() {
}

function six() {
}

function seven() {
}

function eight() {
}

function nine() {
}

function plus() {
}

function minus() {
}

function times() {
}

function dividedBy() {
}


console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/57f609022f4d534f05000024 */

function stray(numbers) {
    const result = numbers.reduce(function (acc, el) {
        acc[el] ? acc[el]++ : (acc[el] = 1)
        // acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    for (let key in result) {
        if (result[key] === 1) {
            return +key
        }
    }
}

console.log(stray([1, 1, 2])) // ==> 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) // ==> 3

console.log('*'.repeat(30));


/* https://www.codewars.com/kata/54ba84be607a92aa900000f1 */

function isIsogram(str) {
    let setStr = new Set(str.toLowerCase()).size
    if (setStr === str.length) return true;
    return false
}

// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("isogram")) // true
console.log(isIsogram("aba")) // false, "same chars may not be adjacent"
console.log(isIsogram("moOse")) // false, "same chars may not be same case"
console.log(isIsogram("isIsogram")) // false
console.log(isIsogram("")) // true, "an empty string is a valid isogram"

console.log('*'.repeat(30));


/* https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript */

const amountOfPages = (summary) => {
    if (summary < 11) return summary
    const arrNumbers = [];
    let strNumbers = '';
    for (let i = 0; i < summary; i++) {
        strNumbers += i
        arrNumbers.push(i)
        if (strNumbers.length - 1 === summary) {
            return arrNumbers[i]
        }
    }
}
console.log(amountOfPages(5))
console.log(amountOfPages(25))
console.log(amountOfPages(1095))
console.log(amountOfPages(185))
console.log(amountOfPages(660))

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
    return result.join(' ')
}

console.log(spinWords("Welcome")) // "emocleW"
console.log(spinWords("Hey fellow warriors")) // "Hey wollef sroirraw"
console.log(spinWords("This is a test")) // "This is a test"
console.log(spinWords("This is another test")) // "This is rehtona test"
console.log(spinWords("You are almost to the last test")) // "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")) // "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")) // "ylsuoireS this is the last one"

console.log('*'.repeat(30));


/* https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript */


function digital_root(number) {
    const strNumber = String(number)
    let sum = strNumber.split('').reduce((acc, item) => acc + Number(item), 0)
    while (String(sum).length > 1) {
        sum = String(sum).split('').reduce((acc, item) => acc + Number(item), 0)
    }
    return sum

    // return (number - 1) % 9 + 1;  // из готовых решений
}

console.log(digital_root(16)) // 7
console.log(digital_root(456)) // 6
console.log(digital_root(924)) // 6
console.log(digital_root(132189)) // 6
console.log(digital_root(493193)) // 2

console.log('*'.repeat(30));


/* https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript */

const createPhoneNumber = (numbers) => {
    const result = numbers.join('')
    return `(${result.slice(0, 3)}) ${result.slice(3, 6)}-${result.slice(6, 10)}`
}

function createPhoneNumber1(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

function createPhoneNumber2(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //  "(123) 456-7890"
console.log(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) //  "(111) 111-1111"
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //  "(123) 456-7890"

console.log('*'.repeat(30));


/* https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript */


function inArray(array1, array2) {
    let result = new Set;
    for (let i = 0; i < array1.length; i++) {
        let itemCase = array1[i];
        for (let j = 0; j < array2.length; j++) {
            let itemBase = array2[j];
            if (itemBase.includes(itemCase)) {
                result.add(itemCase)
            }
        }
    }
    return Array.from(result).sort()
}
let arr1 = ["lively", "alive", "harp", "sharp", "armstrong"];
let arr2 = ['live', 'strong', 'arp'];

console.log(inArray(arr2, arr1)) // ["arp", "live", "strong"]

console.log('*'.repeat(30));