const name="G Developer";
const repoCount= 50;

// console.log(name+repoCount+"value");

console.log(`Hello my name is ${name}, and my repo count is ${repoCount}.`);

const gameName = new String('Gumroad');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(0,4);

console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gdev%20com";


console.log(url.replace('%20','-'));

console.log(url.includes('gdv'));

const brand = "G-developer"

console.log(brand.split('-'));