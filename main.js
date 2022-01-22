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

/* https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript */

function findShort(string){
    return Math.min(...string
    .split(' ')
    .map((num) => num.length))
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
console.log(findShort("Let's travel abroad shall we")) // 2

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript */

function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((acc, item) => {
        return acc + item
    }, 0);

    return sum / classPoints.length < yourPoints
  }

console.log(betterThanAverage([2, 3], 5)); // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)); // true

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript */

function expandedForm(num) {
    let numStr = String(num);
    let resArray = [];

    for (let i = numStr.length; i > 0; i--) {
        let nuFromStr = numStr[Math.abs(i-numStr.length)];
        let resultNum = `${nuFromStr}${"0".repeat(i-1)}`;
        if (+resultNum) {
            resArray.push(`${+resultNum} +`)
        }
    }
    return resArray.join(' ').slice(0, -2)
  }

console.log(expandedForm(12)) // '10 + 2'
console.log(expandedForm(42)) // '40 + 2'
console.log(expandedForm(70304)) // '70000 + 300 + 4'

console.log('*'.repeat(30))


/* https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript */

function lovefunc(flower1, flower2){
    return (flower1 % 2) !== (flower2 % 2)
}

console.log(lovefunc(1, 4)) // true
console.log(lovefunc(2, 2)) // false
console.log(lovefunc(0, 1)) // true
console.log(lovefunc(0, 0)) // false
console.log(lovefunc(161, 739)) // false
console.log(lovefunc(336, 420)) // false

console.log('*'.repeat(30))

/* https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript */

function longestConsec(strarr, k) {
    let resObj = {};
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    } else {
    for (let i = 0; i < strarr.length; i++) {
        resObj[strarr.slice(i, k + i).join('')] = strarr.slice(i, k + i).join('').length
    }
    let maxLen = Math.max(...Object.values(resObj));
    return Object.keys(resObj).find(key => resObj[key] === maxLen);
    }
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) // "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3)) // "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) // "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) // "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) // "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) // "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) // "")

console.log('*'.repeat(30))


