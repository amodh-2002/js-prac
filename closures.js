// function outerFunction() {
//   function innerFunction() {
//     console.log("Inside a function");
//   }
//   return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans)

// function printFullName(firstName, lastName) {
//   function printName() {
//     console.log(firstName, lastName);
//   }
//   return printName;
// }
// const ans = printFullName("Amodh", "BH");
// // console.log(ans);
// ans();
// function hello(x) {
//   const a = "varA";
//   const b = "varB";
//   return function () {
//     console.log(a, b, x);
//   };
// }
// const ans = hello("arg");
// ans();

// function square(a) {
//   //   console.log(a);
//   return function (b) {
//     console.log(b ** a);
//   };
// }
// const ans = square(10);
// ans(2);

// function func() {
//   let counter = 0;
//   return function () {
//     if (counter < 1) {
//       console.log("HIII");
//       counter++;
//     } else {
//       console.log("Already");
//     }
//   };
// }
// const myFunc = func();
// myFunc();
// myFunc();
