// Примитивные типы данных

// Number

//console.log(1/0); // Infinity
//console.log("vasya"/0); // NaN (Not a number)
//console.log(typeof NaN); // Number, lol

// Оператор TypeOf возвращает тип данных, указанный после TypeOf

// const myString = "Строка";
// const anotherString = 'текст: "текст"'; // если нужны кавычки в тексте, нужны обратные слеши перед каждой кавычкой
// const templateString = `шаблонная строка ${anotherString}`; // обратные кавычки для этого

// // console.log(templateString);

// // // Boolean

// // const isAdmin = true;
// // const isUser = false;

// // // Null

// // const emptyVariable = null; // если хочешь создать пустое значение, надо записать в него null

// // // Undefind

// // const userName; // нельзя задать константу без определения значения
// // console.log(userName); 

// // Непримитивные типы данных

// // Object - объект

// const someName = 'Petya';

// const user = {
//     name: someName,
//     lastName: 'Ivanov',
//     age: 23,
//     citizenship: 'Russia',
//     newObject: {
//         newProperty: "prorerty", // пример вложенности
//     }
// };

// const userName = user.name; // вот так правильнее писать

// console.log(userName);
// console.log(user.newObject.newProperty); // пример вызова вложенности

// // TypeOf

// console.log(typeof someName);
// console.log(typeof (someName));

// // Исключения:

// // Результатом вызова typeof null является "object"

// // Вызов typeof alert возвращает "function", потому что alert является функцией. 
// // Но в JavaScript нет специального типа «функция». Функции относятся к объектному типу.

// console.log(typeof null);

// преобразование типов
// Строковое преобразование

// const myVar = 123;

// const myVarString = String(myVar);
// console.log(typeof myVarString);
// console.log(myVarString);

// Численное преобразование

// const myVar = "fgh123";
// const myVarToNumber = Number(myVar); // или через унарный плюс ... = +myVar
// console.log(typeof myVarToNumber); // будет число, потому что получится Nan, тип ф Nan - число


// Логическое преобразование

// const myVar = 1;
// console.log(!!myVar);  // нужно два !! (! - отрицание) первый ! переводит в булевый тип, второй ! - переводит на противоположное

// Исключения
// undefined при численном преобразовании становится NaN, не 0
//"0" и строки из одних пробелов типа " " при логическом преобразовании всегда true

// const myVar = "0";
// console.log(!!myVar); 

// Математические операторы
// Бинарный плюс

// const myNumber = 1;
// const myNewNumber = 2;
// const myString = "строка";

// console.log(myNumber + myNewNumber);
// console.log(myNumber + myString);

// Сравнение строк

// const string1 = 'сТрока';
// const String2 = 'солнце';
// console.log(string1 > String2); //сравнивает символы по Unicode

// const userTypes = {
//     admin: 'admin',
//     user: 'user',
//     teacher: 'teacher',
//     contenManager: 'contenManager',
// }

// const serverDataUserType = 'user';

// if (serverDataUserType === userTypes.admin) {
//     console.log("показать весь контент");
// } else {
//     console.log("показать ограниченный контент");
// }

// const myNumber = 1;
// const myString = "1";
// console.log(myNumber == myString);

// Есть особенные моменты при работе с null и undefined:
// При строгом равенстве === эти значения различны, так как различны их типы
// При нестрогом равенстве == эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
// При использовании математических операторов и других операторов сравнения < > <= >= 
// Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.

// Практика
console.log(null == "\n0\n"); // \n - перенос строки. тут сравниваются типы - объект и строка
// console.log("111\n0\n3"); 
console.log(null === +"\n0\n"); // null равен только сам себе
console.log("" + 1 + 0); 
console.log("" - 1 + 0); 
console.log(true + false); 
console.log(6 / "3"); 
console.log("2" * "3"); 
console.log(4 + 5 + "px"); 
console.log("$" + 4 + 5); 
console.log("4" - 2); 
console.log("4px" - 2); 
console.log(7 / 0); 
console.log("  -9  " + 5); 
console.log("  -9  " - 5); 
console.log(null + 1); 
console.log(undefined + 1); 
console.log(" \t \n" - 2);

console.log(typeof "\t \n");






