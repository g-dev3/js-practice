const num = [1,2,3];

const myTotal = num.reduce(function(acc,cur){
    console.log(`acc: ${acc} and cur: ${cur}`);
    console.log(`${acc} + ${cur} = ${acc + cur}`)
    return acc +cur;
},0)

console.log(myTotal);

const number = [1,2,3,4,5,6,7];

const accu = number.reduce((acu,cur)=>(acu+cur),0)

// console.log(accu);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
];

const total = shoppingCart.reduce((accu,item)=>accu + item.price,0);

console.log(total);