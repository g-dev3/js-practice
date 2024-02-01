// Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

let myCreateDate = new Date("2003-01-06");

// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

let newDate = new Date();

// console.log(newDate.getDay());

// console.log(`Today is ${newDate.toString()}. and date is ${newDate.getDate()}`)

newDate.toLocaleString('default',{
    weekday: "long"
})