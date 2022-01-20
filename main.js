/* https://www.codewars.com/kata/53368a47e38700bd8300030d/javascript */

function list(names){
    if (names.length > 1) {
        let result = []
        for (let i = 0; i < names.length-1; i++) {
            result.push(names[i].name)
        }
        return `${result.join(', ')} & ${names[names.length-1].name}`
    }else {
        return names.length === 0 ? '' : names[0].name
    }

}

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]))
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
console.log(list([ {name: 'Bart'} ]))
console.log(list([]))
console.log('*'.repeat(30))

/* https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript */

const inStr = "The quick brown fox jumps over the lazy dog."
const inStr1 = "This is not a pangram."
function isPangram(string){
    const size = new Set(string.replace(/[^a-z]/gi, '').toLowerCase()).size
    return size === 26
}

console.log(isPangram(inStr))
console.log(isPangram(inStr1))
console.log('*'.repeat(30))

/* https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript */

function duplicateEncode(word){
    let lowerCase = word.toLowerCase();
    let arrWord = lowerCase.split('');
    let bracketArr = [];
    let countObj = {};
    arrWord.forEach(function(letter){
        countObj[letter] ? countObj[letter]++ : (countObj[letter] = 1);
    });
    for (let i = 0; i < lowerCase.length; i++) {
        countObj[lowerCase[i]] > 1 ? bracketArr.push(')') : bracketArr.push('(')
    }
    return bracketArr.join('')
}

console.log(duplicateEncode("din")) // "((("
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success")) // ")())())"
console.log(duplicateEncode("(( @")) // "))(("
console.log('*'.repeat(30))

/* https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript */

function findUniq(arr) {
    let resultNumber;
for (let i = 0; i < arr.length; i++) {
    let first = arr.indexOf(arr[i]);
    let last = arr.lastIndexOf(arr[i]);
    if (first === last) {
        resultNumber = arr[i]
        }
    }
    return resultNumber
  }

console.log(findUniq([ 1, 0, 0 ])); // 1
console.log(findUniq([ 0, 1, 0 ])); // 1
console.log(findUniq([ 0, 0, 1 ])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10
console.log(findUniq([ 3, 10, 10, 3, 4, 3, 3 ])); // 4

console.log('*'.repeat(30))