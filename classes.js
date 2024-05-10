// function hello() {
//   console.log("hello ");
// }
// // hello.muOwnProperty = "lets gooo";
// // console.log(hello.muOwnProperty);

// console.log(hello.prototype);
//

//new keyword

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }
// createUser.prototype.about = function () {
//   console.log(this.firstName, this.age);
// };
// const user1 = new createUser("Amodh", 19);
// user1.about();

//hasOwnProperty
//HW

// let numbers = [1, 2, 3, 4];
// console.log(Object.getPrototypeOf(numbers));

// class CreateUser {
//   constructor(firstName, lastName, email, age, address) {
//     console.log("constructor is called");
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }
//   about() {
//     return `${this.firstName} is ${this.age}`;
//   }
//   is18() {
//     return this.age >= 18;
//   }
//   sing() {
//     console.log("lalalala");
//   }
//   func(a) {
//     console.log(a);
//   }
// }

// const user1 = new CreateUser(
//   "Amodh",
//   "BH",
//   "xyz@gmail.com",
//   19,
//   "opp to tiger cave"
// );
// const user2 = new CreateUser("L", "nj", "xz@gmail.com", 15, "opp to lion cave");
// const user3 = new CreateUser(
//   "W",
//   "NB",
//   "xy@gmail.com",
//   16,
//   "opp to cheetha cave"
// );
// console.log(user1.is18());
// user1.func("hey");

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return "I am eating your meat ";
//   }
// }

// const tiger = new Animal("Tiger", 12);
// console.log(tiger.eat());

// class dog extends Animal {
//   constructor(name, age, religion) {
//     super(name, age);
//     this.religion = religion;
//   }
//   isWorthy() {
//     return true;
//   }
//   eat() {
//     return `modified eat : let goooo`;
//   }
// }

// const tommy = new dog("Tommy", 9, "hindu");
// console.log(tommy);
// console.log(tommy.isWorthy());
// console.log(tommy.eat());

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get fullName() {
//     return `Your Full Name is ${this.firstName} ${this.lastName}`;
//   }

//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split();
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   //   setName(firstName, lastName) {
//   //     this.firstName = firstName;
//   //     this.lastName = lastName;
//   //   }
// }

// const Person1 = new Person("Amodh", "BH", 19);
// console.log(Person1);
// // console.log(Person1.fullName);
// // Person1.setName("AMo", "nj");
// // console.log(Person1.fullName);
// Person1.fullName = "AMODH BH";
// console.log(Person1);

//static method and properties 
