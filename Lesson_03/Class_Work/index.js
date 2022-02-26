// Примитивные типы данных

// Number

//console.log(1/0); // Infinity
//console.log("vasya"/0); // NaN (Not a number)
//console.log(typeof NaN); // Number, lol

// Оператор TypeOf возвращает тип данных, указанный после TypeOf

// const myString = "Строка";
// const anotherString = 'текст: "текст"'; // если нужны кавычки в тексте, нужны обратные слеши перед каждой кавычкой
// const templateString = `шаблонная строка ${anotherString}`; // обратные кавычки для этого

// console.log(templateString);

// // Boolean

// const isAdmin = true;
// const isUser = false;

// // Null

// const emptyVariable = null; // если хочешь создать пустое значение, надо записать в него null

// // Undefind

// const userName; // нельзя задать константу без определения значения
// console.log(userName); 

// Непримитивные типы данных

// Object - объект

const someName = 'Petya';

const user = {
    name: someName,
    lastName: 'Ivanov',
    age: 23,
    citizenship: 'Russia',
    newObject: {
        newProperty: "prorerty", // пример вложенности
    }
};

const userName = user.name; // вот так правильнее писать

console.log(userName);
console.log(user.newObject.newProperty); // пример вызова вложенности

// TypeOf

console.log(typeof someName);
console.log(typeof (someName));

// Исключения:

// Результатом вызова typeof null является "object"

// Вызов typeof alert возвращает "function", потому что alert является функцией. 
// Но в JavaScript нет специального типа «функция». Функции относятся к объектному типу.

console.log(typeof null);
