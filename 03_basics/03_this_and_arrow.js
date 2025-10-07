const user = {
    username : "mayur",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`)
        // console.log(this);
        
    }
    
}
// user.welcomeMessage()
// user.username = "anuj"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "mayur"
//     console.log(this.username);
    
// }
// one()

const one = () => {
    let username = "mayur"
    console.log(this);
    
}
// one()

// const addTwo = (num1,num2) => {  //explisit 
//     return num1 + num2
// }
// console.log(addTwo(5,5));

// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)  //impisit return

const addTwo = (num1,num2) => ({username : "mayur"})
console.log(addTwo(5,5));
