// Вывести в терминал строку “Hello World!”
console.log("Hello World");

// Создать переменную для каждого типа данных
const yearOfFoundationOfNNovgorod = 1221; // Number
let userName = "Peter"; // String
let myNumber = 268392038283197283829128938n; // BigInt
let payByCash = false; // Boolean
let quantityOfMoney = null; // null
let admin; // undefined
let user = {
    name: "Nick",
    age: 25,
    isStudent: false,
}; // Object

// // Вывести в консоль редактора кода созданные переменные
console.log(userName);
console.log(yearOfFoundationOfNNovgorod);
console.log(myNumber);
console.log(payByCash);
console.log(quantityOfMoney);
console.log(admin);
console.log(user);

// //Вывести ее тип через оператор typeof и функцию typeof
console.log(typeof userName);
console.log(typeof yearOfFoundationOfNNovgorod);
console.log(typeof myNumber);
console.log(typeof payByCash);
console.log(typeof quantityOfMoney);
console.log(typeof admin);
console.log(typeof user);

// Попробовать изменить переменную объявленную через const
const myPlanet = Earth;
const myPlanet = Mars;
console.log(myPlanet);
//  Изменить нельзя - синтаксическая ошибка

// Попробовать изменить переменную с типом object объявленную через const
const newUser = {
    name: "Alex",
    age: 19,
    isStudent: true,
}; 
// const newUser = {
//     name: "Alex",
//     age: 40,
//     isStudent: true,
// }; // всю переменную менять нельзя
newUser.age = 20;
console.log(newUser);

// Попробовать изменить переменную с типом object объявленную через let
let cat = {
    color: "black",
    breed: "Bobtail",
    character: "kind",
}
// let cat = {
//     color: "white",
//     breed: "Abyssinian",
//     character: "angry",
// } // всю переменную менять нельзя
cat.color = "white";
console.log(cat);

//Попробовать изменить переменную с типом object объявленную через var
var dog = {
    color: "brown",
    breed: "Beagle",
    character: "kind",
}
var dog = {
    color: "red",
    breed: "airedale",
    character: "nosy",
}
console.log(dog);
