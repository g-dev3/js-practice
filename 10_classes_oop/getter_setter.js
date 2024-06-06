class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email = value
  }
  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    return this._password = value;
  }
}

const hitesh = new User("g@dev.com", "abc");

console.log(hitesh.password);
