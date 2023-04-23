/* https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript */

function makeValueString(quantity, value) {
  if (quantity) {
    return quantity > 1 ? `${quantity} ${value}s` : `${quantity} ${value}`;
  } else return '';
}

function marksPunctuation(arr) {
  if (arr.length > 1) {
    return `${arr.slice(0, -1).join(', ')} and ${arr.at(-1)}`;
  }
  return arr.join('')
}

function formatDuration(seconds) {
  if (seconds === 0) return 'now'
  const parsResult = {
    years: makeValueString(Math.floor(seconds / (3600 * 24 * 365)), 'year'),
    days: makeValueString(Math.floor(seconds / (3600 * 24) % 365), 'day'),
    hours: makeValueString(Math.floor(seconds / 3600) % 24, 'hour'),
    minutes: makeValueString(Math.floor(seconds / 60) % 60, 'minute'),
    seconds: makeValueString(Math.floor(seconds % 60), 'second'),
  }
  return marksPunctuation(Object.values(parsResult).filter(el => el !== ''))
}

console.log(formatDuration(0)) // "now"
console.log(formatDuration(1)) // "1 second"
console.log(formatDuration(62)) // "1 minute and 2 seconds"
console.log(formatDuration(120)) // "2 minutes"
console.log(formatDuration(3600)) // "1 hour"
console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(3661)) // "1 hour, 1 minute and 1 second"
console.log(formatDuration(3761)) // "1 hour, 2 minutes and 41 seconds"

console.log('*'.repeat(30));