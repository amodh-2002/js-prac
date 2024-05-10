// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const body = document.body;

// //capturing event

// child.addEventListener(
//   "click",
//   () => {
//     console.log("captureddddd!!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("captureddddd!!!! parent");
//   },
//   true
// );
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("captureddddd!!!!grandparent");
//   },
//   true
// );
// body.addEventListener(
//   "click",
//   () => {
//     console.log("captureddddd!!!!body");
//   },
//   true
// );

// //no capture
// child.addEventListener("click", () => {
//   console.log("u clicked on child");
// });
// parent.addEventListener("click", () => {
//   console.log("u clicked on parent");
// });
// grandParent.addEventListener("click", () => {
//   console.log("u clicked on grandparent");
// });
// body.addEventListener("click", () => {
//   console.log("u clicked on body");
// });

//event delegation
// const grandParent = document.querySelector(".grandparent");
// grandParent.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

