"use strict";
//Intro to variables
//variables can store some information

// var statement = "common man thats too easy";
// console.log(statement);

// statement = "above statement was not good so i changed it ";
// console.log(statement);

// var number = 2;
// console.log(number ** 3);

//let

// let firstName = "Amodh";
// console.log(firstName);

//constant

// const pie = 3.14141;
// console.log(pie);

// // string indexing

// let firstName = "Amodh";
// console.log(firstName);

// //finding the length of the string

// console.log(firstName.length);
// console.log(firstName[firstName.length - 1]);

//trim

// let firstName = "   Amodh   ";
// console.log(firstName.length);
// firstName = firstName.trim();
// console.log(firstName);
// console.log(firstName.length);

//toUppercase

// let firstName = "Amodh";
// firstName = firstName.toUpperCase();
// console.log(firstName);

//similar is toLowerCase

//slice

// let firstName = "Amodh ";

// let newString = firstName.slice(0, 3);
// console.log(newString);

//convert number to string
// let age = 19;
// console.log(typeof (19 + ""));
// //or use String()

// //convert string to number
// let firstName = "34";
// console.log(typeof +firstName);
// //or use Number()

//string concatenation

// let string1 = "Amodh";
// let string2 = "BH";
// console.log(string1 + " " + string2);

//template string

// let age = 19;
// let firstName = "Amid";
// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

//BigInt

// let myNumber = 8459829829828n;
// let myNumber = BigInt(8459829829828);
// console.log(myNumber);

// == & ===
// let num1 = "7";
// let num2 = 7;

// console.log(num1 == num2);
// console.log(num1 === num2);

// != vs !==
//same as previous

//learn about truthy and falsy
//note if is always works for truth values and else for falsy

//ternary operator

// let age = 8;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink );

//and or operator

// let firstName = "Amodh BH";
// let age = 22;

// if (firstName[0] === "H" || age === 22) {
//   console.log("ur qualified");
// } else {
//   console.log("then ur not quali");
// }

//nested if

// let winningNumber = 19;
// let guessNumber = +prompt("Guess a number");

// if (winningNumber === guessNumber) {
//   console.log("Your guess is right");
// } else {
//   if (guessNumber < winningNumber) {
//     console.log("too low");
//   } else {
//     console.log("too high");
//   }
// }

//switch statement

// let day = 7;

// switch (day) {
//   case 0:
//     console.log("It is monday");
//     break;
//   case 1:
//     console.log("It is tuesday");
//     break;
//   case 2:
//     console.log("It is wednesday");
//     break;
//   case 3:
//     console.log("It is thursday");
//     break;
//   case 4:
//     console.log("It is friday");
//     break;
//   case 5:
//     console.log("It is saturday");
//     break;
//   case 6:
//     console.log("It is sunday");
//     break;

//   default:
//     console.log("Invalid number");
//     break;
// }

//while loop
// let n = 10;
// let i = 1;
// let count = 0;
// while (i <= n) {
//   count = count + i;
//   i++;
// }
// console.log(count);
// console.log("hello");
// console.log(i);

//for loop
// let count = 0;
// for (let i = 0; i <= 10; i++) {
//   count = count + i;
// }
// console.log(count);

//break

// for (let i = 0; i <= 9; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

//continue

// for (let i = 0; i <= 9; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

//do while loop

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i <= 9);

//arrays

// let fruits = ["fruits", "mango ", 9];
// console.log(fruits);

//indexing

// let fruits = ["fruits", "mango ", 9];
// fruits[1] = "lalala";
// console.log(fruits);

// methods in array
//push pop unshift shift
// let fruits = ["fruits", "mango ", 9];
// fruits.push("bannan");
// console.log(fruits);
// let popped_fruit = fruits.pop();
// console.log(fruits);
// fruits.unshift("banna");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

//array clone

// let arr1 = ["item1", "item2"];
// let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1 ,["item4"]);
//new way
// let arr2 = [...arr1,"item3"];
// arr2.push("item3");

// console.log(arr1 === arr2);
// console.log(arr1);
// console.log(arr2);

//for loop in array

// let fruits = ["mango", "apple", "letsgooo"];
// let fruits2 = [];
// for (let i = 0; i < fruits.length; i++) {
//   fruits2.push(fruits[i].toUpperCase());
//   //   console.log(fruits2);
// }
// console.log(fruits2);

//const in array
// const fruits = ["hello", "my "];
// fruits.push("name");
// console.log(fruits);

// using while loop
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

//for of loop in array
// let fruits = ["hello ", "gays"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

//for in loop
//Hw

//array destructuring
//traditional way
// const myArray = ["value1 ", "value2"];
// let one = myArray[0];
// let two = myArray[1];
// console.log(one);
// console.log(two);

// const myArray = ["value1 ", "value2", "value3"];
// let [one, two, ...myNewArray] = myArray;
// console.log(one);
// console.log(two);
// console.log(myNewArray);

//object

// const person = {
//   name: "amodh",
//   age: 56,
//   hobbies: ["listening to twice", "coding", "being creative"],
// };
// one way to access data
// console.log(person);
// console.log(person.name);
// console.log(person.hobbies[1]);
//another way
// console.log(person["name"])

// person.gender = "male";
// console.log(person);

// const key = "email";
// const person = {
//   name: "amodh",
//   age: 56,
//   hobbies: ["listening to twice", "coding", "being creative"],
// };

// person[key] = "xyz@gmail.com";
// console.log(person);

// const person = {
//   name: "amodh",
//   age: 56,
//   hobbies: ["listening to twice", "coding", "being creative"],
// };

// for loop in object

// for(let key in person){
//     console.log(`${key} :${person[key]}`)
// }

// for (let key of Object.keys(person)) {
//   console.log(person[key]);
// }

//computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//   [key1]: value1,
//   [key2]: value2,
// };

// console.log(obj);

//spread operator

// const obj = {
//   key1: "value1",
//   key2: "value2",
// };

// const newObj = { ...obj };
// console.log(newObj);
// const obj1 = { ..."abc" };
// console.log(obj1);

//object destructuring

// const band = {
//   bandName: "BTS",
//   famousSong: "Fake Love",
// };

// const { bandName: var1, famousSong } = band;
// // console.log(bandName);
// console.log(var1);
// console.log(famousSong);

//objects inside array

// const users = [
//   { userID: 1, firstName: "V", gender: "Male" },
//   { userID: 2, firstName: "W", gender: "Male" },
//   { userID: 3, firstName: "F", gender: "Male" },
//   { userID: 4, firstName: "G", gender: "Male" },
// ];
// console.log(users);
// for (let user of users) {
//   console.log(user);
// }

//destructuring of above
// const [user1, user2, user3] = users;
// console.log(user1);
