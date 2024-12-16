const riddles = [
    { riddle: "Зимой и летом одним цветом, что это?", answer: "елка" },
    { riddle: "Кто никуда никогда не опаздывает и всегда приходит вовремя?", answer: "Новый год" },
    { riddle: "После осени пришла\nИ сугробы намела.", answer: "зима" }
  ];
  
  let currentRiddleIndex = 0;
  let correctAnswers = 0;
  let correctAnswersElement = document.getElementById('correctAnswers');
  let riddleElement = document.getElementById('riddle');
  let answerInput = document.getElementById('answerInput');
  
  
  function displayRiddle() {
      correctAnswersElement.textContent = correctAnswers;
      riddleElement.textContent = riddles[currentRiddleIndex].riddle;
      answerInput.value = ''; 
  }
  
  function checkAnswer() {
    let answer = answerInput.value.toLowerCase();
    if (answer === riddles[currentRiddleIndex].answer.toLowerCase()) {
      correctAnswers++;
    }
    currentRiddleIndex++;
    
    if (currentRiddleIndex < riddles.length) {
      displayRiddle();
    } else {
      alert(`Вы отгадали ${correctAnswers} загадок из ${riddles.length}`);
    }
  }
  
  displayRiddle();
//Задание 2
  let counter = 1;
const counterDisplay = document.getElementById('counter');

function incrementCounter() {
  if (counter < 10) {
    counter++;
    counterDisplay.textContent = counter;
  }
}


//Задание 3
const feastResult = document.getElementById('feastResult');

function startFeast() {
  let answer;
  do {
    answer = parseInt(prompt("Еще по одной?"));
    if (!isNaN(answer)) {
      if (answer !== 1) {
        feastResult.textContent += "Еще по одной?\n";
      }
    }
  } while (answer !== 1);
  feastResult.textContent += "Застолье окончено!";
}


//Задание 4
const numberInput = document.getElementById('number');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value);
  if (isNaN(number) || number < 0) {
    resultParagraph.textContent = "Пожалуйста, введите неотрицательное целое число.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  resultParagraph.textContent = `Факториал ${number} равен: ${factorial}`;
});


//Задание 5
const surnameInput = document.getElementById('surname');
const checkPalindromeButton = document.getElementById('checkPalindrome');
const palindromeResult = document.getElementById('palindromeResult');

checkPalindromeButton.addEventListener('click', () => {
  const surname = surnameInput.value.toLowerCase().replace(/[^a-zа-яё]/g, '');
  if (surname === "") {
    palindromeResult.textContent = "Пожалуйста, введите фамилию.";
    return;
  }

  const reversedSurname = surname.split("").reverse().join("");
  if (surname === reversedSurname) {
    palindromeResult.textContent = `Фамилия "${surnameInput.value}" — палиндром!`;
  } else {
    palindromeResult.textContent = `Фамилия "${surnameInput.value}" — не палиндром.`;
  }
});

//Задание 6 
document.getElementById('findPrimes').addEventListener('click', task6);

function task6() {
  const limit = parseInt(document.getElementById('limit').value);
  if (isNaN(limit) || limit < 2) {
    document.getElementById('primesResult').textContent = "Пожалуйста, введите целое число больше 1.";
    return;
  }

  const primes = [];
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  document.getElementById('primesResult').textContent = `Простые числа от 2 до ${limit}: ${primes.join(', ')}`;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

//Доп.Задание 
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const messageParagraph = document.getElementById('message');

const secretNumber = Math.floor(Math.random() * 100) + 1; // Загадываем число от 1 до 100
let gameOver = false;

checkButton.addEventListener('click', () => {
  if (gameOver) return;

  const guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    messageParagraph.textContent = "Пожалуйста, введите число.";
    return;
  }

  if (guess === secretNumber) {
    messageParagraph.textContent = `Поздравляю! Вы угадали число ${secretNumber}!`;
    gameOver = true;
  } else if (guess < secretNumber) {
    messageParagraph.textContent = "Слишком мало! Попробуйте ещё раз.";
  } else {
    messageParagraph.textContent = "Слишком много! Попробуйте ещё раз.";
  }
});