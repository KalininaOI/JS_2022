// // Решение 1
// const timer = (start, end) => {
//   let current = start;
//   console.log(current);
//   if (current > end) {
//     setTimeout(() => timer(current, end), 1000);
//     current--;
//   } else {
//     console.log(`Таймер завершил работу на ${current} секунде`);
//   }
// };
// timer(35, 30);
// // Решение 2
// const timer = (start, end) => {
//   --start;
//   if (start > end) {
//     console.log(start);
//     setTimeout(() => timer(start, end), 1000);
//   } else {
//     console.log(`Таймер завершил работу на ${start} секунде`);
//   }
// };
// timer(35, 30);

// const user = {
//     name: 'Vasya',
//     age: 20,
// }

// console.log(user);

// const str = new String('hello');

// console.log(str);

// const user = new Object ({
//     name: 'Vasya',
//     age: 20,
// });

// console.log(user);

// const admin = {
//     __proto__: user,
// }

// console.log(admin);

// const user2 = {
//     name: 'Petya',
//     age: 22,
// };

// Object.setPrototypeOf({},user);

// Object.prototype.sayHi = function () {
//     console.log(`Hello ${this.name}`);
// };

// console.log(user);
// console.log(user2);

// user.sayHi()

// const animal = {
//     jumps: "Jump!"
// };

// const rabbit = {
//     __proto__: animal,
//     jumps: "Rabbit jumps",
// };

// delete rabbit.jumps;
// console.log(rabbit.jumps);
// console.log(rabbit);

// Object.prototype.sayHi = function() {
//     console.log(`Hello, i am a robot ${this.model}`)
// };

// const robot = {
//     model: 'R2D2',
//     created: 2158,
//     move: function() {
//         console.log("R2D2 just moved!")
//     },
// };

// const terminator = {
//     model: "T-800",
//     sayHi: function() {
//         console.log("Ill be back");
//     },
// };

// Object.setPrototypeOf(terminator, robot);

// console.log(robot);
// console.log(terminator);

// robot.sayHi();
// terminator.sayHi();


//Функции конструкторы

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// };

// CreateUser.prototype.showName = function () {
//     console.log(this.name);
// };

// CreateUser.prototype.showAge = function () {
//     console.log(this.age);
// };

// const userVasya = new CreateUser("Vasya", 20);
// const userPetya = new CreateUser("Petya", 23);

// console.log(userVasya);
// console.log(userPetya);

// userPetya.showName();
// userVasya.showName();

// function CreateCard (from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function() {
//         return `${this.from} send ${this.to}`;
//     };
// };

// CreateCard.prototype.rename = function (newFrom, newTo) {
//     this.from = newFrom;
//     this.to = newTo;
// };

// const myCard = new CreateCard ("Olya", "Kim");
// myCard.show();
// console.log(myCard);


// class Animal {
//     #name = "";

//     static type = "ANIMAL";

//     constructor(props) {
//         this.#name = props.name;
//         this.age = props.age;
//         this.hastail = props.hastail;
//     };
//     voice() {
//         console.log("i am an animal");
//     };
//     get getName(){
//         console.log(this.#name);
//     };
//     set setName(newName) {
//         this.name = newName;
//     }
// };

// const myAnimal = new Animal({name: "Animal", age: 3, hastail: true});

// // console.log(myAnimal);
// // myAnimal.voice();

// class Cat extends Animal {
//     constructor(props) {
//         super(props);
//         this.color = props.color;
//     };
// };

// class BritainCat extends Cat {

//     constructor(props) {
//         super(props);
//         this.breed = "britain";
//     };
// };
// const myBritainCat = new BritainCat ({
//     name: "British", age: 10, hastail: true, color: "grey"
// });

// console.log(myBritainCat.name);
// myBritainCat.getName;
// myBritainCat.setName = "Dog";

// console.log(myBritainCat);

// class People {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//     };   
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     }; 
// };

// class Worker extends People {
//     constructor(props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//     };
//     getSalary() {
//         return this.rate * this.day;
//     };
// };

// const workerVasya = new Worker({
//     name: "Vasya", surname: "Ivanov", rate: 1000, day: 20
// });

// const workerPetya = new Worker({
//     name: "Petya", surname: "Petrov", rate: 500, day: 10
// });

// console.log(workerVasya);
// console.log(workerVasya.getSalary());
// console.log(workerVasya.getFullName());
// console.log(workerPetya);
// console.log(workerPetya.getFullName());

// console.log(document);

// class Components {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
//         hide() {
//            this.$el.style.display = "none"; 
//         }
//         show() {
//             this.$el.style.display = "block"; 
//         }
// }

// class Box extends Components {
//     constructor (options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options, size + "px";
//         this.$el.style.background = options.color;
//     }
// }

// const box1 = new Box({
//     selector: "#box1",
//     size: 100,
//     color: "red",
// });

// const box2 = new Box({
//     selector: "#box2",
//     size: 70,
//     color: "blue",
// });

// class Circle extends Box {
//     constructor(options) {
//         super(options);

//     }
// }


// box1.show();

class Component {
    constructor(selector) {
      this.$el = document.querySelector(selector);
    }
  
    hide() {
      this.$el.style.display = "none";
    }
  
    show() {
      this.$el.style.display = "block";
    }
  }
  
  class Box extends Component {
    constructor(options) {
      super(options.selector);
  
      this.$el.style.width = this.$el.style.height = options.size + "px";
      this.$el.style.background = options.color;
    }
  }
  
  const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red",
  });
  
  const box2 = new Box({
    selector: "#box2",
    size: 80,
    color: "blue",
  });
  
  class Circle extends Box {
    constructor(options) {
      super(options);
  
      this.$el.style.borderRadius = "50%";
    }
  }
  
  const myCircle = new Circle({
    selector: "#circle",
    size: 70,
    color: "green",
  });