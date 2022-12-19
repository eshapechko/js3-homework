// Задание 1

// Напишите функцию, которая принимает три числовых аргумента: number, min, max.

// Функция проверяет, находится ли число number в диапазоне чисел от min до max.

// 1 вариант решения: с помощью логического И в условии.

// *2 вариант решения: с помощью логического ИЛИ в условии.

const getNumber = (number, min, max) => {
  return number > min && number < max;
};

console.log(getNumber(11, 25, 30));

const getNumber1 = (number, min, max) => {
  return !(number < min || number > max);
};

// Можно так
// const getNumber1 = (number, min, max) => {
//   if (number < min || number > max) {
//     return false;
//   } else {
//     return true;
//   }
// };

console.log(getNumber1(21, 13, 78));

// Задание 2

// Есть объект с именами и заработными платами инженеров:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.

// Ваше решение должно работать для любого количества ключей в объекте!

const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};
for (let name in engineers) {
  console.log(`Заработная плата ${name} составляет ${engineers[name]} рублей`);
}

// Задание 3

// Создать массив из 5 элементов.

// Используя цикл for, вывести каждый второй элемент массива в консоль.

const num = [10, 20, 30, 40, 50];
for (let i = 1; i < num.length; i = i + 2) {
  console.log(num[i]);
}

// Задание 4

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}

// Задание 5

// Дан массив объектов, например:

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.

let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

for (let item of questions) {
  item.userAnswer = null;
}
console.log(questions);

// Задание 6

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Посчитать и вывести в консоль сумму элементов в массиве.
// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.
// 3) Найти и вывести в консоль максимальное число массива.
// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

let numbers1 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

let summa = 0;

for (let i = 0; i < numbers1.length; i++) {
  summa = summa + numbers1[i];
}
console.log(summa);

let summa1 = 0;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 == 0) {
    summa1 = summa1 + numbers1[i];
    // summa1 += numbers1[i];
  }
}
console.log(summa1);

let max = numbers1[0];
for (let i = 0; i < numbers1.length; i++) {
  if (max < numbers1[i]) {
    max = numbers1[i];
  }
}
console.log(max);

for (let i = 0; i < numbers1.length; i++) {
  if (max == numbers1[i]) {
    console.log(i);
  }
}

// Задание 7

// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

//     Подсказка.Изначально нужно объявить пустой массив - хранилище(например, let newArr = []).Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// Задание 9

// Существует массив пользователей, например:

// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

const users = [
  { name: "Vasya", age: 23 },
  { name: "Olya", age: 12 },
  { name: "Anna", age: 22 },
  { name: "Alex", age: 18 },
  { name: "Valery", age: 8 },
];
for (item of users) {
  if (item.age > 15) {
    console.log(item.name);
  }
}

// Задание 10*

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):

// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

// Вывести этот массив в консоль.

// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// let vegetables1 = [];
// for (i = 0; i < vegetables.length; i++) {
//   vegetables1[i] = { word: vegetables[i], length: vegetables[i].length };
// }
// console.log(vegetables1);

let newVegetables = [];
for (let item of vegetables) {
  newVegetables.push({ word: item, length: item.length });
}
console.log(newVegetables);

for (let object of newVegetables) {
  console.log(`${object.word} - ${object.length}`);
}
