function SetUserName(username){
    this.username = username
    // console.log("called");
}


function createUser(username,email,password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const User = new createUser("Gopal","g@dev.com","1234")

console.log(User);