"use strict";
/* 
**1.** Write a function called `doubleValues` which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
```
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
``` */

console.log(`******01******`);

const doubleValues = function (arr) {
  const doubledArrVal = arr.map((el) => el * 2);
  console.log(doubledArrVal);
};

doubleValues([1, 2, 3]);
doubleValues([5, 1, 2, 3, 10]);
/* 
**2.** Write a function called `onlyEvenValues` which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
```
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10] */

console.log(`******02******`);

const onlyEvenValues = function (arr) {
  let newArr = [];
  arr.forEach(function (el) {
    if (el % 2 === 0) {
      newArr.push(el);
    }
  });

  console.log(newArr);
};

onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);

/* 
**3.** Write a function called `showFirstAndLast` which accepts an array of strings and returns a new array with only the first and last character of each string

Examples:
```
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
``` */

console.log(`******03******`);

const showFirstAndLast = function (arr) {
  const NewArr = arr.map(function (el) {
    return `${el.charAt(0)}${el.slice(-1)}`;
  });
  console.log(NewArr);
};

showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);
/* 
**4.** Write a function called `addKeyAndValue` which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object 

Examples:
```
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}] */
console.log(`******04******`);
const addKeyAndValue = function (arr, key, val) {
  const newArrOfObj = arr.map(function (el) {
    el[key] = val;
    return el;
  });
  console.log(newArrOfObj);
};

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

/* 
**5.** Write a function called `vowelCount` which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted

Examples:
```
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
``` */
console.log(`******05******`);

function vowelCount(str) {
  let splitArr = str.toLowerCase().split("");
  let myObject = {};
  let vowels = "aeiou";

  splitArr.forEach(function (el) {
    if (vowels.indexOf(el) !== -1) {
      if (myObject[el]) {
        myObject[el]++;
      } else {
        myObject[el] = 1;
      }
    }
  });
  console.log(myObject);
}
vowelCount("Elie");
vowelCount("Tim");
vowelCount("Matt");
vowelCount("hmmm");
vowelCount("I Am awesome and so are you");
