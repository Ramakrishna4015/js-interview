/*let car = new Promise(function(resolve,reject){
        fuel_fullTank = false;
        if(fuel_fullTank){
            resolve()
        }
        else
        reject()
})
car.then((resolve)=>{
    console.log("full");
    
})
.catch((err)=>{
    console.log("empty")
    
})
    */


/*
let x=Math.random();
console.log(x);



let randomLottery = new Promise((resolve,reject)=>{
    if(Math.random()>=0.5){
        resolve("won")
    }
    else{
        reject("lost")
    }
})
randomLottery.then((response)=>{
    console.log("you won");
    
})
.catch((err)=>{
    console.log("error");
    
})*/
let empty_tank = function(){
    return new Promise(function(resolve,reject){
        resolve("The car doesn't have enough fuel.") })}