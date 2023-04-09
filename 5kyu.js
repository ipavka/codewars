/* https://www.codewars.com/kata/513e08acc600c94f01000001/javascript */

function rgb(r, g, b) {
  return Array.from(arguments)
    .map((mapEl) => {
      let element = mapEl;
      if (mapEl > 255) element = 255;
      if (mapEl < 0) element = 0;
      return ('0' + Number(element).toString(16)).slice(-2).toUpperCase();
    })
    .join('');
}
console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'
console.log(rgb(148, 0, 211)); // '9400D3'

console.log('*'.repeat(30));

/* https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/javascript */

function arrayDiffVeryFast(a, b) {
  const setArrayB = new Set(b);
  return a.filter((el) => !setArrayB.has(el));
}

console.log(arrayDiffVeryFast([1, 2, 2, 2, 3], [2])); // [1, 3]
console.log(arrayDiffVeryFast([1, 2, 2, 2, 3, 5, 5, 1, 2, 4, 5, 1], [2, 1, 5])); // [3,4]
console.log(arrayDiffVeryFast([1, 2], [1])); // [2]

console.log('*'.repeat(30));
