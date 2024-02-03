// for of

// ["","",""]
// [{},{}{}]

/*
const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}
*/
const greeting = "hello world";
/*

for(const grit of greeting){
    console.log(`Each char is ${grit}`)
}
*/

/*
for(let i = 0; i<greeting.length; i++){
    console.log(`Each char is ${greeting[i]}`)
}
*/

// Maps

const map = new Map();
map.set('IN',"india");
map.set('USA',"United states of America");
map.set('UAE',"United Arab of Emirates");
map.set('IN',"india");


// console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
}

const myObject = {
    game1:'NFS',
    game2:'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);   
// }

