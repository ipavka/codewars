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


