


// Lesson_#3

let titleProject = 'Оценка стоимости';
let screensValue = 'Шаблонные, с уникальным дизайном, с анимациями';
let screensPrice = 14999;
let percentage = 20;
let fullPrice = 300000;
let responsive = true;

console.log(titleProject, screensValue, screensPrice, percentage, fullPrice, responsive);


// Lesson_#4

titleProject = prompt('Название проекта?');
screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
responsive = confirm('Нужен ли респонсивный сайт?');

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

fullPrice = screensPrice + servicePrice1 + servicePrice2;

let percentForClient = 15;
let discount = fullPrice * percentForClient / 100;
let servicePercentPrice = fullPrice - discount;


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

alert(`Итоговая цена для клиента после скидки: ${servicePercentPrice.toLocaleString('ru-RU')}`);



// Lesson_#5

// console.log('=== Начало Lesson_#5 ===');

    // Task 1. Создай / Объяви функцию getAllServicePrices с помощью метода "function expression".


    let getAllServicePrices = function () {
        return servicePrice1 + servicePrice2;
    };

    let allServicePrices = getAllServicePrices();

    console.log('Стоимость всех дополнительных услуг:', allServicePrices);


    // Task 2. Создай функцию getFullPrice с помощью метода "function declaration".


    function getFullPrice () {
        return allServicePrices + screensPrice;
    };

    let fullPriceResult = getFullPrice();
    console.log('Стоимость всего проекта:', fullPriceResult);


    /* Task 3. Создай функцию getTitle. Функция изменяет название проекта(titleProject), 
    переводит первый символ в верхний регистр(делает заглавной), а остальные в нижний регистр(делает маленькими) 
    и возвращает отредактированное название проекта (titleProject).  */

    let getTitle = function () {
        const normalizedTitle = titleProject.trim();
        const firstLetter = normalizedTitle.charAt(0).toUpperCase();
        const restOfTitle = normalizedTitle.slice(1).toLowerCase();

        titleProject = firstLetter + restOfTitle;
        return titleProject;
    };

    const formattedTitle = getTitle();
    console.log('Название проекта:', formattedTitle);


    /* Task 4. Создай функцию getServicePercentPrices.
Функция возвращает итоговую стоимость за вычетом процента подрядчику.

Результат функции запиши в переменную servicePercentPrice  */

    let getServicePercentPrices = function () {
        
        servicePercentPrice = fullPrice - discount;
        
        return servicePercentPrice;
    };

    servicePercentPrice = getServicePercentPrices();
    console.log('Стоимость проекта с учётом скидки подрядчику:', servicePercentPrice);


        /* Task 5. Создай функцию getRollbackMessage.
Функция считает и выводит в консоль значение скидки для клиента в зависимости от стоимости проекта.

Программа должна:
- считать стоимость всего проекта
- считать стоимость всех услуг
- считать стоимость проекта с учётом скидки подрядчику
- считать скидку клиента, в зависимости от стоимости проекта и выводить сообщение в консоль

Дополнительно:
- менять регистр символов в названии проекта (Первый символ заглавный, остальные строчные)

Результаты всех операций выведи в консоль.
Ошибок в консоли быть не должно. */

    function getRollbackMessage() {
        if (fullPriceResult > 50000) {
            console.log('Скидка 10%');
        } else if (fullPriceResult > 20000 && fullPriceResult <= 50000) {
            console.log('Сделаем скидку 5%');
        } else if (fullPriceResult > 0 && fullPriceResult <= 20000) {
            console.log('Скидка не предусмотрена');
        }
    }

    getRollbackMessage();

