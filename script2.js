const prop = {
    city:"hyd",
    greet(){
        console.log("welcom to "+this.city);
        
    }
}
prop.greet()
console.log(Object.getPrototypeOf(prop));
const personPrototype={
    role :"stdent",
    greet1(){
        console.log("hello");
        
    }
}
const rk = Object.create(personPrototype)
console.log(rk.role);

rk.greet1()

function Student() {
    this.name = 'John';
    this.gender = 'Male';
}
console.log(Student.prototype.name);
const RK = new Student()
console.log(RK.name);
Student.prototype.age = 40;
var studObj1 = new Student();
console.log(studObj1.age);
 // 15

var studObj2 = new Student();
console.log(studObj2.age);


function Student12(){
    this.name = "Saikrishna",
    this.exp= "8"
    }
    Student12.prototype.company = "Hexagon"
    let std1 = new Student12();
    std1.exp = "9"
    let std2 = new Student12();
    std2.exp = "10"
    console.log(std1);
    console.log(std2.company)

    /////////////////GENERATOR FUNDTIONS
    function* generateSequence() {
        yield 1;
        yield 2;
        return 3;
      }
      
      // "generator function" creates "generator object"
      let generator = generateSequence();
      console.log(generator);
      ////////////
      function* myGenerator() {
        console.log("Execution starts...");
        yield "First yield value"; // Pause and return this value
    
        console.log("Execution resumes...");
        yield "Second yield value"; // Pause and return this value
    
        console.log("Execution continues...");
        yield "Third yield value"; // Pause and return this value
    
        console.log("Execution completes!");
    }
    
    const gen = myGenerator();
    
    console.log(gen.next()); // { value: 'First yield value', done: false }
    console.log(gen.next()); // { value: 'Second yield value', done: false }
    console.log(gen.next()); // { value: 'Third yield value', done: false }
    console.log(gen.next()); // { value: undefined, done: true }



    function* fetchData() {
        const response = yield fetch('https://api.example.com/data');
        const data = yield response.json();
        console.log(data);
    }
    
    const generator22 = fetchData();
    
    // Handling promises with generator
    generator22.next().value
        .then(response => generator22.next(response).value)
        .then(data => generator22.next(data));
    