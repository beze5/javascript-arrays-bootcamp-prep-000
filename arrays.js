var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(testArray, beginningElement){
  var newArray = testArray;
  newArray.unshift(beginningElement);
  return newArray
}


function destructivelyAddElementToBeginningOfArray(testArray, beginningElement){
  testArray.unshift(beginningElement);
  return testArray
}

//these are notes on selecting and using specific elements from arrays

var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];

console.log(entrepreneurs[0]);

var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

entrepreneurs[9];

function accessElementInArray(array, index){
  return array[index];
}

// these are notes on removing an element from an array 

const days = ["Monday", "Tuesday", "Wednesday"];

days.shift(); // this removes the first element in the array (Monday)

days; // this returns the array without the removed (first) element, Monday

destructivelyRemoveElementFromBeginningOf

