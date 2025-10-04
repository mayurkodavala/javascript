//Object literals

const mysym = Symbol("key1")

const jsUser = {
    name : "Mayur",
    "full name" : "mayur kodavala",
    [mysym]: "mykey1",
    age : 19,
    location : "Ahmedabad",
    email : "mayurkodavala18@gmail.com",
    isLoggedIn : false,
    lastLogginDays : ["sunday", "monday"]
}
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);
// console.log(jsUser["email"]);


jsUser.email = "mayurkodabala57@hmaol.com"
// Object.freeze(jsUser)
jsUser.email = "mayurkodabala07@hmaol.com"
// console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello js");
}

jsUser.greeting2 = function() {
    console.log(`Hello js,${this.name}`);
}
console.log(jsUser.greeting2());
console.log(jsUser.greeting());
