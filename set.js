setTimeout(function(){
    console.log("hello after some time");
    
})

let intervel  = setInterval(function(){
    console.log("repeats after every intervel");
    
},1000)

setTimeout(()=>{
    
    clearInterval(intervel);
    
},5000)