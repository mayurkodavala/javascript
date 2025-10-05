//object destructuring

const course = {
    coursename : "JavaScript",
    price : 299,
    author : "John Doe"
}

const {coursename : name} = course
console.log(name);

// const navbar = ({company}) => {

// }
// navbar(company = "mayur")

//object API

// {
//     "name" : "mayur",
//     "age" : 22,
//     "company" : "neog",
//     "course" : "full stack"
// }