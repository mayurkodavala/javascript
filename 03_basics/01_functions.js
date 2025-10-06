function saymyName() {
    console.log("m");
    console.log("a");
    console.log("y");
    console.log("u");
    console.log("r");
}

// saymyName();

// function addTwoNum(num1,num2) {
//    console.log(num1 + num2);
// }

function addTwoNum(num1,num2) {
//    let result = num1 + num2
//    return result

    return num1 + num2
}
const result = addTwoNum(4,6) //arguments
// console.log(result);

function loginUserMassage(username = "anuj") {
    if(username === undefined) {
        console.log("enter your username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMassage("mayur"));
// console.log(loginUserMassage());

function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username : "mayur",
    price : 80
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    username : "anuj",
    price : 85
})

const mynewArr = [200,400,500,600]
function returnSecoundValue(getArray) {
    return getArray[1]
}
console.log(returnSecoundValue(mynewArr));



