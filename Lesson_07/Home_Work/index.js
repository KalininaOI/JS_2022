// ПРАКТИКА 1

// 1. Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, 
// в качестве результата возвращать сумму четных положительных элементов переданного массива.

// const myArr = [1, 2, 4, 6, 8, 2, -1, -4, -3, -6];

// IF
// const evenSum = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (Math.round(arr[i]) != arr[i]) {
//             return "В массиве должны быть только целые числа!";
//         } else if (arr[i] > 0 && arr[i] % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }   

//     const result = newArr.reduce( (sum, value) => {
//         return sum + value;
//     });
//     return result;
// }

// FILTER
// const evenSum = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (Math.round(arr[i]) != arr[i]) {
//             return "В массиве должны быть только целые числа!";
//         } 
//             newArr.push(arr[i]);
//     }
//     const positiveArr = newArr.filter( (num) => num > 0);
//     const evenArr = positiveArr.filter( (elem) => elem % 2 === 0);
//     const result = evenArr.reduce( (sum, value) => {
//         return sum + value;
//     });
//     return result;
// };   

// console.log(evenSum(myArr));

// 2. Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, 
// в качестве результата возвращать новый массив с уникальными значениями из исходного.

const myArr = [1,2,3,2,4,4];

// через FOR
// const uniqueElem = (arr) => {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

// через forEach
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

// const myArr1 = [1,2,3,4,5];
// const myArr2 = [1,2,3,4];

// const compareArrs = (arr1, arr2) => {
//     const arrLen1 = arr1.length;
//     const arrLen2 = arr2.length;
//     const maxLen = Math.max(arrLen1, arrLen2);

//     for (let i = 0; i < maxLen; i++) {
//         if (arr1[i] != arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// const myArr1 = [1,2,3,4];
// const myArr2 = [1,2,3,4];

// const compareArrs = (arr1, arr2) => {
//     if (arr1.length != arr2.length) {
//         return false;
//     }
//     const res = arr1.every( (el, i) => el === arr2[i]);
//     return res;
// };
// console.log(compareArrs(myArr1, myArr2));

// ПРАКТИКА 2

// 1. Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. 
// Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// const obj1 = {
//     name: "Ivan",
// }

// let obj2 = Object.assign({age: 12}, obj1);
// obj2.name = "Vasya";

// let obj3 = {...obj1};
// obj3.name = "Oleg";

// console.log(obj1, obj2, obj3);

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
//     for (let elem1 of arr1) {
//         let findElem = arr2.find( (elem2) => elem2 === elem1);
//         if (findElem) {
//             console.log(findElem);
//         }
//     }
// }

// jointElem(myArr1,myArr2);

// ОСНОВНОЕ ЗАДАНИЕ

// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const fruits = ["apple", "peach", "lemon", "orange"];

// const fruitsLen = fruits.map((fruit) => {return fruit.length});

// console.log(fruitsLen);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, 
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (num) => {
//     let newNumbers = [];
//     num.reduce((sum, item) => {
//         newNumbers.push(sum);
//         return sum + item;
//       });
//       newNumbers.push(totalSum);
//       return newNumbers;
// };

// console.log(currentSums(numbers));

// 3.Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, 
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const myArr = [1,2,3,4,5,6];

// Вариант с обычным циклом
// const sumSeven = (arr) => {
//     let newArr = [];
//     for (let j = 0; j < arr.length; j++) {
//         for (let i = j+1; i < arr.length ; i++) {
//             if (arr[j] + arr[i] === 7) {
//                 newArr += `(${arr[j]} : ${arr[i]})`
//             }
//         }
//     }
//     return newArr;
// }
// console.log(sumSeven(myArr));

// Вариант с forEach & find
// const sumSeven = (arr) => {
//     let newArr = [];
//     arr.forEach(element => {
//         let secondElement = 7 - element;
//         let couple = arr.find( (elem) => elem === secondElement);
//         if (couple && couple > element) {
//             newArr.push(`(${element} : ${couple})`);
//         }
//     }); 
//     console.log(newArr);
// }

// sumSeven(myArr);

// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const myStr = "hello my friend";

// const arrOfFirstChars = (str) => {
//     let myArrOfChars = [];
//     let myArr = myStr.split(" ");
//     myArr.forEach( (elem) => {
//         let myElem = elem.split("");
//         myArrOfChars.push(myElem[0]);
//     });
//     return myArrOfChars;
// }

// console.log(arrOfFirstChars(myStr));

// 5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const myStr = "hello my friend";

// const arrOfSymbols = (str, num) => {
//     let newArr = [];
    
//     const preSymbol = str[num - 1];
//     const curruntSymbol = str[num];
//     const postSymbol = str[num + 1];

//     if (num >= 1) {
//         newArr.push(preSymbol);
//     }
//     newArr.push(curruntSymbol);
//     if(num < str.length) {
//         newArr.push(postSymbol)
//     }

//     return newArr;
// }

// console.log(arrOfSymbols(myStr, 2));

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const myArr = [10, 5, 7, 2, 3, 0];

// const mySortArr = myArr.sort( (a,b) => b - a);

// console.log(mySortArr);

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const myArr1 = [1, 2, 3];
// const myArr2 = [8, 9, 4, 1];
// const myArr3 = [100, 29, 30];

// const sortJointArr = (arr1, ...arr) => {
//     let jointArr = arr1.concat(...arr);
//     const sortArr = jointArr.sort( (a,b) => b - a);
//     let sortArrWithAir = [];
//     sortArr.forEach(element => {
//         sortArrWithAir.push(element, " ");
//     });
//     const lenSorted = sortArrWithAir.length;
//     sortArrWithAir.pop(lenSorted - 1);
//     console.log(sortArrWithAir);
// }

// sortJointArr(myArr1, myArr2, myArr3);

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const myArr = [
//     [1, 2, 3], 
//     [4, 5], 
//     [6]
// ];

// const sumOfElements = (arr) => {
//     const newArr = arr.flat(Infinity);
//     let result = newArr.reduce( (sum, element) => sum + element, 0);
//     return result;
// }

// console.log(sumOfElements(myArr));

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const myArr = [1,3,5,7];

// const reverseArr = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(reverseArr(myArr));

// 10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const myArr = [1,3,1,1,1,1,5,7];

// const counterOfSumTen = (arr) => {
//     let sum = 0;
//     let counter = 0
//     for (let i = 0; i< arr.length; i++) {
//         sum += arr[i];
//         counter += 1;
//         if (sum >= 10) {
//             return `Нужно сложить ${counter} элементов, чтобы их сумма была больше 10`;
//         }
//     }
// }

// console.log(counterOfSumTen(myArr));

// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. 
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (elem, num) => {
    
//     let newArr = [];
//     newArr.length = num;
//     newArr.fill(elem);
//     return newArr;
// }
// console.log(arrayFill('пиу', 5));