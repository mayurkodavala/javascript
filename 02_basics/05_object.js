const tinderUser = new Object()

tinderUser.id = "abc123",
tinderUser.name = "Mayur",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "mayur007@gamil.com",
    fullname : {
        userfullName : {
            FirstName : "mayur",
            lastName : "Kodavala"
        }
    }
}

// console.log(regularUser.fullname.userfullName.FirstName);

const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "a",
    4 : "b",
}
const obj4 = {
    5 : "a",
    6 : "b",
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const user = [
    {
        id : 1,
        email : "mk22gmail.com"
    },
    {
        id : 1,
        email : "mk22gmail.com"
    },
    {
        id : 1,
        email : "mk22gmail.com"
    },
]
user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
