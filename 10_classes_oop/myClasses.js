// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}abc`
  }
  changeUserName(){
    return `${this.username.toUpperCase()}`
  }
}


const chai = new User("Gopal","g@dev.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the sence

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}123`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("chai", "tea@gmail.com", "abcd");

console.log(tea.encryptPassword());

console.log(tea.changeUserName());
