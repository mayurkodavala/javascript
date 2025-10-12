//For Of loop

// const arr = [1,2,3,4,5]
//     for (const element of arr) {
//         console.log(element);
        
//     }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }



//Map

// const map = new Map()
// map.set("IN", "India")
// map.set("US", "United State of America")

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
    
// }



// const myObj = {
//     game1 : "FreeFire",
//     game2 : "BGMI"
// }
// for (const [key,value] of myObj) {
//     console.log();
//     console.log(key, ':-', value);
// }

//For In Loop

// const myObject = {
//     js : "javascript",
//     cpp : "C++",
//     rb : "ruby",
//     swift : "swift of apple"
// }
// for (const key in myObject) {
//     console.log(`${key} Shorter is for ${myObject[key]}`);
    
// }


// const proggraming = ["js", "css", "java", "py", "cpp"]
// for (const key in proggraming) {
    
//     console.log(proggraming[key]);
// }


// const map = new Map()
// map.set("js", "javascript")
// map.set("py", "python")
// map.set("cpp", "c++")
// map.set("rb", "ruby")

// for (const key in map) {
//     console.log(key);
    
// }


//For Each loop

const coding  = ["js", "css", "java", "py", "cpp"]

// coding.forEach( function (value) {
//     console.log(value);
    
// } )

// coding.forEach( (value)  =>  {
//     console.log(value);
    
// } )

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// } )

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
          languageName : "python",
        languageFileName : "py"
    },
]

mycoding.forEach( (index) => {

    console.log(index.languageName);    
} )