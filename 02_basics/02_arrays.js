const heros = ["Robin","Tony",];
const normal = ["Kaniya","Jasmin","Robin 2"];

// heros.push(normal);

// console.log(heros);

// const all = heros.concat(normal);

// console.log(all);

const allhero = [...heros,...normal];

// console.log(allhero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_array = another_array.flat(Infinity);

// console.log(real_array);

console.log(Array.isArray("Gdev"));
console.log(Array.from("Gdev"));
console.log(Array.from({name:"Gdev"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));