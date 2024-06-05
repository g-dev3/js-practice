// bong()  => trim extra space and give result

const Username = "   Gopal_Patel    ";

// function method
// console.log(Username.length)

function bong(username) {
  console.log(username.trim().length);
}

bong(Username);

// prototype method
String.prototype.bong = function () {
  console.log(`${this.trim().length}`);
};

Username.bong();
