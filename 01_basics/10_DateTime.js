let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date("2025-10-01")
let myCreatedDate = new Date("01-10-2025")
console.log(myCreatedDate.toLocaleString());


let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMinutes());


// `${newDate.getDay()}`

newDate.toLocaleString("defaut",{
    weekday : "long",
})

console.log(newDate);




