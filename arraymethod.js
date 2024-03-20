//reverse number with array method join shashi conflict

function reversenum(num)
{
    return parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num);
}

console.log("The reversed number for 1234 using funtion : ", reversenum(1234))


const word="Type",words="screen"

const secondword="Script";

const concatword = word.concat(secondword);

console.log(concatword);

//array meethods at(), push(), pop()

const hobbies = ["Sleeping", "Riding","painting","cooking"]

let hobbyat = hobbies.at(4);
console.log("At function : ", hobbyat);

hobbies.push("Music");
console.log("Push function :", hobbies);

hobbies.pop();
console.log("Pop function : ", hobbies);

//array methods for search

const vehicles = ["Bike","Car","Lorry","Van","Bike","Bus"]

let indexvalue = vehicles.indexOf("Van");
console.log("Index value :", indexvalue);

let lastvalue = vehicles.lastIndexOf("Bike");
console.log("Last index :", lastvalue);

let findvalue = vehicles.includes("Car");
console.log("Includes Function : ", findvalue);

//array methods sorting

vehicles.sort();
console.log("Sorting :", vehicles);

//To sort - will create new array and keep the original unchanged
vehicles.toSorted();
console.log("To sort function :", vehicles);

vehicles.reverse();
console.log("Reverse :", vehicles);

//To reverse - will create new array and keep the original unchanged

vehicles.toReversed();
console.log("To Reverse function :", vehicles);