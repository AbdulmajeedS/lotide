//  const assertEqual = function(actual, expected) {

//    if (actual === expected) {
//   console.log("✅✅✅Assertion Passed: " + [actual] + " === " + [expected]);
//   console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

//    } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

//   }

// };
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {

  let i = 0;
  let answer = Boolean;

  for (i = 0; i < arr1.length; i++) {

    if (arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        answer = true;
      } else if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    } else {
      answer = false
    }
  }
  return answer;

};

module.exports = eqArrays;
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false