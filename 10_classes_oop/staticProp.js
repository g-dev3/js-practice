class User {
  constructor(username) {
    this.username = username;
  }

  LogMe() {
    console.log(`UserName is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hit = new User("hitesh");

// console.log(hit.createId());

class Teacher extends User {
  constructor(username,email) {
    super(username)
    this.email = email;
  }
}


const newUser = new Teacher("Gopal","g@dev.com")

newUser.LogMe()

console.log(newUser.createId());