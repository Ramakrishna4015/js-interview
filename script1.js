///keys ,values,entries,freeze
let data = {
    name:'rk',
    age:30
}
console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));
// console.log(Object.freeze(data));//will make the object immutable no addtoin /modification
data.name = "krk";
data.num = 2015;
console.log(Object.values(data));
console.log(data);
//seal
console.log(Object.seal(data));//can upadte but no new addition

data.role= "student";
data.gender = "male"
data.age= 2024
console.log(data);

///POLYFILL
const numbers = [1,3,5,7,89]
if(numbers.includes(89)){
    console.log("good");
    
}
else{
    console.log("not good");
    
}

if(!Array.prototype.includes){
        Array.prototype.includes = function(value){
            return this.some((element)=> element===value)
        }
}

if(numbers.includes(8.9)){
    console.log("good");
    
}
else{
    console.log("not good");
    
}





