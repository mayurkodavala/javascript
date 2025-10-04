const marvel_heros = ["thor", "ironmen", "spidermen"]
const dc_heros = ["superman", "flash", "batmen"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("mayur"))
console.log(Array.from("mayur"))
console.log(Array.from({name : "mayur"}))


let Score1 = 100
let Score2 = 200
let Score3 = 300

console.log(Array.of(Score1,Score2,Score3));
