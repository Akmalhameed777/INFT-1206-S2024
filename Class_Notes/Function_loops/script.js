//-----------------------Function--------------------

// we want to create a function that will take 2 nembers as input and return the sum of those numbers

// () -> An expression commonly used when invoking a function or method

let arr = [1,2,3,4,5,6,7,8,9,10]
let obj = {key1: "value1", key2:, key3:"value3"}

// 1. write a function that will display all the numbers from 1 to 999.
function displayNumbersFrom1To999() {
    for (let i = 1; i <= 999; i++) {
      console.log(i);
    }
  }  

// 2. write a function that will display all the even numbers from 1 to 999.
function displayEvenNumbersFrom1To999() {
    for (let i = 2; i <= 999; i += 2) {
      console.log(i);
    }
  }

// 3. write a function that will display all the numbers divisibile by 7 from 1 to 999.
function displayNumbersDivisibleBy7From1To999() {
    for (let i = 1; i <= 999; i++) {
      if (i % 7 === 0) {
        console.log(i);
      }
    }
  }
  
// 4. write a function that will iterate thruough an object and display all of its keys and values. 
function displayObjectKeysAndValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // Ensures we only iterate over own properties, not inherited ones
      console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
  }
}

// 5. write a function that will iterate through an array and display all of its elements.
function displayArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 6. write a function that will iterate through a numbers array and add 1 to each of its balues. 
function addOneToEachValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr; // Return the modified array
}

// 7. write a function that will initiate a prompt where you write the name of the month and it will return (log) which season the month is in.
function determineSeasonByMonth() {
    // Prompt user for input
    let month = prompt("Enter the name of a month (e.g., January, February):");
  
    // Convert input to lowercase for case-insensitive comparison
    let lowerCaseMonth = month.toLowerCase();
  
    // Define seasons based on typical month ranges
    if (lowerCaseMonth === "december" || lowerCaseMonth === "january" || lowerCaseMonth === "february") {
      console.log(`${month} is in the winter season.`);
    } else if (lowerCaseMonth === "march" || lowerCaseMonth === "april" || lowerCaseMonth === "may") {
      console.log(`${month} is in the spring season.`);
    } else if (lowerCaseMonth === "june" || lowerCaseMonth === "july" || lowerCaseMonth === "august") {
      console.log(`${month} is in the summer season.`);
    } else if (lowerCaseMonth === "september" || lowerCaseMonth === "october" || lowerCaseMonth === "november") {
      console.log(`${month} is in the autumn (fall) season.`);
    } else {
      console.log("Invalid month entered. Please enter a valid month name.");
    }
  }  