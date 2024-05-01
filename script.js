// Використовувати лише перелічені методи: pop, push, shift, unshift, slice, splice, indexOf, lastIndexOf
const shoppingList = ["milk", "eggs", "bread"];
console.log(shoppingList);

// - Додайте новий елемент в кінець списку 
shoppingList.push('potatoes');
console.log(shoppingList);

// - Видаліть останній елемент зі списку
shoppingList.pop();
console.log(shoppingList);

// - Додайте новий елемент на початок списку
shoppingList.unshift('tomato');
console.log(shoppingList);

// - Видаліть перший елемент зі списку
shoppingList.shift();
console.log(shoppingList);

// - Створіть повну копію списку покупок
const newShoppingList =  shoppingList.slice();
console.log(shoppingList);
console.log('new list:', newShoppingList);

// - Знайдіть індекс  "bread"
console.log(shoppingList.indexOf('bread'));

// - Заменіть "bread" на "muffin"
shoppingList.splice(2, 1, "muffin");
console.log(shoppingList);

// - Знайдіть індекс  "bread" останнє входження
console.log(shoppingList.lastIndexOf('bread'));

// - Після молока додайте "meat", "fish"
shoppingList.splice(1, 0, "meat", "fish");
console.log(shoppingList);

// - Видаліть "eggs"
shoppingList.splice(3, 1);
console.log(shoppingList);