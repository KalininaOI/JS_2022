// const goToPlace = (place) => {
//     console.log(`Иду в ${place}! Хэхэй!`);
// }


// const user = {
//     name: "Ivan",
//     age: 18,
//     goToUniversity: () => goToPlace('Универ'),
// };

// user.goToUniversity();

// const namekey = "name"; // чтобы изменять ключи объекта

// const user = {
//     [namekey]: "Ivan",
//     age: 18,
// };

// console.log(user);
// console.log(user.age);
// console.log(user['age']);

// const user = {
//     name: "Ivan",
//     age: 18,
// };

// user.name = "Petya";

// console.log(user.name);

// const user = {
//     name: "Ivan",
//     age: 18,
// };

// delete user.name;

// console.log(user.name);

// practice

// const myFavoriteFilm = {
//     name: "Star Wars: Episode III - Revenge of the Sith",
//     Release: 2005,
//     Producer: "Джордж Лукас",
//     Country: "USA",
// }

// myFavoriteFilm.dues = "848 754 768 $";

// myFavoriteFilm.showFilmName = () => console.log(myFavoriteFilm.name);
// myFavoriteFilm.showFilmName();

// delete myFavoriteFilm.Release;

// console.log(myFavoriteFilm);

// const myNumber = 10.12323;

// console.log(Object.getPrototypeOf(myNumber));

// console.log(myNumber.toFixed(2))

// const myNumber = 23e9;
// console.log(myNumber);

// parseInt - для целых чисел
// parseFloat - для дробных чисел
// смотрит посимвольно

// console.log(parseInt("2356fg"));
// console.log(parseInt("23vb56fg"));
// console.log(parseInt("23.56fg"));
// console.log(parseFloat("23.56fg"));

// console.log(parseInt("123", 8));

// const myNumber = 123;

// if (typeof myNumber === "number") {
//     console.log("Number!");
// }

// if (!isNaN(myNumber)) console.log("Number!");

// console.log(isFinite(10/0));

// console.log(Math.ceil(myNumber)); // ceil - потолок - округление в большую сторону
// console.log(Math.floor(myNumber)); // floor - пол - округление в меньшую сторону
// console.log(Math.random());

// const myArr = [1, 4, 90, 44];

// console.log(Math.max(...myArr)); // ...myArr - то же самое, что 1, 4, 90, 44
// console.log(Math.min(...myArr));

// const myString = "Вася вошел в класс и сказал\n \"Привет всем!\"\u00A9";
// console.log(myString);

// const myName = ' Vasya';
// console.log(myName);
// console.log(myName.trim()); // убирает пробелы по краям строки

// const myString = "Widget with id";

// console.log(myString.indexOf("id", 2));
// console.log(myString.indexOf("id"));

// const myString = "with id";

// const idIndex = myString.indexOf("id");
// const newString = myString.slice(idIndex);

// console.log(newString);



//Практика

// 1. Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] 
// и будет возвращать случайное целое число из данного диапазона.

// function randomNum(min,max) {
//     const newRandomNum = Math.random() * (max - min) + min;
//     return Math.round(newRandomNum);
// }

// console.log(randomNum(3,8));

// const myFunc = (min, max) => {
//     const result = Math.random() * (max - min) + min;
//     return result.toFixed();
// };

// console.log(myFunc(1,20));

// 2. Реализовать функцию которая будет определять, 
// в каком регистре записан n элемент переданной строки, 
// если в верхнем то вернуть true, в противном случае вернуть false.

// const myString = "Строка";

// const myFunc = (str, pos) => {
//     let char = str.slice(pos, (pos+1));
//     if (char === char.toUpperCase()) {
//         return true;
//     }
//     return false;
// }

// console.log(myFunc(myString, 0));


// const myStr = "Строка";

// const isCharBig = (str, pos) => {
//     if (!str[pos]) {
//         return "Error";
//     }
//     if (str[pos] === str[pos].toUpperCase()) {
//         return "Заглавная";
//     }
//     return "Не заглавная";
// }

// console.log(isCharBig(myStr,0));


// 3.Реализовать функцию которая заменяет в строке str, 
// все вхождения подстроки find, на подстроку replace.

const myConst = "bcgb krehaieu jehceu word nj word";

const replaceFunc = (str, findValue, replaceValue) => {
    return str.replaceAll(findValue, replaceValue);
};

console.log(replaceFunc(myConst, "word", "lol"));


