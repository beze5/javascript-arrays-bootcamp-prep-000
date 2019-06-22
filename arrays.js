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

function destructivelyRemoveElementFromBeginningOfArray(anArray){
  anArray.shift();
  return anArray;
}

//the slice method removes specifically identified elements from an array

var cats = ["Milo", "Garfield", "Otis"];
cats.slice(1); //this will take out the first element in the array
cats; // this will print the array as it was without the removal (you must use slice to print an array with items removed)

var cats = ["Milo", "Garfield", "Otis"]
cats = cats.slice(1)
cats // in order for slice method's results to stick around, they must be saved to a new variable (or just reuse the original one to redefine it)

var cats = ["Milo", "Garfield", "Otis"]

// if we want the last two elements of the array, we can use...
cats.slice(-2)
//this would give us ["Garfield", "Otis"]

cats.slice(-1)
//this would give us ["Otis"]

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

// the pop method removes elements from the end of an array
var iceCreams = ["chocolate", "vanilla", "raspberry"]

iceCreams.pop()
//returns the removed element; in this case, raspberry

iceCreams //this will return ["chocolate", "vanilla"]; similar to the push method, pop is destructive and alters the original array

function destructiveRemoveElementFromEndOfArray(thisArray){
  thisArray.pop()
  return thisArray
}

