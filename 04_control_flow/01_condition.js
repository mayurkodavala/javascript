/* = oprator assignment /* /*== comparison  === strict comparison*/

// const isUserLoggedIn = true

// <, >, <=, >=, !=, !==, ==, ===

// if(3 === "3") {
//     console.log(true);
    
// }


// const temprature  = 40
// if (temprature < 50) {
//     console.log("wear a t-shirt");
// } else {
//     console.log("wear a jacket");
// }


// const score = 500
// if(score > 400) {
//     const medal = "gold"
//     console.log(`Congratulations! You have won a ${medal} medal.`);
// }


// const balance = 999
// if(balance < 1000) {
//     console.log("you are eligible for a credit card");
// } else {
//     const remainingBalance = 1000 - balance
//     console.log(`You need ${remainingBalance} more to get a credit card`);
// }


// const balance  = 1000
// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance > 950) {
//     console.log("less than 950");
// } else {
//     console.log("less than 1200"); 
// }


const isUserLoggedIn = true 
const DebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && DebitCard && 2 == 2) {
    console.log("you are eligible to buy");
}

if(loggedInFromGoogle || loggedInFromEmail || isUserLoggedIn) {
    console.log("user logged in");
}