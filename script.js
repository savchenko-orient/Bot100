"use strict";

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const randomNumber = Math.floor(Math.random() * 100) + 1;

function guessTheNumber() {
  
  let number = prompt('Угадай число от 1 до 100.');
  
  if (Number(number) === randomNumber) {
    alert('Поздравляю, вы угадали!');
  } else if (number === null) {
    alert('Игра окончена');
  } else if (!isNumber(number)) {
    alert('Введите число!');
    guessTheNumber();
  } else if (number === ' ') {
    alert('Игра окончена');
  } else if (number > randomNumber) {
    alert('Загаданное число меньше');
    guessTheNumber();
  } else if (number < randomNumber) {
  alert('Загаданноое число больше');
  guessTheNumber();
  }  
  return number;
}

guessTheNumber();

