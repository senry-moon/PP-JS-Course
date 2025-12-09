// Задание: Игра "Угадай число"
// Пункт 1: Создание главной функции-обертки

const gameBotFunction = function () {
    // Пункт 2: Функция для генерации случайного числа
    
    const randomGenerate = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    // Пункт 3: Присваиваем результат функции переменной
    let mysteryNumber = randomGenerate(1, 100);
    
    // Пункт 4: Определяем количество попыток для пользователя
    let tries = 3;
    
    // Пункт 5: Функция проверки на число из прошлого ДЗ
    function checkIsNumber(value) {
        const parsed = parseFloat(value);
        return !isNaN(parsed) && isFinite(parsed);
    }
    
    // Пункт 6: Рекурсивная функция для запроса числа у пользователя
    const getResult = function () {
        let userAnswer = prompt('Угадайте число от 0 до 100');
        
        // Пункт 7: Обработка нажатия "Отмена"
        if (userAnswer === null) {
            alert('Вы завершили игру');
            return;
        }
        
        // Пункт 8: Валидация ввода с помощью цикла while
        while (!checkIsNumber(userAnswer) || userAnswer === null || userAnswer !== userAnswer.trim()) {
            userAnswer = prompt('Угадайте число от 0 до 100');
            
            // Если пользователь снова нажал "Отмена" во время валидации
            if (userAnswer === null) {
                alert('Вы завершили игру');
                return;
            }
        }
        
        // Записываем валидное число в переменную answerNum
        let answerNum = parseFloat(userAnswer);
        
        // Пункт 9: Сравнение загаданного числа и ответа пользователя
        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше вашего ответа. Осталось попыток: ' + tries);
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше вашего ответа. Осталось попыток: ' + tries);
        } else if (mysteryNumber === answerNum) {
            alert('Поздравляем! Вы угадали число!');
            
            let playAgain = confirm('Хотите начать игру заново?');
            
            if (playAgain) {
                tries = 3;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                tries = 0;
            }
        }
        
        // Пункт 10: Уменьшение попыток и рекурсивный вызов
        if (tries > 0) {
            tries--;
            getResult();
        } else {
            let tryAgain = confirm('Может, хотите попробовать снова?');
            
            if (tryAgain) {
                tries = 3;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }
    };
    
};
