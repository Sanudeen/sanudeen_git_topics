// for(let i=0;i<10;i++){
// console.log(i);
// }
const check = {adam:32,brian:40,charlie:58,dave:89,envy:12};
let minval = 40;
let maxval = 60;
for (let key in check){
    console.log(key);
    if(maxval>=check[key]&&check[key]>=minval ){// added if condition logic
        console.log(key);
    }
}

let fname="Airbnb"
const check2 = [10,9,8,7,6];
for (let key in check2){
    console.log(key,check2[key]);
    }
for (let key in check){
    console.log(key,check[key]);
       }
for (let key of check2){
        console.log(key);
        }
console.log("this is 11th commit")
for (let key of check2){
    console.log(key);
    }