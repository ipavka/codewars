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

}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))

/*

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

*/