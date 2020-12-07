"use strict";

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const randomNumber = Math.floor(Math.random() * 100) + 1;

function guessTheNumber() {
  
  let number = +prompt('Угадай число от 1 до 100.');
  
  if (number > randomNumber) {
    alert('Загаданное число меньше');
    guessTheNumber();
  } if (number < randomNumber) {
  alert('Загаданноое число больше');
  guessTheNumber();
  } if (!isNumber(number)) {
    alert('Введите число!');
    guessTheNumber();
  } if (number === false) {
    alert('Игра окончена');
    
  } if (number === randomNumber) {
    alert('Поздравляю, вы угадали!');
  }
  return number;
}

guessTheNumber();

