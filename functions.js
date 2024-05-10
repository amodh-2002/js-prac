// function hp() {
//   console.log("helpp ");
// }
// hp();
// function add(a, b) {
//   console.log(a + b);
// }
// add(5, 7);

// function isEven(number) {
//   if (number % 2 === 0) {
//     console.log("it is even");
//   } else {
//     console.log("it is odd");
//   }
//  return number%2===0
// }
// isEven(3);

// function firstCharacter(char) {
//   return char === "a";
// }
// console.log(firstCharacter("a"));

//function examples

// function findElement(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// const myArray = [1, 2, 3, 4];
// console.log(findElement(myArray, 4));

//function expression

// const singHappyBirthday = function () {
//   console.log("lets gooooo");
// };
// singHappyBirthday();

//arrow functions

// const hello = () => {
//   console.log("hellow ");
// };
// hello();

// const threeNumbers = (a, b, c) => {
//   return a + b + c;
// };
// const ans = threeNumbers(4, 5, 6);
// console.log(ans);

// const isEven = number => {
//   return number % 2 === 0;
// };
// const ans1 = isEven(1);
// console.log(ans1);

//functions inside function

// const app = () => {
//   const insideFunction = () => {
//     console.log(2 + 4);
//   };
//   console.log("inside you");
//   insideFunction();
// };
// app();

//lexical scope
//i think you about it

//default parameters

// function addTwo(a, b = 0) {
//   return a + b;
// }

// console.log(addTwo(5));

//rest parameters

// const num = (a, b, ...c) => {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);
// };

// num(1, 2, 3, 4, 5, 6, 6);

//sum of all numbers
// let count = 0;
// const addAll = (...numbers) => {
//   for (let number of numbers) {
//     count = count + number;
//   }
//   return count;
// };
// console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9));

//param destructuring

// const person = {
//   firstName: "amodh",
//   gender: "Male",
// };

// function printDetails({ firstName, gender }) {
//   console.log(firstName);
//   console.log(gender);
// }
// printDetails(person);

//call back function

// function myFunc2() {
//   console.log("Hello there");
// }

// function myFunc(a) {
//   a();
// }
// myFunc(myFunc2);

//function returning function

// function myFunc() {
//   function hello() {
//     return "hello world";
//   }
//   return hello;
// }
// const ans = myFunc();
// console.log(ans());

//important array methods

// const numbers = [4, 5, 6, 7];
// function someName(number, index) {
//   console.log("index is : " + index);
//   console.log(number * 2);
// }
// //foreach
// numbers.forEach(someName);

// numbers.forEach(function (number, index) {
//   console.log(`Index is ${index} and number is ${number * 2} `);
// });

// const users = [
//   { firstName: "amodh", age: 19 },
//   { firstName: "pro", age: 15 },
//   { firstName: "V", age: 23 },
//   { firstName: "RM", age: 24 },
// ];

// users.forEach(function ({ firstName, age }) {
//   console.log(`Users First Name is : ${firstName} ,and their age is ${age}`);
// });
// users.forEach((user) => {
//   console.log(user.firstName);
// });

//map method
// const numbers = [4, 5, 6, 7];
// const square = function (number) {
//   return number * number;
// };
// const ans = numbers.map(square);
// console.log(ans)

//  Hw DO SOME other variations
// const users = [
//   { firstName: "sm", age: 14 },
//   { firstName: "yg", age: 15 },
//   { firstName: "bh", age: 16 },
//   { firstName: "jyp", age: 17 },
// ];
// const ans = users.map((user) => {
//   return user.firstName;
// });
// console.log(ans);

//filter
// const numbers = [1, 2, 3, 5, 6];
// const isEven = function (number) {
//   return number % 2 === 0;
// };
// const ans = numbers.filter(isEven);
// console.log(ans);

//reduce
// const numbers = [1, 2, 3, 4, 5];

// const ans = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(ans);

// const userCart = [
//   { productId: 1, price: 12000 },
//   { productId: 2, price: 22000 },
//   { productId: 3, price: 15000 },
// ];

// const ans = userCart.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.price;
// }, 0);
// console.log(ans);

//sort method
//first one would give u problem
// const num = [1, 4, 52, 2, 9];
// num.sort();
// console.log(num);
// const numbers = [5, 9, 100, 4, 60];
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 3000 },
//   { productId: 3, productName: "p3", price: 200 },
//   { productId: 4, productName: "p4", price: 100 },
// ];

// const lowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });
// const highToLow = products.slice(0).sort((a, b) => {
//   return b.price - a.price;
// });

// console.log(lowToHigh);
// console.log(highToLow);

//find
// const array = ["hello ", "my", "babby", "welcome"];
// // function isLength(string) {
// //   return string.length === 3;
// // }
// const ans = array.find((string) => {
//   return string.length === 3;
// });
// console.log(ans);

// const users = [
//   { userId: 1, userName: "AMo", price: 300 },
//   { userId: 2, userName: "Liu", price: 3000 },
//   { userId: 3, userName: "Bbn", price: 200 },
//   { userId: 4, userName: "Lns", price: 100 },
// ];

