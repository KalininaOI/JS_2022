// Массивы

// const myArr = [1, () => console.log("123"), "string"];

// console.log(myArr);
// console.log(typeof myArr);
// console.log(Array.isArray(myArr));

// const myObject = {
//     id: 1,
//     name: "Vasya",
//     data: [1, 2, 2, 4],
// }

// const users = [
//     {id: 1, name: "Vasya"},
//     {id: 2, name: "Sonya"},
//     {id: 3, name: "Lena"},    
// ];
// 
// const newArray = new Array(5);
// console.log(newArray[2]);

// Многомерные массивы

// const myArr = [
//     [1,2],
//     [3,4],
//     [5,6,[7,8]],
// ];

// console.log(myArr[2][2][0]);

// const myArr = ['one', 'two', 'three', 'four', 'five'];
// myArr.push('six', 'seven'); // добавляет элемент в конец массива
// myArr.unshift('null'); // добавляет в начало
// myArr.shift(); // удаляет первый
// myArr.pop(); // удаляет последний

// console.log(myArr);

// const myArr = [1,2,3,4];

// console.log(myArr.includes(2));

// Полезные методы массивов

// find

// const myArr = ["один", "два", "три", "четыре"];
// const users = [
//     {id: 1, name: "Vasya"}, 
//     {id: 2, name: "Olga"}, 
//     {id: 3, name: "Igor"}, 
//     {id: 4, name: "Lena"}, 
//     {id: 5, name: "Petya"}, 
// ];

// const foundItem = users.find((user) => {
//     console.log(user);
// });

// const foundItem = users.find((user) => user.id === 1);
// let foundItem =" ";
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === "два") foundItem = myArr[i];
// }

// console.log(foundItem);

// filter

// const users = [
//     {id: 1, name: "Vasya", isAdmin: false}, 
//     {id: 2, name: "Olga", isAdmin: false}, 
//     {id: 3, name: "Igor", isAdmin: false}, 
//     {id: 4, name: "Lena", isAdmin: true}, 
//     {id: 5, name: "Petya", isAdmin: false}, 
// ];

// const numbers = [1,2,3,4,5,6];
// const evenNumbersArr = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbersArr);

// const notAdminUsers = users.filter((user) => !user.isAdmin);

// let notAdminUsers = [];

// for (let i=0; i<users.length; i++) {
//     if(!users[i].isAdmin) notAdminUsers.push(users[i]);
// }
// console.log(notAdminUsers);

// map

// const users = [
//     {id: 1, name: "Vasya", isAdmin: false}, 
//     {id: 2, name: "Olga", isAdmin: false}, 
//     {id: 3, name: "Igor", isAdmin: false}, 
//     {id: 4, name: "Lena", isAdmin: true}, 
//     {id: 5, name: "Petya", isAdmin: false}, 
// ];

// const modifiedUsers = users.map((user) => {
//     return { ID: user.id, userName: user.name};
// });

// console.log(modifiedUsers);

// forEach

const users = [
    {id: 1, name: "Vasya", isAdmin: false}, 
    {id: 2, name: "Olga", isAdmin: false}, 
    {id: 3, name: "Igor", isAdmin: false}, 
    {id: 4, name: "Lena", isAdmin: true}, 
    {id: 5, name: "Petya", isAdmin: false}, 
];










