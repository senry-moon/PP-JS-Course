
const gameBotFunction = function () {
    
    const randomGenerate = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    let mysteryNumber = randomGenerate(1, 100);
    
    let tries = 3;
    
    function checkIsNumber(value) {
        const parsed = parseFloat(value);
        return !isNaN(parsed) && isFinite(parsed);
    }
    
    const getResult = function () {
        let userAnswer = prompt('Угадайте число от 0 до 100');
        
        if (userAnswer === null) {
            alert('Вы завершили игру');
            return;
        }
        
        while (!checkIsNumber(userAnswer) || userAnswer === null || userAnswer !== userAnswer.trim()) {
            userAnswer = prompt('Угадайте число от 0 до 100');
            
            if (userAnswer === null) {
                alert('Вы завершили игру');
                return;
            }
        }
        
        let answerNum = parseFloat(userAnswer);
        
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
    
    getResult();
    
};

gameBotFunction();
