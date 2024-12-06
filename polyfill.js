
// const names =["rk","krk","krishna"]
// function cosolefun(x){
//     console.log(x);
    
// }
// // cosolefun()
// names.forEach(cosolefun)

const numbers = [1,2,3,4,5,6]
console.log(numbers);
// for(i=0;i<numbers.length-1;i++){
//     console.log(numbers[i]*2);
    
// }
// numbers.forEach(function(ele){
//     console.log(ele*2);
    
// })
// numbers.forEach((x)=>{
//     console.log(x);
    

// })

numbers.forEach(function(ele,index,array){
    console.log("index of "+ele*2+ " is "+index +array);
    
})

//callback func=>a function that is passed as parameter to another function is callback
function print(callback){
    callback()
}

function print1(){
    console.log("hello");
    
}
setTimeout(print1,3000)
setTimeout(()=>{
    console.log("hi");
    
},4000)
document.getElementById("btn").addEventListener("click",()=>{
    console.log("hello");
    
})
////for each polyfill
Array.prototype.forEach = function(callback){
    for(var i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}
const arrData = [1,2,3,4,5,6,8,7];
arrData.forEach((ele)=>{
    console.log(ele);
    
})


const num = [11,12,13,15,14,18]
num.forEach((ele)=>{
    console.log(ele);
    
})

Array.prototype.myforeach = function(callback){
    for(var i=0;i<this.length;i++){
        console.log(this[i],i,this);
        
    }
}
num.myforeach((ele)=>{
    console.log(ele);
    
})

const x = [25,58,95,75,44]
Array.prototype.mymap = function(callback){
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
        
    }
    return newArray
}
x.mymap((x)=>{
    console.log(x*2);
    
});
