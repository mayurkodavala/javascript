const name = "mayur"
const repoCount = 3
// console.log(name + repoCount + " value");
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String ("Mayur-Kodavala")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt("8"));
console.log(gameName.indexOf("M"));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherstring = gameName.slice(2,7)
console.log(anotherstring);

const newStringOne = "  mayur   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://google-com"
console.log(url.replace("-","."));

const str = "my name is mayurkodavala - i am from ahmedabad"
console.log(str.split("-"));
