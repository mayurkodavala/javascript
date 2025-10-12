 let myNums = [1,2,3,4,5]
// let myTotal =  myNums.reduce(function (acc, currval) {
//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc + currval
// }, 0 )

let myTotal = myNums.reduce( (acc,curr) => acc + curr, 0 )
// console.log(myTotal);


let shoppingCart = [

    {
        itemName : "Java course",
        price : 999
    },
    {
        itemName : "WebDev course",
        price : 9999
    },
    {
        itemName : "APPDev course",
        price : 4999
    },
    {
        itemName : "Data Sience course",
        price : 15999
    },

]

let priceToPay = shoppingCart.reduce( (acc,item) =>  (acc + item.price) ,0)
console.log(priceToPay);
