const user = {
  username: "Gopal",
  UserLoged: 8,
  IsLOgggedIn: true,
  getUserDetail: function () {
    // console.log("Got user detail from database");
    console.log(`username: ${this.username}`);
  },
};

// console.log(user.getUserDetail());

function User(username, UserLoged, IsLOgggedIn) {
  this.username = username;
  this.UserLoged = UserLoged;
  this.IsLOgggedIn = IsLOgggedIn;

  this.greeting = ()=>{return `Welcome ${this.username}`}

  return this;
}

const userOne = new User("Gopal", 8, false);
const userTwo = new User("XYZ", 20, true);
// console.log(userOne);

// console.log(userOne.greeting())
console.log(userTwo.greeting())


