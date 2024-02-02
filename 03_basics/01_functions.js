function sayMyName (){
    console.log("g");
    console.log("d");
    console.log("e");
    console.log("v");
    console.log("e");
    console.log("l");
    console.log("o");
    console.log("p");
    console.log("e");
    console.log("r");
}
// sayMyName();

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

function addTwoNumbers(num1,num2){
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}
// addTwoNumbers(3,4); // reference and exacue exacution

const result = addTwoNumbers(6,3);

// console.log("result",result);

function loginUsermessage(username = "gdev"){
    // if(username===undefined){
    //     console.log("please enter a userName");
    //     return

    // }
    if(!username){
        console.log("please enter a userName");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUsermessage("G Dev"));
// console.log(loginUsermessage("g developer"));



function calculateCartPrice(val1,val2, ...num1){
    return num1 
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "gdev",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject({username:"gdev",price:399});

const myNewArray = [200,400,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));