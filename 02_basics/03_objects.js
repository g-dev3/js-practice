// singleton
// Object.create

// object literals

const mysym = Symbol("key1");



const JsUser = {
    name:"Gdev",
    "full name":"G Developer",
    [mysym]:"mykey1",
    age: 21,
    location:"Jodhpur",
    email:"gdev@gmail.com",
    isLoggin:false,
    lastLoginDate: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "g-developer@gmail.com";
// console.log(JsUser.email);
// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());