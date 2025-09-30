// Primitive 7
//  String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 101
const scoreGame = 101.5
const LogedIn = false
const outsideTemp = null
let emailId;
const id = Symbol('123')
const anotherId = Symbol('1234')

// console.log(id === anotherId);

const BigNumber = 1814848874484458n

console.log(typeof BigNumber);


//Refence (non primitive)
// Array,Objects,Functions

const game = ["cricket", "khokho", "rummning"];

const Myobj = {
    name : "mayur",
    age : 19

}

const myFunction = function() {
    console.log("hello world");
}


console.log(typeof myFunction);


