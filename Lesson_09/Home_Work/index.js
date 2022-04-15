// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//         this.rate = props.rate;
//         this.days = props.days;
//     };
//     getSalary() {
//         return this.rate * this.days;
//     };
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     };
// };

// const workerIvan = new Worker ({name: "Ivan", surname: "Ivanov", rate: 2000, days: 21});

// console.log(workerIvan.rate);
// console.log(workerIvan.getFullName());
// console.log(workerIvan.getSalary());

// 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Boss extends Worker {
//     constructor(props) {
//         super(props);
//         this.workers = props.workers; 
//     };
//     getSalary() {
//         return this.rate * this.days * this.workers;
//     };
// };

// const bossVera = new Boss ({name: "Vera", surname: "Smirnova", rate: 3500, days: 21, workers: 2});

// console.log(bossVera.days);
// console.log(bossVera.getFullName());
// console.log(bossVera.getSalary());

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// class Worker {
//     #name = "";
//     #surname = "";
//     #rate = "";
//     #days = "";

//     constructor(props) {
//         this.#name = props.name;
//         this.#surname = props.surname;
//         this.#rate = props.rate;
//         this.#days = props.days;
//     };

//     get getName() {
//         return this.#name;
//     };

//     get getSurname() {
//         return this.#surname;
//     };

//     get getRate() {
//         return this.#rate;
//     };

//     set setRate(newRate) {
//         return this.#rate = newRate;
//     };

//     get getDays() {
//         return this.#days;
//     };

//     getSalary() {
//         return this.rate * this.days;
//     };
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     };
// };

// const workerIvan = new Worker ({name: "Ivan", surname: "Ivanov", rate: 2000, days: 21});

// console.log(workerIvan.name);
// console.log(workerIvan.getFullName());
// console.log(workerIvan.getSalary());
// console.log(workerIvan.getName);
// console.log(workerIvan.getSurname);
// console.log(workerIvan.getRate);
// console.log(workerIvan.getDays);

// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// workerIvan.setRate = 1000;
// console.log(workerIvan.getSalary());
// console.log(workerIvan.getRate);


// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//     constructor(props) {
//         this.str = props.str;
//     };
//     reserve() {
//         return this.str.split("").reverse().join("");
//     };
//     ucFirst() {
//         return this.str[0].toUpperCase() + this.str.slice(1);
//     };
//     ucWords() {
//         const myArr = this.str.split(" ").map( function(elem) {return elem[0].toUpperCase() + elem.slice(1)}).join(" ");
//         return myArr;
//     };
// };

// const myNewString = new MyString ({str: "bla bla bla"});

// console.log(myNewString.reserve());
// console.log(myNewString.ucFirst());
// console.log(myNewString.ucWords());


// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//     constructor(str) {
//         this.string = str.string; 
//     };

//     isEmail() {
//         for(let i=0; i<=this.string.length; i++) {
//             if(this.string.codePointAt(i) < 45 ||
//                 this.string.codePointAt(i) === 47 ||
//                 this.string.codePointAt(i) > 57 &&  this.string.codePointAt(i) < 64 ||
//                 this.string.codePointAt(i) > 90 &&  this.string.codePointAt(i) < 95 ||
//                 this.string.codePointAt(i) === 96 ||
//                 this.string.codePointAt(i) > 122 
//                 ) {
//                     return false;
//                 };
//         };

//         if(this.string[0] === "@" || 
//             this.string[0] === "." ||
//             this.string[this.string.length - 1] === "." ||
//             this.string[this.string.length - 1] === "@"
//             ) {
//             return false;
//         };

//         let dotsArr = [];
//         for (let i=0; i<=this.string.length; i++) {
//             if(this.string[i] === ".") {
//                 dotsArr.push(i);
//             };
//         };
//         if(this.string.includes("@") && this.string.indexOf("@") < dotsArr[dotsArr.length -1]) {
//             return true;
//         };
//         return false;
//     };

