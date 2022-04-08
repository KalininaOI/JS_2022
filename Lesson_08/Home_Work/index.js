// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. 
// Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// let startTimer = 60;

// const timer = (end) => {
//   --startTimer;
//   if (startTimer > end) {
//     console.log(end);
//     setTimeout(() => timer(end), 1000);
//   } else {
//     console.log(`работа таймера завершена на ${startTimer} сек`);
//   }
// };

// timer(50);

// 2. Что выведет функция?

// function f() {
//   alert(this);
// }
 
// let user = {
//   g: f.bind(null),
// };
 
// user.g(); // по идее, должна вывести null, т.к. в функции мы привязали this к null (bind) 
// // но почему-то выводит [Window Object]

// 3. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//   alert(this.name);
// }
 
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
 
// f();
//  нет, не можем выведет первый привязанный контекст - Вася

// 4. В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
//   alert( this.name );
//  }
//  sayHi.test = 5;
 
//  let bound = sayHi.bind({
//   name: "Вася"
//  });

//undefined.

//Результатом работы bind является другой объект. У него уже нет свойства test.

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password === "rockstar") ok();  
//     else fail();
// }

// let user = {
//   name: 'Вася',


//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // нужно привязать контекст, который потеряли функции

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//  let password = prompt("Password?", '');
//  if (password === "rockstar") ok();
//  else fail();
// }

// let user = {
//  name: 'John',

//  login(result) {
//    alert( this.name + (result ? ' logged in' : ' failed to log in') );
//  }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));


// 7. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.
//  Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.

// const elem = {value: 'Привет'}
 
// function func(surname, name) {
//   alert(this.value + ', ' + surname + ' ' + name);
// }
 
// let funcElem = func.bind(elem)
//  //Тут напишите конструкцию с bind()
 
// funcElem('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// funcElem('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


// 8. Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c

// const sum = (a) => {
//   return (b) => {
//     return (c) => {
//       return a+b+c;
//     };
//   };
// }

// console.log(sum(45)(5)(50));
