// exercise 1

const email = "ishovdra4@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

// exercise 2

const a = "My";
const b = "name";
const c = "is";
const fullName = `${a} ${b} ${c} Viktor`;
console.log(fullName);

// exercise 3

const userName = "Ірина";
const payment = 300;
const thanks = `Дякуємо ${userName}! До сплати ${payment} гривень`;
console.log(thanks);

// exercise 4

const myName = "Iryna";
console.log(myName.replace("I", "@"));

// exercise 5

const nickName = "Iryna Shovdra";
console.log(nickName.indexOf(" "));

// exercise 6

const str = "Ваш баланс поповнено на 1";
console.log(str.padEnd(40, "0"));
console.log(str.length);

// exercise 7

const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

// exercise 8

const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message);

// exercise 9

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice);

const info = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(info);

// exercise 10

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
console.log(courseTopicLength);

const firstElement = courseTopic[0];
console.log(firstElement);

const lastElement = courseTopic[courseTopic.length - 1];
console.log(lastElement);

// const firstElement = courseTopic.startsWith("J");
// console.log(firstElement);

// const lastElement = courseTopic.endsWith("s");
// console.log(lastElement);

// exercise 11

const string = "I am studying JavaScript";
console.log(string.length);
const length = prompt("Введіть число");
const substring = string.slice(0, length);
console.log(substring);
