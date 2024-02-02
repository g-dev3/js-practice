// singleton

const tinderUser = new Object();

// const tinderUser = {};

tinderUser.id= "gdev3";
tinderUser.name= "G Developer";
tinderUser.isLoggedIn= false;


// console.log(tinderUser);

const regularUser = {
    email:"gdev@gmail.com",
    fullname:{
        userfullname:{
            firstname:"G",
            lastname:"Developer"   
    }
        
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}


// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"gcom@gmail.com"
    },
    {
        id:2,
        email:"gcom2@gmail.com"
    },
    {
        id:3,
        email:"gcom3@gmail.com"
    },
    {
        id:4,
        email:"gcom4@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js in hindi",
    price:999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor}= course // code destructure

console.log(instructor);

