// let num = 5; // number
// let classSubject = 'javascript'; // string
// let isCodingFun = true // boolean

// // let mixArray = [5, javascript, true, {key: "value1"}}, 1,2,3] () => {}]


// // console.log(mixArray)
// let numArray = [1,2,3]
// numArray.push(5) // Append the number 5 to the end of the Array
// numArray.pop() // will remove/delete the element at the end of the array
// numArray.shift() // will remove/delete the element at the beginnign of the array
// numArray.unshift(5) // will append the number 5 to the beginnign of the array



// console.log("script is runnig...")
// const arr = [1,2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// function logNumber(num) {
//     console.log(num)
//}

// arr.forEach(num => console.log(num))

// function sum(a,b) {
//    return a + b
// }

const foods = [
    {name: 'Apple', type: 'fruit', calories: 95}
    {name: 'Banana', type: 'fruit', calories: 105},
    {name: 'Broccoli', type: 'fruit', calories: 55},
    {name: 'Carrot', type: 'vegetable', calories: 25},
    {name: 'Avocado', type: 'fruit', calories: 250},
    {name: 'Chicken', type: 'poultry', calories: 350},
]

//  Array Iterator Method Exercises
// 1. Get an array of food types using map()
const foodTypes = foods.map(food => food.type);
console.log(foodTypes);

// 2. Filter foods with calories greater than 100
const highCalorieFoods = foods.filter(food => food.calories > 100);
console.log(highCalorieFoods);
  
// 3. Find the first fruit in the array
const firstFruit = foods.find(food => food.type === 'fruit');
console.log(firstFruit);

// 4. Check if there is any food with the name 'Apple'
const hasApple = foods.some(food => food.name === 'Apple');
if (hasApple) {
    console.log('Yes, there is a food with the name "Apple".');
} else {
    console.log('No food with the name "Apple" found.');
}

// 5. Check if all foods have calories less than 700
const allCaloriesUnder700 = foods.every(food => food.calories < 700);
if (allCaloriesUnder700) {
    console.log('All foods have calories less than 700.');
} else {
    console.log('Not all foods have calories less than 700.');
}

// 6. Calculate the average calories of all foods using reduce()
const totalCalories = foods.reduce((accumulator, food) => accumulator + food.calories, 0);
const averageCalories = totalCalories / foods.length;
console.log('Total calories:', totalCalories);
console.log('Average calories:', averageCalories);

// 7. Sort foods alphabetically by name using sort()
foods.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
console.log(foods);

// 8. Creat an arrya of food names with their types as a string, ex.
// [Apple is a fruit, Banana is a fruit, etc]
const foodNamesWithType = foods.map(food => `${food.name} is a ${food.type}`);
console.log(foodNamesWithType);

// 9. Filter foods that are fruits
const fruits = foods.filter(food => food.type === 'fruit');
console.log(fruits);

// 10. find the index of 'Alligator Pears'
const index = foods.findIndex(food => food.name === 'Avocado');
console.log('Index of Avocado:', index);