// const ans = users.find((user) => {
//   return user.userId === 3;
// });
// console.log(ans);

//every method
// const numbers = [2, 4, 6, 8, 9, 10];
// const ans = numbers.every((number) => {
//   return number % 2 === 0;
// });
// console.log(ans);

// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 3000 },
//   { productId: 3, productName: "p3", price: 200 },
//   { productId: 4, productName: "p4", price: 100 },
// ];

// const ans = products.every((price) => {
//   return price.price <= 3000;
// });
// console.log(ans);

//some methods

// const numbers = [3, 5, 7, 9];
// const ans = numbers.some((number) => {
//   return number % 2 === 0;
// });
// console.log(ans);

// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 3000 },
//   { productId: 3, productName: "p3", price: 200 },
//   { productId: 4, productName: "p4", price: 100 },
// ];

// const ans = products.some((priceCheck) => priceCheck.price < 200);
// console.log(ans);

//fill method

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7];
// const ans = myArray.fill(0, 2, 5);
// console.log(ans);

//splice

// const myArray = ["item1", "item2", "item3"];
// //delete
// myArray.splice(1, 1);
// console.log(myArray);

// //insert
// myArray.splice(1, 0, "item2");
// console.log(myArray);

// //insert and delete
// myArray.splice(1, 2, "item4");
// console.log(myArray);

//iterables example are string and array

// const firstName = "Amodh";
// for (let name of firstName) {
//   console.log(name);
// }

// const myArray = ["item1", "item2", "item3"];
// for (let item of myArray) {
//   console.log(item);
// }

//object is not

//set (it is iterables)
//no index based access
//order is not guaranteed
// const numbers = new Set([1, 2, 3, 4]);
// numbers.add(5);
// numbers.add("item1");
// numbers.has(1); //use if condition to check
// console.log(numbers);

// for (let number of numbers) {
//   console.log(number);
// }

//to get unique numbers
// const myArray = [1, 2, 3, 4, 4, 5, 6, 5, 6];
// const ans = new Set(myArray);
// console.log(ans);

// let length = 0;
// for (let number of ans) {
//   //   console.log(number);
//   length++;
// }
// console.log(length);

//map object (it is iterable)

// const person = new Map();
// person.set("firstName", "Amodh");
// person.set("age", 19);
// console.log(person);
// console.log(person.get("firstName"));

// for (let item of person.keys()) {
//   console.log(item, typeof item);
// }
// for (let [key, value] of person) {
//   console.log(key, value);
// }

// const person = new Map([
//   ["firstName ", "Amodh"],
//   ["age", "19"],
// ]);
// console.log(person);

// const person1 = {
//   id: 1,
//   firstName: "Amodh",
// };

// const person = new Map();
// person.set(person1, { age: 8 });
// person.set("lastName ", "BH");
// console.log(person1.id);
// console.log(person.get(person1).age);

//clone using object assign
// const obj = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

//optional chaining

// const user = {
//   firstName: "Amodh",
//   //   address: { houseHold: "1234" },
// };
// console.log(user?.firstName);
// console.log(user?.address?.houseHold);

//methods
//function inside object

// function personInfo() {
//   console.log(`lets goo ${this.firstName} and his age is ${this.age}`);
// }

// const person1 = {
//   firstName: "Amodh",
//   age: 9,
//   about: personInfo,
// };

// const person2 = {
//   firstName: "RM",
//   age: 29,
//   about: personInfo,
// };

// const person3 = {
//   firstName: "V",
//   age: 24,
//   about: personInfo,
// };
// // personInfo();
// person1.about();
// person2.about();
// person3.about();

//call apply and bind
// function hello() {
//   console.log("hello world");
// }
// hello.call();

//  function (hobby, favMusic) {
//     console.log(this.firstName, this.age, hobby, favMusic);
//   }

// const user1 = {
//   firstName: "Amodh",
//   age: 8,
//
// };
// const user2 = {
//   firstName: "RM",
//   age: 18,
// };

// // user1.about();
// user1.about.call(user2, "sports", "pop - smoke");
// // user1.about.call();

//apply
// about.apply(user1, ["sports ", "sexx"]);
// about.bind; HW

//dont do this mistake
// @9:06:00

// const aboutUser = user.about();
// console.log(aboutUser);

// const userMethod = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// function createUser(firstName, lastName, age, email, address) {
//   const user = Object.create(createUser.prototype);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;

//   return user;
// }
// createUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old`;
// };
// createUser.prototype.is18 = function () {
//   return this.age >= 18;
// };
// createUser.prototype.sing = function () {
//   return "lalalalala";
// };
// const user1 = createUser(
//   "Amodh",
//   "BH",
//   19,
//   "xyz@gmail.com",
//   "#3410 come to jp nagar"
// );
// console.log(user1);
// const verify = user1.is18();
// console.log(verify);
// const about1 = user1.about();
// const sing1 = user1.sing();
// console.log(sing1);

// const obj = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = Object.create(obj);
// obj2.key3 = "value3";
// console.log(obj2.key1);
// console.log(obj2.__proto__);
