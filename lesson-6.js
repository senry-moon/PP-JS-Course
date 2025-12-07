


// Переменные _______________________________________________________________________________________________________

let titleProject = 'Оценка стоимости';
let screensValue = 'Шаблонные, с уникальным дизайном, с анимациями';
let screensPrice = 14999;
let percentage = 20;
let fullPrice = 300000;
let responsive = true;

// let service1 = prompt('Какой сервис нужен?');
// let servicePrice1 = +prompt('Сколько это будет стоить?');
// let service2 = prompt('Какой еще сервис тебе нужен?');
// let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

let service1 = '';
let servicePrice1 = 0;
let service2 = '';
let servicePrice2 = 0;

let percentForClient = 15;
let discount = fullPrice * percentForClient / 100;
let servicePercentPrice = fullPrice - discount;






// Функции _______________________________________________________________________________________________________





// Home_Work
let getAllServicePrices = function () {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        let textFromPrompt = prompt('Сколько это будет стоить?');
        
        while (!checkIsNumber(textFromPrompt) || textFromPrompt === null || textFromPrompt !== textFromPrompt.trim()) {
            textFromPrompt = prompt('Сколько это будет стоить?');
        }
        
        sum += parseFloat(textFromPrompt);
    }
    
    return sum;
};

function getFullPrice () {
    return allServicePrices + screensPrice;
};

let getTitle = function () {
    const normalizedTitle = titleProject.trim();
    const firstLetter = normalizedTitle.charAt(0).toUpperCase();
    const restOfTitle = normalizedTitle.slice(1).toLowerCase();

    titleProject = firstLetter + restOfTitle;
    return titleProject;
};

let getServicePercentPrices = function () {
    
    servicePercentPrice = fullPrice - discount;
    
    return servicePercentPrice;
};

function getRollbackMessage() {
    if (fullPriceResult > 50000) {
        console.log('Скидка 10%');
    } else if (fullPriceResult > 20000 && fullPriceResult <= 50000) {
        console.log('Сделаем скидку 5%');
    } else if (fullPriceResult > 0 && fullPriceResult <= 20000) {
        console.log('Скидка не предусмотрена');
    }
}


        // Home_Work 2.5 PRO__Задание 1

        function checkIsNumber(value) {
            const parsed = parseFloat(value);
            return !isNaN(parsed) && isFinite(parsed);
        }

        const asking = function() {
                
                titleProject = prompt('Название проекта?');
                screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
                responsive = confirm('Нужен ли респонсивный сайт?');

            }





// Вызов функций _______________________________________________________________________________________________________

// Home_Work Задание 2: 
let screensPriceInput = prompt('Сколько будет стоить страница?');

while (!checkIsNumber(screensPriceInput) || screensPriceInput === null || screensPriceInput !== screensPriceInput.trim()) {
    screensPriceInput = prompt('Сколько будет стоить страница?');
}

screensPrice = parseFloat(screensPriceInput);

let allServicePrices = getAllServicePrices();

let fullPriceResult = getFullPrice();

const formattedTitle = getTitle();


fullPrice = screensPrice + servicePrice1 + servicePrice2;

servicePercentPrice = Math.round(servicePercentPrice);


if (fullPrice > 50000) {

    console.log('Скидка 10%');
} else if  (fullPrice > 20000 && fullPrice <= 50000) {
    console.log('Сделаем скидку 5%');
} else if  (fullPrice > 0 && fullPrice <= 20000) {
    console.log('Скидка не предусмотрена');    
} else {
    console.log('Что то пошло не так');    
}

getRollbackMessage();



// Вызов функций / Lesson_#6 PRO ____________________


asking();

// allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();

alert(`Итоговая цена для клиента после скидки: ${servicePercentPrice.toLocaleString('ru-RU')}`);

console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(Math.ceil(servicePercentPrice));





