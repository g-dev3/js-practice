/*
const PromiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

PromiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async resolve two");
});

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"Gopal",email:"G@dev.com"})
    }, 1000);
})

PromiseThree.then((user)=>{
    console.log(user.email);
})

const PromiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const Error = false;
    if (!Error) {
      resolve({ username: "Gopal", Passwork: "123" });
    } else {
      console.log("ERROR: Something went wrong");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "Javascript", Password: "123" });
    } else {
      reject("Error : Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
    try {
        const responce = await PromiseFive;
        console.log(responce);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// https://api.github.com/users/g-dev3

async function getAllUsers(){
    try {
       const responce = await fetch("https://api.github.com/users/g-dev3")
       const data = await responce.json()
       console.log(data);

    } catch (error) {
        console.log("E : ", error);
    }
}

getAllUsers()
*/
fetch("https://api.github.com/users/g-dev3")
.then((responce)=>{
      return responce.json()
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})