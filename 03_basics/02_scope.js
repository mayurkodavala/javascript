// var c = 300

let a = 300
//{} scope

if(true) {
    let a = 10
    const b = 20
    // console.log("INNER : " ,a);
    
    // var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "mayur"
    function two() {
        const website = "youtube"
        console.log(username);
        console.log(website);
    // two()
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "mayur"
    if (username === "mayur") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++ Intresing +++++++++

function addOne(num) {
    return num + 1
}

// addOne(5)
console.log(addOne(5));

const addTwo = function(num) {
    return num + 2
}
// addTwo(5)
console.log(addTwo(5));

