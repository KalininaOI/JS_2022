// 1. Сделайте функцию, которая возвращает квадрат числа. 
// Число передается параметром.

// const pow = (n) => n**2;

// console.log(pow(11));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// const sum = (a,b) => a+b; 

// console.log(sum(2,5));

// 3.  Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function calcValue (a,b,c) {
//     let result = (a+b)/c;
//     return result;
// }

// console.log(calcValue(3,9,3));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, 
// а возвращает день недели на русском языке. 

// const dayOfWeek = (n) => {
//     let day = n;
//     switch (day) {
//         case 1:
//             return 'понедельник';
//             break;
//         case 2:
//             return 'вторник';
//             break;
//         case 3:
//             return 'среда';
//             break;
//         case 4:
//             return 'четверг';
//             break;
//         case 5:
//             return 'пятница';
//             break;
//         case 6:
//             return 'суббота';
//             break;
//         case 7:
//             return 'воскресенье';
//             break;
//         default:
//             break;
//     }
// }
// console.log(dayOfWeek(4));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. 
// Если эти числа равны - пусть функция вернет true, а если не равны - false. просто функция без иф

// function compare (a,b) {
//     if (typeof a != 'number' || typeof b != 'number') {
//         let errorMsg = 'нужны числа!';
//         return errorMsg;
//     } else if (a===b) {
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(compare(5,4));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. 
// Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// function compareSum (a,b) {
//     if ((a+b) > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(compareSum(9,3));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
// Если отрицательное - пусть функция вернет true, а если нет - false.

// function isNegativeNumber (n) {
//     if (typeof n != 'number') {
//         let errorMsg = 'нужны числа!';
//         return errorMsg;
//     } else if (n<0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isNegativeNumber(-7));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
// Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange (n) {
//     if (n>0 && n<10) {
//         return true;
//     } 
//     return false;
// }

// console.log(isNumberInRange(7));

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const myArr = [1, 7, -1, 16, 7, 4];
// let myNewArr = [];

// const rangeArr = (Arr) => {
//     for (let i = 0; i < Arr.length; i++) {
//         if (isNumberInRange (Arr[i]) === true) {
//             myNewArr.push(Arr[i]);
//         }
//     }
// }

// rangeArr(myArr);
// console.log(myNewArr);

// 10. Сделайте функцию getDigitsSum (digit - это цифра), 
// которая параметром принимает целое число и возвращает сумму его цифр.

const getDigitsSum = (num) => {
    if (typeof num != 'number' || num % 1 != 0) {
        return "это не целое число!"
    }
    const newNumToStr = String(num);
    let sum = 0;
    for (let i = 0; i < newNumToStr.length; i++) {
        sum += +newNumToStr[i];
    }
    return sum;
}

// console.log(getDigitsSum(1653));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// const sumOfTheYear = () => {
//     for (year = 1; year <= 2020; year++) {
//         if (getDigitsSum(year) === 13) {
//             console.log(year);
//         }
//     } 
// }

// sumOfTheYear();

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (num) => {
//     if (typeof num != 'number' || num % 1 != 0) {
//     return "это не целое число!"
//     } 
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// } 

// console.log(isEven(4568));

// 13.  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const myArr = [3, 4, 7, -2, -1, 842, 6, 653];
// let myNewArr = [];

// const EvenRange = (arr) => {
//     for (let i = 0; i <= arr.length; i++) {
//         if (isEven(arr[i]) === true) {
//             myNewArr.push(arr[i]);
//         }
//     }
// }

// EvenRange(myArr);
// console.log(myNewArr);


// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей 
// (чисел, на которое делится данное число).

// let myArr = [];

// const getDivisors = (num) => {
//     if (typeof num != 'number') {
//         return 'это не число!';
//     }
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             myArr.push(i);
//         }
//     }
// }

// getDivisors(64);
// console.log(myArr);

// 15. Дано число. Сложите его цифры. 
// Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).

// const sumUntilNine = (num) => {
//     let newSum = getDigitsSum(num);
//     if ( newSum > 9) {
//         return sumUntilNine (newSum);
//     }
//     return newSum;
// }

// console.log(sumUntilNine(199));

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const myStr = 'Шалаш';

// const isPalindrome = (str) => {
//     let lowerCaseStr = str.toLowerCase();
//     let myArr = [];
//     for (let i = 0; i < lowerCaseStr.length; i++) {
//             myArr.unshift(lowerCaseStr[i]);
//     }
//     let newStr = String(myArr.join(''));
//     if (newStr === lowerCaseStr) {
//         return true;
//     }
//     return false;
// }

// console.log(isPalindrome(myStr));
