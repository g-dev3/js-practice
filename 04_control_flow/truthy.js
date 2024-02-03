const userEmail = "g@gmail.com";

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

// falsy values

// false, 0,-0,BigInt 0n, "",null, undefined,NaN

// truthy values

// "0", 'false', " ", [],{}, function(){}

const usermail = [];

if(usermail.length===0){
    console.log("usermail is empty");
}

const emptyobj = {};

if(Object.keys(emptyobj).length===0){
    console.log("empty object");
}

// Nullish Coalescing Operator (??) null undefined

let val1;

// val1= 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniry Operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log('less than 80') : console.log("more than 80")