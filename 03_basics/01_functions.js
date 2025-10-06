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
console.log(loginUserMassage());


 