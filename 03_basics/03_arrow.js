const user = {
    username: "Gdev",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }

}

// user.welcomeMessage();

user.username= "robin";

// user.welcomeMessage();

// console.log(this);

function chaig(){
    let username = "gdev";
    // console.log(this.username);
}
// chaig();

const chai = function (){
    let username = "gdev";
    console.log(this.username);
}
// chai()

const chaic = ()=> {
    let username = "gdev";
    console.log(this.username);
}
// chaic();

const addTwo = (num1,num2)=>{
    return num1+num2;
} 
// console.log(addTwo(3,4));

// const addTwo2 = (num1,num2)=> num1 + num2;

// const addTwo2 = (num1,num2)=> (num1 + num2);

const addTwo2 = (num1, num2)=> ({username:"gdev"});

// console.log(addTwo2(3,4));

const myArray = [2,5,3,7,8];

// myArray.forEach(function(){});
// myArray.forEach(()=>{});
// myArray.forEach(()=>());