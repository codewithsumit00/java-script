//primitive data type

// let age =35;
// let price =99.00;
// let name ="sumit gautam";
// let isMarried = false;
// let children =null;
// console.log(age);
// console.log(price);
// console.log(name);
// console.log(isMarried);
// console.log(children);

//non primitive data type 


const student ={
    name: "sumit gautam",
    age: 21,
    Goal: "find a every thing in exist world and make it useful for human being",
    CGPA:8.5,
}; 
//console.log(student);
console.log(student.name);
console.log(student["age"]);

student["age"] =student["age"]+ 2;
console.log(student.age);

student["hobby"] = "playing cricket";
console.log(student);