// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// console.log(mainHeading);
// console.log(header);

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.innerText);

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.style);
// mainHeading.style.color = "brown";
// mainHeading.style.backgroundColor = "white";
// mainHeading.style.border = "2px solid brown";
// mainHeading.style.borderRadius = "0.3em";
// mainHeading.style.fontSize = "1.2rem";

//get and set attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://youtube.com");
// console.log(link.getAttribute("href"));
// const input = document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));

//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);

// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems[0]);

//loop
// let navItems = document.getElementsByTagName("a");
// console.log(navItems);

// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "brown";
//   navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "brown";
//   navItem.style.fontWeight = "bold";
// }
// navItems = Array.from(navItems);

// let navItems = document.querySelectorAll("a");

// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "brown";
//   navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "brown";
//   navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "brown";
//   navItem.style.fontWeight = "bold";
// });

// navItems = Array.from(navItems);

//innerHTML

// const headline = document.querySelector(".head-line");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1> Inner Html is changed </h1>";
// headline.innerHTML += '<button class ="btn"> Learn </button>';

// const rootNode = document.getRootNode();
// console.log(rootNode);
// // console.log(rootNode.childNodes[1]);

// const htmlElementNode = rootNode.childNodes[1];
// // console.log(htmlElementNode);

// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode.parentNode);
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextElementSibling);

// const h1 = document.querySelector("h1");
// const nav = h1.parentNode;
// nav.style.backgroundColor = "brown";
// nav.style.color = "black";
// const header = nav.parentNode;
// console.log(div);

// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title);

// const headLine = document.querySelector(".head-line");
// console.log(headLine.children);

// const sectionToDo = document.querySelector(".todo-section");
// console.log(sectionToDo.classList);
// sectionToDo.classList.add("bg-dark");
// sectionToDo.classList.remove("container");
// console.log(sectionToDo.classList.contains("container"));
// sectionToDo.classList.toggle("bg-dark");

// const header = document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-dark");

// const newToDoItem = document.createElement("li");
// // const newToDoItemText = document.createTextNode("lets gooo");
// newToDoItem.textContent = "letsss goo";
// const todoList = document.querySelector(".todo-list");
// // newToDoItem.append(newToDoItemText);
// // todoList.append(newToDoItem);
// // todoList.prepend(newToDoItem);

// console.log(newToDoItem);

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// const newToDoItem = document.createElement("li");
// const todoList = document.querySelector(".todo-list");
// newToDoItem.textContent = "lets gooo";
// todoList.after(newToDoItem);
// todoList.before(newToDoItem);

//clone node
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "text-todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "are u dumb stupid or dumb huh";
// // li2.textContent = "are u  stupid or dumb huh";
// ul.appendChild(li);
// ul.insertBefore(li, referenceNode);
// ul.replaceChild(li, referenceNode);
// ul.removeChild(li);

//live and static list
//static -->query live --> getElements
// const listItem = document.querySelectorAll(".todo-list li");
// const ul = document.querySelector(".todo-list");
// const listItem = ul.getElementsByTagName("li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";
// ul.append(sixthLi);
// console.log(listItem);

//dimensions
// const sectionToDo = document.querySelector(".todo-section");
// const info = sectionToDo.getBoundingClientRect().height;
// console.log(info);

//Events
//click

// const button = document.querySelector(".btn-headline");
// button.onclick = () => {
//   console.log("lets goo nigger");  not good
// };

//add event listener
// const onClick = () => {
//   console.log("lets goo nigger");
//   button.style.backgroundColor = "brown";
//   button.style.color = "white";
// };
// button.addEventListener("click", () => {
//   console.log("lets goo nigger");
//   button.style.backgroundColor = "brown";
//   button.style.color = "white";
// });

//this

// const button = document.querySelector(".btn-headline");
// button.addEventListener("click", () => {
//   console.log("lets goo nigger");
//   console.log(this);
// });

//click events on multiple buttons

// const selectAll = document.querySelectorAll(".todo-btn");
// for (select of selectAll) {
//   select.addEventListener("click", () => {
//     console.log("ur funked and u know that");
//   });
// }
// for (select of selectAll) {
//   select.addEventListener("click", function () {
//     console.log("ur funked and u know that");
//     console.log(this.textContent);
//   });
// }
// selectAll.forEach((select) => {
//   select.addEventListener("click", () => {
//     console.log("ur fucked and you know it");
//   });
// });
// for (let i = 0; i < selectAll.length; i++) {
//   selectAll[i].addEventListener("click", () => {
//     console.log("ur fucked and you know it ");
//   });
// }

//event object

// const firstButton = document.querySelector(".done");
// console.log(firstButton);

const selectAll = document.querySelectorAll(".todo-btn");
// console.log(selectAll);
// for (select of selectAll) {
//   select.addEventListener("click", (e) => {
//     // console.log("ur funked and u know that");
//     // console.log(e.currentTarge t);
//     // console.log(e.currentTarget.textContent);
//     // console.log(e);
//   });
// }

// selectAll.forEach((select) => {
//   select.addEventListener("click", (e) => {
//     e.target.style.backgroundColor = "yellow";
//     e.target.style.color = "#333";
//   });
// });

// selectAll.forEach((select) => {
//   select.addEventListener("click", (e) => {
//     alert(`you have pressed ${select.textContent}`);
//   });
// });

//key press and mouse over event

// const body = document.body;
// const mainButton = document.querySelector(".btn-headline");
// // body.addEventListener("keypress", (e) => {
// //   console.log(e.key);
// // });

// mainButton.addEventListener("mouseover", () => {
//   console.log("lets gooo");
// });
// mainButton.addEventListener("mouseleave", () => {
//   console.log("i left gooo");
// });

///event bubbling and capturing

// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type ='text']");
// const ul = document.querySelector(".todo-list");

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newTodoText = todoInput.value;
//   const newLi = document.createElement("li");
//   const newLiInnerHtml = `
//   <span class="text">${newTodoText}</span>
//   <div class="todo-buttons">
//     <button class="todo-btn done">Done</button>
//     <button class="todo-btn remove">Remove</button>
//   </div>
// `;
//   newLi.innerHTML = newLiInnerHtml;
//   ul.append(newLi);
//   todoInput.value = "";
// });

// ul.addEventListener("click", (e) => {
//   console.log(e.target);
//   //check if user clicked on done button
//   if (e.target.classList.contains("remove")) {
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
//   if (e.target.classList.contains("done")) {
//     console.log("great");
//     const liSpan = e.target.parentNode.previousElementSibling;
//     console.log(liSpan);
//     liSpan.style.textDecoration = "line-through";
//   }
// });

//callback

// function myFunc(callback) {
//   console.log("inside my func");
//   callback();
// }
// myFunc(() => {
//   console.log("inside my function2");
// });

// function getTwoNumbers(a, b, callback) {
//   // console.log(a, b);
//   if (typeof a === "number" && typeof b === "number") {
//     callback(a, b);
//   } else {
//     console.log("wrong datatype");
//   }
// }
// // function addTwoNumbers(c, d) {
// //   console.log(c + d);
// // }
// getTwoNumbers(5, 5, (c, d) => {
//   console.log(c + d);
// });

//async callback

