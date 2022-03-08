// const myVar1 = 5;
// const myVar2 = 10;
// if (myVar1 > myVar2) {
//     console.log(`${myVar1} больше ${myVar2}`)
// } else if (myVar1 < myVar2) {
//     console.log(`${myVar2} больше ${myVar1}`)
// } else {
//     console.log(end)
// }

// let result = myVar1 > myVar2 ? console.log(true) : console.log(false);
// тернарный оператор


// switch
// const userRole = "admins";
// switch(userRole) {
//     case "student" : console.log("Текущий пользователь - student");
//     break;
//     case "admin" : console.log("Текущий пользователь - admin");
//     break;
//     case "normal_user" : console.log("Текущий пользователь - normal_user");
//     break;
//     default: console.log("нет такого типа пользователя");
//     break;
// }
// // использовать брейки важно, иначе после верного просто начнет у остальных выдавать результаты без сравнения

// логические операторы
// && логическое И
// || логические ИЛИ
// ! логическое НЕ

// console.log(0 || 0 || 4); // возвращает первый верный. если верных нет, то последнее значение
// console.log(1 && 0 && "lol" ); // возвращает первую ложь или последнее значение

// console.log(( 1 && 2) || (4 && 0));

// что делает js пошагово
// if (1 && 0) {
//     console.log(result);
// }

// 1. Находит ключевое слово IF, понимает, что дальше условие
// 2. Внутри условия находит логическое И
// 3. Оператор приводит значения к булеву типу (важно: делает это под капотом)
// 4. 1 - true, 2 - false && - возвращают значения, коорые является false при приведении в булев типу
// 5. В данном случаем мы получаем 0, который приводится в булев тип блоком if

// Логическое не
// 1. JS приводит значение после ! к булеву типу
// 2. ! меняет полученный тип на противоположный

// const myVar = !5;
// // if (myVar) {
// //     console.log("TRUE")
// // }
// console.log(myVar);

// console.log(null  ||  0  ||  ''  ||  undefined); // undefined
// console.log('яблоко'  &&  true  &&  null  &&  1 ); // null
// console.log(0  ||  true  &&  'false'  ||  null); // 'false'
// console.log(0  &&  true  ||  '123'  &&  null); // null
// console.log(!0 && !!1); // true: !0 - true !!1 - true
// console.log(!(null || !'апельсин' && true)  ); // true. !(null || false && true) -> !(null || faise) -> !false -> true

// // практика


// //1
// //С помощью условных операторов вывести на экран длину наибольшего отрезка из трех данных.
// const interval1 = 18;
// const interval2 = 8;
// const interval3 = 10;

// if (interval1 > interval2 && interval1 > interval3) {
//     console.log(`${interval1} самый большой отрезок`);
// } else if (interval2 > interval1 && interval2 > interval3) {
//     console.log(`${interval2} самый большой отрезок`);
// } else if (interval3 > interval1 && interval3 > interval2) {
//     console.log(`${interval3} самый большой отрезок`);
// }


// //2
// //Реализовать систему рекомендаций для пользователя опираясь на значение переменной, хранящей значение температуры в градусах Цельсия.
// // ниже -30:  “Оставайтесь дома!”;
// // от -30 до -10 включительно: “Сегодня холодно”;
// // от -10 до +5 включительно: “Не холодно”;
// // от +5 до +15 включительно: “Тепло”;
// // от +15 до +25 включительно: “Очень тепло”;
// // от +25 до +35: “Жарко”;
// // выше либо равно +35: “Пекло!”;


// const currentTem = 23;
// if (currentTem <= -30) {
//     console.log('Оставайтесь дома!');
// } else if (-30 < currentTem  && currentTem <= -10) {
//     console.log('Сегодня холодно');    
// } else if (-10 < currentTem && currentTem <= 5) {
//     console.log('Не холодно');      
// } else if ( 5 < currentTem && currentTem <= 15) {
//     console.log('Тепло'); 
// } else if ( 15 < currentTem && currentTem <= 25) {
//     console.log('Очень тепло'); 
// } else if ( 25 < currentTem && currentTem < 35) {
//     console.log('Жарко'); 
// } else {
//     console.log('Пекло!'); 
// } 

//циклы
// while / do while

// let myVar = 0;
// while(myVar >= 0 && myVar <=10) {
//     console.log(myVar += 1); // то же, что и myVar +1
// }

// do {
//     console.log(myVar += 1) 
// }
// while (myVar <= 10);

// FOR

// const myVar = 10;

// for (let i=0; i<=myVar; i++) {
//     console.log(i);
//     if (i===7) {
//         break;
//     }
// }

//

// 1 
// Вывести в консоль заданную строку N раз. 
// while

// let phraseCountN = 0;
// while(phraseCountN >= 0 && phraseCountN <=5) {
//     phraseCountN +=1;
//     (console.log("hello")); 
// }
// do while

// let phraseCountN = 0;
// do {
//     phraseCountN +=1;
//     (console.log("hello"));
// } while (phraseCountN <5);

// for

// for(let i = 0; i < 5; i++) {
//     console.log("Hello")
// }

// const iterationText = "Итерация";
// const limit = 5;
// let counter = 1;

// while (counter <= limit) {
//     console.log(`${iterationText} - ${counter}`);
//     counter++;
// }

// do {
//     console.log(`${iterationText} - ${counter}`);
//     counter++;
// } while (counter <= limit);

// for (let counter = 1; counter <= limit; counter++) {
//     console.log(`${iterationText} - ${counter}`);
// }

// 2
//Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. 
//Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, 
//если известно, что в первый день продаж всего было N автомобилей.
// for

// let carAmounts = 60; // N
// const minCarAmounts = 10; // M

// for (let day = 1; carAmounts > minCarAmounts; day++) {
//     carAmounts /= 2;
//     if (carAmounts < minCarAmounts) {
//         console.log(`на ${day} день`)
//         break;
//     }
// }


//3
//Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
//Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
//Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска. 
// год номер кроторого кратен 400 - високосный
// остальные годы, номер которых кратен 100 - Невисокосные (1700, 1800, 1900. 2100..и тд)
// остальные годы, номер которых кратпен 4 - високосные

//for

const startYear = 1800;
const endYear = 2020;

let leapYearAmount = 0;
// const firstSpaceTpipYear = 1961;

// for (let counter = startYear; counter <= endYear; counter++) {
//     if (counter === firstSpaceTpipYear) {
//         console.log(`${firstSpaceTpipYear} - первый полет в космос`);
//         console.log(`количество итераций - ${counter - startYear}`);
//         break;
//     }
// }

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 ===0 || year % 4 ===0 && year % 100 !==0) {
        console.log(year);
        leapYearAmount +=1;
    }

    if (year === endYear) {
        console.log(`количество високосных годов - ${leapYearAmount}`);
        console.log(`количество итераций - ${year - startYear}`);
    }
}