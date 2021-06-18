// ----------------------------- 1 task

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// ---------------------------- 2 task

// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// ----------------------------- 3 task

// Объяви функцию - конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
//     model - модель автомобиля.
//         price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// new Car('Audi', 'Q3', 36000);
// new Car('BMW', 'X5', 58900);
// new Car('Nissan', 'Murano', 31700);

// ---------------------------- 4 task

// Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price.Деструктуризируй объект в сигнатуре(подписи) функции.

// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// ----------------------------- 5 task

// Добавь в свойство prototype функции - конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//     changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

