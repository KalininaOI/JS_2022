// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, 
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (num) => {
//     let newNumbers = [];
//     const totalSum = num.reduce((sum, item) => {
//         console.log(sum);
//         newNumbers.push(sum);
//         return sum + item;
//     }, {});
//     newNumbers.push(totalSum);
//     return newNumbers;
// };

// currentSums(numbers)
// console.log(currentSums(numbers));

// const myArr = ['Vasya', 19];

// // const myArrToObject = myArr.reduce((accum, currentEl) => {
// //     return (accum[i] = currentEl);
// // }, {});

// // console.log(myArrToObject);

// 1. Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, 
// в качестве результата возвращать сумму четных положительных элементов переданного массива.

// const myArr = [1, 2, 4, 6, 8, 2, -1, -4, -3, -6];

// const evenSum = (arr) => {
//     let result = arr
//         .filter( (num) => num > 0 && num % 2 === 0);
//         .reduce( (sum, value) => {
//         return sum + value;
//     });
//     return result;
// };   

// console.log(evenSum(myArr));

// 2. Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, 
// в качестве результата возвращать новый массив с уникальными значениями из исходного.

// const myArr = [1,2,3,2,4,4];

// const uniqueElem = (arr) => {
//     let uniqueArr = [];
//     arr.forEach((element) => {
//         if (!uniqueArr.includes(element)) {
//             uniqueArr.push(element);
//         };
//     });
//     return uniqueArr;
// }

// console.log(uniqueElem(myArr));

// 3. Написать функцию  которая будет принимать два массива, и будет сравнивать их, 
// если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// const myArr1 = [1,2,3,4];
// const myArr2 = [1,2,3,4];

// const compareArrs = (arr1, arr2) => {
//     const res = arr1.every( (el, i) => el === arr2[i]);
//     return res;
// };

// console.log(compareArrs(myArr1, myArr2));


// COPY
// let myVar = 1;
// let myVar2 = myVar;

// myVar2 = 2;

// console.log(myVar, myVar2);

// const myObj = {name: 'Vasya'};
// const myObj2 = myObj;
// myObj2.name = 'Petya'

// console.log(myObj, myObj2);

// const myObj = {name: 'Vasya'};
// const myObj2 = Object.assign({age: 20}, myObj);
// myObj2.name = 'Petya'

// console.log(myObj, myObj2);

// const myObj = {name: 'Vasya'};
// const myObj2 = {...myObj};
// const {name} = myObj2;
// console.log(myObj2.name);
// // myObj2.name = 'Petya'

// console.log(myObj, myObj2);

// const myArr = [5,6,7,8,10];

// const myArr2 = [2,23,2];

// const newArr = [...myArr, ...myArr2];
// console.log(newArr);

// const myFunc = (arg1, arg2, ...args) => {
//     console.log('arg1', arg1);
//     console.log('arg2', arg2);
//     console.log('args', args);
// }

// myFunc(1,2,4,4,5);

// const myArr = [2,4,6];

// for(let element of myArr) {
//     console.log(element);
// }

// const myObj = {name: "Vasya", age: 12};

// const newArr = [];

// for (let key in myObj) {
//     newArr.push(myObj[key]);
// }

// console.log(newArr);

// 2. Написать функцию  которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. 
// Для решения использовать цикл for (... of …).

// const myArr = [1,2,3,4,5,6,10]

// const evenSum = (...args) => {
//     let sum = 0;
//     for (let variable of args) {
//         if (variable % 2 === 0) {
//             sum += variable;
//         }
//     }
//     return sum;
// }

// console.log(evenSum(myArr));

//3. Написать функцию  которая будет принимать два массива, и в качестве результата будет возвращать только  те значения которые есть и в первом и во втором массиве.

// const myArr1 = [1,2,3,4,5,0];
// const myArr2 = [1,2,3,4,5];

// const jointElem = (arr1, arr2) => {
//    const newArr = [];

//    arr2.forEach(
//     (element) => arr1.includes(element) && !newArr.includes(element) && newArr.push(element)
//     );
//     return newArr;
// }

// console.log(jointElem(myArr1,myArr2));

// const myObj = {
// name: "Vasya",
// // context: this,
// callName: function() {
//     console.log(this);
//     console.log(this.name);
//     },
// };

// // console.log(myObj.context);

// const newObject = {
//     obj: myObj,
//     name: "Petya",
// }

// newObject.obj.callName();

// const myCity = {
//     cityName: "NiNo",
//     population: 1222222,
//     returnCity: function() {console.log(this.cityName)},
//     returnPopulation: function() {console.log(this.population)},
//     changeKeyValue: function (key, newValue){
//         switch (key) {
//             case 'cityName':
//                 this.cityName = newValue;
//                 return;
//             case 'population':
//                 this.population = newValue;
//                 return;
//             default:
//                 console.log("nokey");
//                 return;   
//         }
//     },
// }

// myCity.returnCity();
// myCity.returnPopulation();

// const say = function(phrase, phrase2) {
//     console.log(`${this.name}: ${phrase}`);
//     console.log(phrase2)
// };

// const myObj = {
//     name: "Vasya",
// };

// const newObject = {
//     name: "Petya",
// };

// const argsArray = ["Hi", "phrase"]
// // myObj.callName.call(newObject);
// say.call(myObj, 'Hello');
// say.apply(myObj, argsArray);

// const boundFunc = say.bind(newObject, "and you", 'phrase');
// boundFunc();

// const say = function (phrase, phrase2) {
//     console.log(`${this.name}: ${phrase}`);
//     console.log(phrase2);
//   };
  
//   const myObject = {
//     name: "Vasya",
//   };
  
//   const newObject = {
//     name: "Petya",
//   };
  
//   const argsArray = ["Привет", "phrase"];
  
//   say.apply(myObject, argsArray);
  
//   // say.call(newObject, "И тебе привет!", "phrase");
//   const boundFunc = say.bind(newObject, "И тебе привет!", "phrase");
//   boundFunc();

// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// const myNewCity = {
//     name: "NiNo",
//     population: 1222220,
//   };

// myCity.showName.call(myNewCity);
// myCity.showPopulation.call(myNewCity);
// myCity.changeKeyValue.call(myNewCity, 'name', 'NY')

// // console.log(myNewCity);

// myCity.changeKeyValue.apply(myNewCity, 'population', 3000);

// const boundFunc = myCity.changeKeyValue.bind(myNewCity, "name", "LA");
// boundFunc();

// console.log(myNewCity);

// Замыкание

// const myFunc = () => {
//     const myVar = 5;
//     return (param) => {
//         console.log(myVar + param);
//     };
// }

// myFunc()(10);

// Карирование

// const myFunc = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         };
//     };
// };

// console.log(myFunc(2)(3)(10));

// Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10. 

// const volPar = () => {
//     const height = 10;
//     return (length, wigth) => {
//         console.log(height * length * wigth);
//     };
// };

// volPar()(2, 10);

// Используя каррирование написать функцию которая будет вычислять объём параллелепипеда.

// const volPar2 = (height) => {
//     return (length) => {
//         return (wigth) => {
//             return height * length * wigth;
//         };
//     };
// };

// console.log(volPar2(20)(30)(5));