//Immediately Invoked Function Expressions (iife)

(function coffe() {  //name IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => { //unname IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("mayur")