// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//   heading1.textContent = "Heading1";
//   heading1.style.color = "purple";
//   setTimeout(() => {
//     heading2.textContent = "Heading2";
//     heading2.style.color = "red";
//   }, 1000);
// }, 1000);
// // setTimeout(() => {
// //   heading2.textContent = "Heading2";
// //   heading2.style.color = "yellow";
// // }, 2000);

//exercise

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

// function changeText(element, text, color, time, onSuccessCallback) {
//   setTimeout(() => {
//     if (element) {
//       element.textContent = text;
//       element.style.color = color;
//       onSuccessCallback(heading2, "two", "red", 2000);
//     } else {
//       console.log("your element doesnt exist");
//     }
//   }, time);
// }

// changeText(heading1, "one", "brown", 1000, (element, text, color, time) => {
//   setTimeout(() => {
//     if (element) {
//       element.textContent = text;
//       element.style.color = color;
//     }
//   }, time);
// });

//PROMISE

// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// const promiseBucket = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetables") &&
//     bucket.includes("rice") &&
//     bucket.includes("salt")
//   ) {
//     resolve("Fried Rice");
//   } else {
//     reject("you ur washed mate");
//   }
// });
// //promise produce

// //promise consume
// promiseBucket
//   .then((myfriedRice) => {
//     console.log("lets eat ", myfriedRice);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//function returning promise

// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// function ricePromise() {
//   return new Promise((resolve, reject) => {
//     if (
//       bucket.includes("vegetables") &&
//       bucket.includes("rice") &&
//       bucket.includes("salt")
//     ) {
//       resolve("Fried Rice");
//     } else {
//       reject("you ur washed mate");
//     }
//   });
// }

// // console.log(ans());

// ricePromise()
//   .then((myfriedRice) => {
//     console.log("lets eat ", myfriedRice);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//promise and setTimeout

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const value = true;
//     setTimeout(() => {
//       if (value) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }

// myPromise()
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

//Promise.resolve
//Promise.chaining

// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//   console.log(value);
// });

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("foo");
//   });
// }
// myPromise()
//   .then((value) => {
//     console.log(value);
//     value += "bar";
//     return value;
//   })
//   .then((value) => {
//     console.log(value);
//   });

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("element not found");
      }
    }, time);
  });
}
const returnPromise = changeText(heading1, "one", "pink", 1000);
returnPromise
  .then(() => changeText(heading2, "two", "brown", 1000))
  .then(() => changeText(heading3, "three", "purple", 1000))
  .then(() => changeText(heading4, "four", "green", 1000))
  .then(() => changeText(heading5, "five", "yellow", 1000))
  .then(() => changeText(heading6, "six", "blue", 1000))
  .then(() => changeText(heading7, "seven", "cyan", 1000))
  .catch((error) => {
    alert(error);
  });