//     isDomain() {
//         for(let i=0; i<=this.string.length; i++) {
//             if(this.string.codePointAt(i) < 45 ||
//                 this.string.codePointAt(i) === 47 ||
//                 this.string.codePointAt(i) > 57 &&  this.string.codePointAt(i) < 65 ||
//                 this.string.codePointAt(i) > 90 &&  this.string.codePointAt(i) < 97 ||
//                 this.string.codePointAt(i) > 122 && this.string.codePointAt(i) < 1025 ||
//                 this.string.codePointAt(i) > 1025 && this.string.codePointAt(i) < 1040 ||              
//                 this.string.codePointAt(i) === 1104 ||
//                 this.string.codePointAt(i) > 1105
//                 ) {
//                     return false;
//                 };  
//             }; 

//         if(this.string[0] === "-" || 
//             this.string[0] === "." ||
//             this.string[this.string.length - 1] === "." ||
//             this.string[this.string.length - 1] === "-"
//         ) {
//         return false;
//         };  
//     return true;     
//     };

//     isDate() {
//         if(this.string.length != 10 || this.string[2] != "." || this.string[5] != ".") {
//             return "введите дату в формате дд.мм.гггг";
//         };
        
//         if(this.string.slice(3,5) > 12) {
//             return "в году не может быть больше 12 месяцев, введите дату в формате дд.мм.гггг"
//         };

//         if((this.string.slice(3,5) === '01' ||
//             this.string.slice(3,5) === '03' ||
//             this.string.slice(3,5) === '05' ||
//             this.string.slice(3,5) === '07' ||
//             this.string.slice(3,5) === '08' ||
//             this.string.slice(3,5) === '10' ||
//             this.string.slice(3,5) === '12') && this.string.slice(0, 3) > 31
//         ) {
//             return "такого не может быть!";
//         };

//         if((this.string.slice(3,5) === '04' ||
//         this.string.slice(3,5) === '06' ||
//         this.string.slice(3,5) === '09' ||
//         this.string.slice(3,5) === '11') && this.string.slice(0, 3) > 30
//         ) {
//             return "такого не может быть!";
//         };

//         if ( (Number(this.string.slice(6)) % 400 ===0 || 
//                 Number(this.string.slice(6)) % 4 ===0 &&    
//                 Number(this.string.slice(6)) % 100 !==0 ) &&
//                 this.string.slice(3,5) === '02' && this.string.slice(0, 3) <= 29    
//                 ) {
//                     return true;
//         }

//         if(this.string.slice(3,5) === '02' && this.string.slice(0, 3) > 28) {
//             return "такого не может быть!";
//         };

//         return true;
//     };

//     isPhone() {
//         for (let i=0; i<this.string.length; i++) {
//             if (this.string.codePointAt(i) < 48 || 
//                 this.string.codePointAt(i) > 57 ||      
//                 this.string.length != 11 ||
//                 this.string[0] != 8
//                 ) {
//                     return "введите телефон в формате 8ХХХХХХХХХХ";
//                 };
//             return true;
//         };    
//     };
// };

// const myMail = new Validator ({string: "123m.ail@mail.ru"});
// const myDomain = new Validator ({string: "mail.ru"});
// const myDate = new Validator ({string: "29.02.2021"}); 
// const myPhone = new Validator ({string: "89023592329"}); 

// console.log(myMail.isEmail());
// console.log(myDomain.isDomain());
// console.log(myDate.isDate());
// console.log(myPhone.isPhone());

// console.log( "9".codePointAt(0) );
// 33, 35-39, 42-43, 45-46, 48-57, 64-90, 95, 97-122 - a-z, A-Z, 0-9, . - _ @,
// 1072-1103 1105 1025 1040-1071

// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// const date = new Date();
// const thisYear = date.getFullYear();

// class User {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//     };
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     };
// };

// class Student extends User {
//     constructor(props) {
//         super(props);
//         this.year = props.year;
//     };
//     getCourse() {
//         return `${thisYear - this.year}-й курс`;
//     };
// };

// // const ivanUser = new User ({name: "Ivan", surname: "Ivanov"});

// // console.log(ivanUser.name);
// // console.log(ivanUser.getFullName());

// const vasyaStudent = new Student ({name: "Vasya", surname: "Petrov", year: 2020});

// console.log(vasyaStudent.name);
// console.log(vasyaStudent.year);
// console.log(vasyaStudent.getFullName());
// console.log(vasyaStudent.getCourse());