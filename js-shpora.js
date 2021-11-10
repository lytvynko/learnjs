// Условия
// 1
let a = 6;
switch (a) {
  case 6: 
    console.log('true');
    break;
  case 8:
    console.log('false');
    break;
  default:
    console.log('not this time');
    break;
}
// 2
if (a < 6) {
  console.log('мало');
} else if (a > 6) {
  console.log('много');
} else {
  console.log('как раз');
}

// Циклы
// 1 - цикл повторяется пока а не станет 55
let a = 50;
while (a < 55) {
  console.log(a);
  a++;
}

//2 - то же самое
let a = 50;
do {
  console.log(a);
  a++;
} while (a < 55);

//3 - чаще всего. i - количество повторений цикла (от 0 до 8 - 8 раз). В цикле - выводим а и увеличиваем на 1
let a = 50;
for (let i = 0; i < 6; i++) {
  console.log (a);
  a++;
  
}
//break; - остановить цикл.
//continue; - прервать цикл на конкретном значении и запустить дальше.

//Function declaration - существует до вызова (как var)
function calc (a, b) {
  return (a + b);
}
calc ();

//function expression - существует как переменная, только с момента создания
let calc = function (a, b) {
  return (a + b)
}
calc ();

//Стрелочная функция
let calc = (a, b) => {
  return (a + b);
}

//свойства
.length //выдает длину стоки или количество элементов массива

//методы
.toUpperCase() //переводит текст в верхний регистр
.toLowerCase() //в нижний регистр
str.indexOf('word') //выдаст с какого символа в переменной str стоит слово word (нумерация с нуля)
//можно использовать для поиска в строке. Если нет в строке, то метод выдаст -1
let str = "Hello World";
console.log(str.slice(6, 11)); //выведет World. Slice() - отрезает нужную часть строки. 
//2 аргумента - элемент с которого вырезать и элемент перед которым отрезать). 
//если указать один аргумент, то строка будет отрезаться с этого элемента и до конца.
.substring() //то же самое
.substr(6, 5) //вырежет 5 символов после 6 символа.

Math.round(num) //округлит до целого число в переменной num
parseInt(num) //возьмет из переменной num только числовое значение

let num = "12.2px";
console.log(parseInt(num)); // вернет 12. 

parseFloat(num) // то же самое, только вернет 12.2

//Перебрать объект
let options = {
  name: 'John',
  width: 1024,
  colors: {
    border: 'black',
    bg: 'white'
  }
}

for (let key in options) {
  if (typeof(options[key]) === 'object') { //перебираем свойства встроенного объекта colors
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
    }
  } else {console.log(`Свойство ${key} имеет значение ${options[key]}`);}
  
}

количество пар ключ-значение объекта

Object.keys(options) //выдаст все ключи объекта options в массиве
Object.keys(options).length //выдаст количество элементов получившегося массива

//Например
let options = {
  name: 'John',
  width: 1024,
  colors: {
    border: 'black',
    bg: 'white'
  }
}
console.log(`В объекте options ${Object.keys(options).length} элементов`);

//Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);

//Массивы
.pop() //удаляет последний элемент массива
.push(10) //добавит 10 в конец массива

//Перебрать массив

let arr = [1, 2, 3, 6, 8];
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//или
for(value of arr) {
  console.log(value);
}
//или лучше
const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) { //item - элемент массива, i - номер по порядку, arr - ссылка на перебираемый массив;
  console.log(`${i}: ${item} в массиве ${arr}`)
});

//split - делает массив из строки, если знаем разделитель
let str = "fcs, 232, ve, 4343";
let arr = str.split(', ');
console.log(arr);

arr.join(', ') - строку из массива
arr.sort() - отсортирует строку в алфавитном порядке, а цифры: 10, 2, 34, 5...

//отсортировать числа:
let arr = [11, 4, 5, 3, 66, 23];
console.log(arr.sort(sortNumbers));
function sortNumbers(a, b) {
  return a - b; //по возрастанию и b - a - по убыванию;
}

//псевдомассив - структура массива, но к нему нельзя применять методы.

//Скопировать объект
let obj = { //создаем объект
  'котя': 'глупенькая',
  'филиус': 'котелюбилиус'
}

function copy(mainObj) { //функци для копирования 
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
let newObj = copy(obj);
newObj['котя'] = 'хорошая';
console.log(obj);
console.log(newObj);

//ИЛИ

const clone = Object.assign({}, add);

//или

newObj = {...obj}; //только в ES9

// поместить один объект в другой
const numbers = {
        a: 4,
        b: 6
      },
      add = {
        c: 7,
        d: 8
      }
console.log(Object.assign(numbers, add)); //Поместили обект add в объект numbers

//Так же можно сделать и копию
const clone = Object.assign({}, add);
console.log(clone);

//Скопировать массив
const oldArr = ['a', 'b', 'c'],
      newArr = oldArr.slice();
newArr[1] = 3;      
console.log(oldArr);
console.log(newArr);      

//SPREAD-оператор ... - объединяет массивы и можно добавлять другие данные
const video = ['youtube', 'vimeo', 'rutube'],
      platform = ['wordpress', 'joomla', 'drupal'],
      internet = [...video, ...platform];
console.log(internet);

//прототипирование
let soldier = {
  health: 400,
  armor: 200
};
let john = {
  health: 100
}
//john.__proto__ = soldier; //устарело;
Object.setPrototypeOf(john, soldier); //так надо. теперь soldier - прототип для john

john.armor = 1000;
console.log(john);

