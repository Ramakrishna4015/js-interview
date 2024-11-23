/*let array = [1,2,5,7,8,9]
console.log("ORIGINAL ARRAY IS "+ [array]);
array.push(11)
console.log(array)
array.unshift(0);
console.log(array);
array.pop();
console.log(array);
array.shift()
console.log(array);
array.slice()
console.log(array.slice());
console.log(...array);
let [rk, ,krk] = ['human','mansihi','hello']
console.log(krk);
let array2 = [10,11,12,13]
let array3 = [14,15,16,17]
let merged = array.concat(array2,array3)
console.log(merged);
console.log(array3.fill('pink'));
console.log(array3.indexOf('pink'));
let numbers = [12,25,45,11,2,74]
console.log(numbers.sort(asceding));
function asceding(a,b){
    return a-b;
}*/


let students = [
    {
       'id': 1,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 2,
       'f_name': 'Ibrahim',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 3,
       'f_name': 'Rubi',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 4,
       'f_name': 'Zack',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
 ];


let firstStudent = students[0];
console.log(firstStudent.f_name);

const studentWithId2 = students.find((student) => student.id === 2);
console.log(studentWithId2.courses); 

students.forEach(function(stu){
    console.log(stu.f_name+"is taking these cources "+stu.courses.join(','));
    
})///hanges the original array

students.map((student)=>{    console.log((student['f_name']) +" "+ (student['l_name']))});
    

let massage = 'good morning'; 
function greeting(name){
   return massage +' hello my name is '+name
}
console.log(greeting('ramakrishna'));

let count = 0;
function increment(){
   count++;
   return count;
}
console.log(increment());
console.log(increment());
function counter(count){
   return count+1;
}
console.log(counter(1));


////call
const person={
   firstName :"kodimoju",
   lastName :"ramakrishna"
}
function greet(greeting,puctuation){
      console.log(greeting +" " + this.firstName + " "+this.lastName + puctuation );
      
}
greet.call(person,'hello','!');
////apply







