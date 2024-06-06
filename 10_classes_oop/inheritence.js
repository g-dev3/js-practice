class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User Name is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse(){
    console.log(`A New course was added by ${this.username}`);
  }
}

const chai =new Teacher("chai", "chai@gmail.com","123")
const masalaChai = new User("Gopal")

chai.addCourse()
chai.logMe()
masalaChai.logMe()
