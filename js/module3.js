// ------------ 18 task

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (let product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }

//     }

//     return null;
// };

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// -------------- 19 task

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let result = [];
//     for (let product of products) {
//         let keys = Object.keys(product);
//         for (let key of keys) {
//             if (key === propName) {
//                 result.push(product[key]);
//             }
//         }
//     }
//     return result;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// --------------- 20 task

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let total = 0;
//     for (const product of products) {
//         for (const key in product) {
//             if (product.name === productName)
//                 total = product.price * product.quantity
//         }
//     }
//     return total;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ---------------- 21 task

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня(meanTemperature).Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;


// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// ----------------- 22 task 

// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// ------------------ 23 task

// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

// --------------------- 24 task

// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];


// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ---------------------- 25 task

// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками.Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
// } = forecast;

// ------------------- 26 task

