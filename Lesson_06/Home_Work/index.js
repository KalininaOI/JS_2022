// 1.Преобразовать строку в массив слов. 
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const stringToarray = (str) => {
//     let myArray = str.split(" ");
//     return myArray;
// }

// const frase = "Hello my friend";

// console.log(stringToarray(frase));

// 2. Напишите функцию deleteСharacters(str, length), 
// которая возвращает подстроку, состоящую из указанного количества символов.

// const deleteСharacters = (str, length) => {
//     let myArray = str.split(" ");
//     for (let i=0; i<myArray.length; i++) {
//         let newStr = myArray[i].toString();
//         if (newStr.length === length) {
//             return newStr;
//         }
//     }
// }

// const frase = "Hello my friend";

// console.log(deleteСharacters(frase, 5));

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.

// const insertDash = (str) => {
//     let newStr = str.toUpperCase().replaceAll(" ", "-");
//     return newStr;
// }

// const frase = "Hello my friend";

// console.log(insertDash(frase));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const capitalChar = (str) => {
//     return (str[0].toUpperCase() + str.substr(1, str.length));
// }

// const frase = "bla bla bla";

// console.log(capitalChar(frase));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const capitalize = (str) => {
//     let myArray = str.split(" ");
//     let myNewArray = [];
//     for (let i = 0; i < myArray.length; i++) {
//         let newWord = myArray[i].toString();
//         myNewArray.push(newWord[0].toUpperCase() + newWord.substr(1, newWord.length));
//     }
//     return myNewArray.join(' ');
// }

// const frase = "bla bla bla";

// console.log(capitalize(frase));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const changeRegister = (str) => {
    // let new_str = "";
    //   for (let i = 0; i < str.length; i++) {
    //     if (str[i] === str[i].toLowerCase()) {
    //       new_str += str[i].toUpperCase();
    //     } else {
    //       new_str += str[i].toLowerCase();
    //     }
    //   }
    //   return new_str;
    // }

// const frase = "Bla blA bLa";

// console.log(changeRegister(frase));

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const removeChar = (str) => {
//     let newStr = "";
//     for (i=0; i<str.length; i++) {
//         if (str.codePointAt(i) >= 48 && str.codePointAt(i) <= 57 ||
//             str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90 || 
//             str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122 ||
//             str.codePointAt(i) >= 1040 && str.codePointAt(i) <= 1103 ||
//             str.codePointAt(i) === 1105 ||
//             str.codePointAt(i) === 1025
//         ) {
//         newStr += str[i];
//         }
//     }
//     return newStr;
// }

// const frase = "Bla! &&blA``ё bLa";
// console.log(removeChar(frase));


// 8. Напишите функцию zeros(num, len), 
// которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len) => {

//     let myStr = String(num);
//     let numLen = myStr.length;
//     let deltaLen = len - numLen;

//     if (deltaLen === 0) {
//         return num;
//     } else if  (deltaLen > 0 && num > 0) {
//         let nulls = "";
//         for (i=1; i <= deltaLen; i++) {
//             nulls += "0"
//         }
//         let newStr = "+" + nulls + myStr;
//         return newStr;
//     } else if  (deltaLen > 0 && num < 0) {
//         let nulls = "";
//         for (i=1; i <= deltaLen; i++) {
//             nulls += "0"
//         }
//         let newStrWithoutMinus = myStr.slice(1);
//         let newStr = "-" + "0" + nulls + newStrWithoutMinus;
//         return newStr;
//     }
//     return "ну тут либо не числа, либо длина меньше длины числа"
// }

// console.log(zeros(-345, 2));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => {
    // let newStr1 = str1.toLowerCase();
    // let newStr2 = str2.toLowerCase();
//     if (newStr1 > newStr2) {
//         return "Первая строка больше второй";
//     } else if (newStr1 === newStr2) {
//         return "Одно и тоже";
//     } else {
//         return "Первая строка меньше второй";
//     }
// }

// const myStr1 = "Hello my friend";
// const myStr2 = "hello my friend";

// console.log(comparison(myStr1, myStr2));

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitiveSearch = (str1, str2) => {
//     let newStr1 = str1.toLowerCase();
//     let newStr2 = str2.toLowerCase();
//     let counter = 0;

//     let pos = -1;
//     while ((pos = newStr1.indexOf(newStr2, pos + 1)) != -1) {
//       counter +=1;  
//     }
//     return `Найдено ${counter} раз`;
// }

// const myStr1 = "Hello my friend yummy";
// const myStr2 = "MY";

// console.log(insensitiveSearch(myStr1, myStr2));

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, 
// при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const initCap = (str) => {
//     let myArr = str.split(" ");
//     let myNewArray = [];
//     for (i=0; i<myArr.length; i++) {
//         let myElementOfArray = myArr[i];
//         myNewArray.push(myElementOfArray[0].toUpperCase() + myElementOfArray.slice(1));
//     }
//     let newStr = myNewArray.join("");
//     return newStr;
// }

// const frase = "Bla blA bla";

// console.log(initCap(frase));

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, 
// при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const initSnake = (str) => {

//     let newStr = "";
//       for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//           newStr += str[i];
//         } else {
//           newStr += "_" + str[i].toLowerCase();
//         }
//       }
//       let myString = newStr.slice(1);
//       return myString;
// }

// const frase = "CamelCaseForever";

// console.log(initSnake(frase));

// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const repeatStr = (str, n) => {
//     return str.repeat(n);
// }

// const frase = "bla";

// console.log(repeatStr(frase, 4));

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const path = (pathname) => {
//     let positionsOfSlash = [];
    // let pos = -1;
    // while ((pos = pathname.indexOf('/', pos + 1)) != -1) {
    //     positionsOfSlash.push(pos);
    // }
//     let folderName = pathname.substr(Math.max(...positionsOfSlash) + 1);
//     return folderName;
// } 

// const pathToFolder = "./lesson_07/HW/index.js"
// console.log(path(pathToFolder));

// 15.Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str 
// и определяет заканчивается ли строка символами подстроки.

// const endsWith = (str, str1) => {
//     let positionsOfStr = [];
//     let pos = -1;
//     while ((pos = str.indexOf(str1, pos + 1)) != -1) {
//         positionsOfStr.push(pos);
//     }
//     let lastCoincidence = Math.max(...positionsOfStr);
//     if (str[lastCoincidence + str1.length] === undefined) {
//         return "Это окончание строки";
//     }
//     return "Строка заканчивается не этими символами";
// } 

// const frase = "в этой строке надо искать часть";
// const myStr = 'ть';

// console.log(endsWith(frase, myStr));

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, 
// расположенную после или до указанного символа char в зависимости от параметра pos.

// const getSubstr = (str, char, pos) => {
//     if (pos != "before" && pos != "after") {
//         return "Use 'before' or 'after' for 'pos'";
//     } 
//     let indexOfChar = str.indexOf(char);
//     if (pos === "before") {
//         return str.slice(0, indexOfChar);
//     }
//     return str.slice(indexOfChar + char.length);
// }

// const myStr = "строка";
// const myChar = 'ро';

// console.log(getSubstr(myStr, myChar, "before"));

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. 
// По умолчанию подстрока вставляется в начало строки.

// const insert = (str, substr, pos) => {
//     if (typeof pos != "number" && pos != undefined) {
//         return "enter a number!";
//     }
//     if (typeof pos === "number") {
//         let newStr = str.slice(0, pos) + substr + str.slice(pos);
//         return newStr;
//     }
//     let newStr = substr + str;
//     return newStr;
// }

// const myStr = "какая-то строка";
// const mySubStr = "ВЖУХ";

// console.log(insert(myStr, mySubStr, 3));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const limitStr = (str, n, symb) => {
//     if (str.length <= n) {
//         return str;
//     }
//     if (str.length > n && symb === undefined) {
//         return str.slice(0, n) + "...";
//     }
//     return str.slice(0, n) + symb;
// }

// const myStr = "строка";
// const mySymb = "!";

// console.log(limitStr(myStr, 5, ));

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const count = (str, stringsearch) => {
//     let counter = 0;
//     let pos = -1;
//     while ((pos = str.indexOf(stringsearch, pos + 1)) != -1) {
//       counter +=1;
//     }
//     return `${stringsearch} найдено ${counter} раз`;
// }

// const frase = "Bla bla bla";
// const part = "la";

// console.log(count(frase, part));

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const strip = (str) => {
//     let trimStr = str.trim();
//     let myArr = trimStr.split(" ");
//     let myNewArr = [];
//     for (let i=0; i<myArr.length; i++) {
//         if (myArr[i] != "") {
//             myNewArr.push(myArr[i]);
//         }
//     }
//     let myNewStr = myNewArr.join(" ")
//     return myNewStr;
// }

// const frase = " Bla  bla   bla   ";

// console.log(strip(frase));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const cutString = (str, n) => {
//     let myArr = str.split(" ");
//     let myNewArr = [];
//     for (let i = 0; i < n; i++) {
//         myNewArr.push(myArr[i]);
//     }
//     let myStr = myNewArr.join(" ");
//     return myStr;
// }

// const frase = "la la la la la";
// console.log(cutString(frase, 2));

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const findWord = (word, str) => {
//     let myArr = str.split(" ");
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] === word) {
//             return `Да, в строке есть слово ${word}`;
//         }
//     }
//     return `В строке нет слова ${word}`;
// }

// const myStr = "hello my dear friend";
// const myWord = "dear";

// console.log(findWord(myWord, myStr));