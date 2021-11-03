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