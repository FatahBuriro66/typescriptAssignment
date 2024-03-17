let fruit1 = 'apple';
let fruit2 = 'banana';

console.log("Is fruit1 == 'apple'? I predict True.");
console.log(fruit1 == 'apple');

console.log("\nIs fruit2 != 'orange'? I predict True.");
console.log(fruit2 != 'orange');

console.log("\nIs fruit1 == fruit2? I predict False.");
console.log(fruit1 == fruit2);

let color1 = 'RED';
let color2 = 'red';

console.log("\nIs color1.toLowerCase() == 'red'? I predict True.");
console.log(color1.toLowerCase() == 'red');

console.log("\nIs color2.toLowerCase() == 'red'? I predict True.");
console.log(color2.toLowerCase() == 'red');

// Numerical tests
let num1 = 10;
let num2 = 20;

console.log("\nIs num1 < num2? I predict True.");
console.log(num1 < num2);

console.log("\nIs num1 >= num2? I predict False.");
console.log(num1 >= num2);

console.log("\nIs num1 + num2 == 30? I predict True.");
console.log(num1 + num2 == 30);

let isSunny = true;
let isWeekend = false;

console.log("\nIs it sunny and not the weekend? I predict True.");
console.log(isSunny && !isWeekend);

console.log("\nIs it sunny or the weekend? I predict True.");
console.log(isSunny || isWeekend);

let animals: string[] = ['lion', 'elephant', 'tiger'];

console.log("\nIs 'lion' in the animals array? I predict True.");
console.log(animals.includes('lion'));

console.log("\nIs 'zebra' not in the animals array? I predict True.");
console.log(!animals.includes('zebra'));
