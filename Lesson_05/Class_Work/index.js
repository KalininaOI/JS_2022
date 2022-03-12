// const myVar = 'строка';
// console.log(Object.getPrototypeOf(myVar));

// const myArray = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < myArray.length; i++) {
//     const firstArrayElement = myArray[i].toString();
//     if(
//         firstArrayElement[0] === '1' || 
//         firstArrayElement[0] === '2' || 
//         firstArrayElement[0] === '5'
//         ) {
//         console.log(myArray[i]);
//     }
// }

// const test = true;
// if(test) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// const myString = '12345';
// switch (myString[0]) {
//     case '1':
//         console.log('yes');
//         break;
//     case '2':
//         console.log('yes');
//         break;
//     case '3':
//         console.log('yes');
//         break;
//     default:
//         console.log('No');
//         break;    
// }

// const myVar = '123222';
// let result1 = 0;
// let result2 = 0;

// for (let i = 0; i < myVar.length; i++) {
//     if (i <= 2) {
//         result1 += +myVar[i];
//     } else {
//         result2 += +myVar[i];
//     }
// }


// if (result1 === result2) {
//     console.log('yes');
// } else {
//     console.log('No')
// }



//function declaration - объявление функции
// function expression - функциональное выражение
// arrow function - стрелочные функции


// function declaration 

// function showMessage() {
//     console.log('hello');
// }

// showMessage();

// const user = 'vasya';

// function greetUser(name = 'guest') {
//     // let a = name || 'guest'; - do not use!
//     console.log(`Привет, ${name}`);
// }

// greetUser(user);

// const user = {
//     name: 'vasya',
//     age: 18,
// };

// function checkAccess (age) {
//     if (age < 18) {
//         showDeniedMsg(); 
//     } else {
//         showAllowMsg();
//     }
// }

// function showAllowMsg() {
//     console.log('Доступ разрешен');
// }
// function showDeniedMsg() {
//     console.log('Доступ запрещен');
// }

// checkAccess (user.age)

// function expression

// const user = {
//     name: 'vasya',
//     age: 18,
// };

// function checkAccess (age) {
//     if (age < 18) {
//         showDeniedMsg(); 
//     } else {
//         showAllowMsg();
//     }
// }

// checkAccess (user.age); // не найдет функциональные выражение, еще не прогрузились

// const showAllowMsg = function () { // функциональное выражение, загружается только после инициализации всего скрипта, после объявлений функций
//     console.log('Доступ разрешен');
// }
// const showDeniedMsg = function() {
//     console.log('Доступ запрещен');
// }


// Return

// function calcValue(a,b) {
//     return a + b;
//     console.log('hi'); // не выведет, т.к. return прерывает функцию
// }

// const result = calcValue(3,5);

// console.log(result);

// const user = {
//     name: 'vasya',
// };

// const greetMsg = 'hello';

// function getName(user) {
//     return user.name || 'guest';
// }
// function sayHi(text, name = getName()) {
//     console.log(`${text}, ${name}`);
// }

// sayHi(greetMsg, getName(user));

//функция, используемая внутри функции называется callback

// const name = 'vasya';

// function showMsg() {
//     console.log(name);
// }

// showMsg();


// 1.Написать функцию, которая будет принимать имя пользователя, 
// и выводить строку с приветствием данного пользователя, 
// если имени пользователя нет, выводить приветствие гостя.

// const user = 'Petya';

// function sayHi(name = 'guest') {
//     console.log(`Hello, ${name}`)
// }

// sayHi(user);

// 2. Написать функцию, которая в качестве первого параметра будет принимать численное значение, 
// а в качестве второго параметра будет принимать степень, в которую надо возвести первый аргумент. 
// По умолчанию, второй аргумент единица.

// function pow(a,b = 1) {
//     return a**b;
// }

// const result = pow(4,2);
// console.log(result);

// const calcPower = function (num, power = 1) {
//     if(typeof num != 'number') {
//         const errorMsg = 'Некоректные аргументы';
//         return errorMsg;
//     } else {
//         return num ** power;
//     }
// };

// const result = calcPower(2, 3);
// console.log(result);

// 3. Написать функцию, которая будет принимать в качестве входного параметра массив любых, целых чисел, 
// и будет возвращать среднее арифметическое значение данного массива*. 

// const newArr = [2, 3, 10]

// function average(arr) {
//     const sum = 0;
//     for (let i=0; i < arr.length; i++) {
//         sum = sum+i;
//     }
//     let result = sum/arr.length;
//     console.log(result);
// }

// average(newArr);

// const myArray = [2, 10, 12];

// const calcAverageValue = function (arr){
//     if (!arr.length) {
//         return 'пустой массив';
//     }
//     let sum = 0;
//     for(let i=0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverageValue(myArray));

// arrow function

// const calcValue = (a,b) => a + b;

// // const calcValue = (a,b) => {
// //     return a + b;
// // } // samething
// const result = calcValue(3,5);
// console.log(result);


// 1. Напишите стрелочную функцию которая будет выводить переданную строку в консоль n раз.

// function multString(text, num) {
//     for(i=1; i <= num; i++) {
//         console.log(`${text}`);
//     }
// }
// multString("Hi, friend", 3);

// const multString = function(text, num) {
//     for(i=1; i <= num; i++) {
//         console.log(`${text}`);
//     }
// }
// multString("Hi, friend", 3);

// const multString = (text, num) => {
//     for(i=1; i <= num; i++) {
//         console.log(`${text} ${i}`);
//     }
// }
// multString("Hi, friend", 3);


// 2. Напишите стрелочную функцию, которая будет принимать в качестве параметра букву и если она гласная, 
// функция будет  возвращать true, в противном случае false . 

// const myString = "а";
// const isVowel = (letter) => {
//     if (
//         letter === "а" ||
//         letter === "е" ||
//         letter === "ё" ||
//         letter === "у" || 
//         letter === "ы" ||
//         letter === "э" ||
//         letter === "я" ||
//         letter === "и" ||
//         letter === "ю"
//         ) {
//             return true;
//         } else {
//             return false;
//         }
// } 

// result = isVowel(myString);

// console.log(result);



const myChar = 'а';

const isMyCharVowel = (char) => {
    const vowelIs = 'йуеыаоэяиюё';
    if (vowelIs.includes(char)) {
        return 'Гласная';
    }
    return 'Не гласная';
}

console.log(isMyCharVowel(myChar));


