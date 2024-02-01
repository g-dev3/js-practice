const accountId = 144553;
let accountEmail = "gdev@gmail.com";
var accPassword = "12345";
accoutCity = "Jodhpur";
let accountStates;

// accountId =2; // not allowed

accountEmail = "hello@gmail.com";
accPassword= "123232";
accoutCity = "Bangalore";

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accPassword,accoutCity,accountStates]);