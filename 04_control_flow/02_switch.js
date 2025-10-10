// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 12
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;

    default:
        console.log("invalid month");
        break;           

}

// Falsy values
// false
// 0
// ""
// BigInt(0)
// null
// undefined
// NaN (not a number)


// Truthy values
// true
// "mayur"
// []
// {}
// 42
// 3.14
// -42
// "false"
// "0"
// " "
// "[]"
// "{}"
// function(){}

//Nullish Coalescing Operator (??) : null or undefined
// let val1;
// // val1 = null ?? "hello"
// // val1 = undefined ?? 15
// // val1 = 0 ?? "hello"
// // val1 = false ?? "hello"
// // val1 = "" ?? "hello"

// // val1 = 7 ?? 10
// console.log(val1);



// Optional Chaining (?.)
// const user = {
//     firstName : "mayur",
//     address : {houseNumber : 123}
// }

// console.log(user.address.houseNumber);
// console.log(user?.address?.houseNumber);

//Ternary Operator
// condition ? true : false

const IceCream = 100
IceCream <= 50 ? console.log("yes, i will buy ice-cream") : console.log("no, i will not buy ice-cream");
